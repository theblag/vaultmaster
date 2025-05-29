import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from "../src/context/AuthConnect.jsx";
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>
)
