# VAULT MASTER

A secure, modern password manager built with React and Node.js that helps you generate, store, and manage your passwords safely.

## 🔗 Live Working Link

vaultmaster.vercel.app

## 🔐 Features

- **Secure Password Storage**: Store your passwords with high-level encryption using Node.js crypto module
- **Password Generator**: Generate strong passwords using a robust algorithm that creates passwords resistant to brute force attacks
- **Google OAuth Integration**: Secure authentication using Supabase Google OAuth
- **Modern UI**: Clean, responsive interface built with React and Tailwind CSS
- **Strong Security**: Passwords exceeding 12 characters take at least 3 years to crack using brute force methods

## 🛠️ Tech Stack

### Frontend
- **JavaScript**
- **React** - UI framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework

### Backend & Services
- **Supabase** - Google OAuth authentication
- **MongoDB** - Database for secure password storage
- **Node.js Crypto** - Encryption and security

## 🚀 Getting Started

### Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB account/instance
- Supabase account

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/password-manager.git
cd password-manager
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory and add:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

```
Create a `.env` file in the server directory and add:
```env
MONGODB_URI=your_mongodb_connection_string
ENCRYPTION_KEY=your_32_character_encryption_key
```

4. Configure Supabase
- Create a new Supabase project
- Enable Google OAuth in Authentication settings
- Add your domain to the allowed origins

5. Set up MongoDB
- Create a MongoDB database
- Update the connection string in your environment variables

### Running the Application

1. Start the development server
```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173`

## 🔒 Security Features

- **End-to-End Encryption**: All passwords are encrypted using Node.js crypto module before storage
- **Secure Authentication**: Google OAuth integration via Supabase ensures secure user authentication
- **Strong Password Generation**: Generated passwords are designed to withstand brute force attacks
- **Safe Storage**: MongoDB provides secure, scalable database storage

## 🎯 Usage

1. **Sign In**: Use Google OAuth to securely sign into your account
2. **Generate Password**: Use the built-in password generator to create strong passwords
3. **Save Password**: Store your passwords securely with optional labels and categories
4. **Retrieve Password**: Access your saved passwords whenever needed
5. **Manage Passwords**: Edit, delete, or organize your stored passwords

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🛡️ Password Security

The password generator creates strong passwords that:
- Include uppercase and lowercase letters
- Contain numbers and special characters
- Customize the length of your password
- Are designed to take at least 3 years to crack via brute force attacks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Important Security Notes

- Never share your encryption keys
- Always use HTTPS in production
- Regularly update dependencies for security patches
- Keep your Supabase and MongoDB credentials secure
- Consider implementing additional security measures like 2FA for enhanced protection

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Provide steps to reproduce any bugs

## 🚀 Future Enhancements

- Two-factor authentication (2FA)
- Password sharing capabilities
- Browser extension
- Mobile application
- Advanced password analytics
- Backup and sync across devices

---

**⚠️ Disclaimer**: This password manager is designed for educational and personal use. Always ensure you understand the security implications and consider professional security audits for production use.