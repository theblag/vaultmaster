import { useState } from 'react'
import Navbar from '../components/Navbar'
import Manager from '../components/Manager'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { useAuth } from '../context/AuthConnect';

function App() {
    
  return (
    <>
      <div className='h-full min-h-[100vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'>
        <Sidebar />
        <div className="navbar flex justify-center items-center w-full h-20 bg-gradient-to-b from-slate-900 to-transparent">
          <Navbar />
          
        </div>
        <div className='min-h-[90vh]'><Manager /></div>
         <Footer />
        </div>
        
    </>
  )
}

export default App
