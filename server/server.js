const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb'); 
const bodyparser = require('body-parser')
const cors = require('cors')

dotenv.config({path: '../.env'});


// Connecting to the MongoDB Client
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
client.connect();

// App & Database
const dbName = 'vaultmaster';
const app = express()
const port = 3000 

// Middleware
app.use(bodyparser.json())
app.use(cors())
const { encrypt, decrypt } = require('./encryptUtils');

// POST - Save encrypted password
app.post('/', async (req, res) => { 
    const password = req.body;

    if (!password.user_id || !password.password) {
        return res.status(400).json({ error: "Missing user_id or password" });
    }

    const db = client.db(dbName);
    const collection = db.collection('passwords');

    const encryptedPassword = encrypt(password.password);
    password.password = encryptedPassword;

    const insertResult = await collection.insertOne(password);
    res.send({ success: true, result: insertResult });
});
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const user_id = req.query.user_id;

    if (!user_id) {
        return res.status(400).json({ error: "Missing user_id in query" });
    }

    const findResult = await collection.find({ user_id }).toArray();

    const decryptedPasswords = findResult.map(entry => ({
        ...entry,
        password: entry.password ? decrypt(entry.password) : null,
    }));
    res.json(decryptedPasswords);
});


// Delete a password by id
app.delete('/', async (req, res) => {
    const { id } = req.body;  // expecting { id: 'some-uuid' }
    if (!id) {
        return res.status(400).send({ success: false, message: "No id provided" });
    }

    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne({ id });  // match by your custom id field

    if (findResult.deletedCount === 1) {
        res.send({ success: true, result: findResult });
    } else {
        res.status(404).send({ success: false, message: "Password not found" });
    }
});



app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
})