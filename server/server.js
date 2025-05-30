const express = require('express');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser');
const cors = require('cors');
const { encrypt, decrypt } = require('./encryptUtils');

dotenv.config(); // only needed for local development

const app = express();
const port = process.env.PORT || 3000;
const url = process.env.MONGODB_URI;
const dbName = 'vaultmaster';

app.use(bodyparser.json());
app.use(cors());

async function startServer() {
  try {
    const client = new MongoClient(url);
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection('passwords');

    // POST - Save encrypted password
    app.post('/', async (req, res) => {
      const password = req.body;

      if (!password.user_id || !password.password) {
        return res.status(400).json({ error: 'Missing user_id or password' });
      }

      const encryptedPassword = encrypt(password.password);
      password.password = encryptedPassword;

      const insertResult = await collection.insertOne(password);
      res.send({ success: true, result: insertResult });
    });

    // GET - Retrieve and decrypt passwords for a user
    app.get('/', async (req, res) => {
      const user_id = req.query.user_id;

      if (!user_id) {
        return res.status(400).json({ error: 'Missing user_id in query' });
      }

      const findResult = await collection.find({ user_id }).toArray();

      const decryptedPasswords = findResult.map(entry => ({
        ...entry,
        password: entry.password ? decrypt(entry.password) : null,
      }));

      res.json(decryptedPasswords);
    });

    // DELETE - Delete a password by custom id
    app.delete('/', async (req, res) => {
      const { id } = req.body;

      if (!id) {
        return res.status(400).send({ success: false, message: 'No id provided' });
      }

      const findResult = await collection.deleteOne({ id });

      if (findResult.deletedCount === 1) {
        res.send({ success: true, result: findResult });
      } else {
        res.status(404).send({ success: false, message: 'Password not found' });
      }
    });

    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
    });

  } catch (err) {
    console.error('❌ Failed to connect to MongoDB:', err);
  }
}

startServer();
