import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from '../src/components/protectedRoute'
import LandingPage from './pages/LandingPage'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Callback from './auth/callback'
import PasswordGenerator from './pages/PasswordGenerator';
const App = () => {
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/passwordgenerator" element={<PasswordGenerator />} />

          <Route path="/auth/callback" element={<Callback />} />
        </Routes>
    </div>
  )
}

export default App
