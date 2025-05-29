import React from 'react'
import { useState } from 'react'
import Particle from '../components/Particle'
import { Copy, AlertTriangle, ArrowLeft, ShieldCheck } from 'lucide-react'
import generator from '../utils/generator'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer'

const PasswordGenerator = () => {
  const [generated, setGenerated] = React.useState(false);
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const generatePassword = () => {
    setGenerated(true);
    setPassword(generator(length))
  }
  const copyText = (text) => {
    navigator.clipboard.writeText(text)
    toast('📋 Copied to Clipboard!', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/dashboard")
  }
  return (
    <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950'>
      <Particle />
      <button onClick={goBack} className='absolute invert md:left-10 md:top-10 hover:bg-black/10 rounded-lg cursor-pointer'><ArrowLeft size={30} /></button>
      <div className=" h-screenh-full min-h-[100vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white">
        <h1 className='text-5xl pt-8 md:text-8xl font-bold text-center'>PASSWORD GENERATOR</h1>
        <div className='bg-white/10 border border-white/10 mx-2 md:w-1/2 md:mx-auto p-8 rounded-lg backdrop-blur-md mt-20'>
          <h2 className='text-xl font-bold'>ENTER THE LENGTH</h2>
          <input type="number" value={length} onChange={(e) => setLength(Number(e.target.value))} className='focus:outline-none w-full p-2 mt-4 rounded-lg bg-white/20 text-white' placeholder='Enter length of password' />
          <p className='flex md:items-center text-xs gap-1 text-gray-300/70 mt-1 ml-1'><AlertTriangle size={12} />It is recommended that the password length exceed 12. Short passwords are easier to crack!</p>
          {generated && (
            <div className='flex justify-c enter gap-5 items-center mt-5 border border-white/10 p-4 rounded-lg bg-white/5'>
              <h1 className='text-center w-full'>{password}</h1>
              <button className="text-white/80 hover:text-white" >
                <Copy onClick={() => { copyText(password) }} size={16} className='cursor-pointer' />
              </button>
            </div>
          )}
          <button onClick={generatePassword} className="mx-auto bg-gradient-to-r from-gray-400/10 via-slate-500/30 to-gray-300/10 border border-gray-700 hover:border-gray-600 hover:bg-transparent flex justify-center items-center gap-2 mt-5 text-white font-bold py-2 px-4 rounded-full cursor-pointer">
            Generate
          </button>
        </div>
        <div className="w-full flex justify-center items-center gap-2 text-slate-400 text-sm mt-4">
          <ShieldCheck size={16} className="text-green-400" />
          <span>
            We don’t store or save any passwords generated. Vaultmaster only helps you generate strong passwords.
          </span>
        </div>

      </div>
      <footer className="bg-white/5 border-t border-white/10 backdrop-blur-md py-6 text-center">
        <p className="text-slate-400">&copy; {new Date().getFullYear()} Vaultmaster. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default PasswordGenerator
