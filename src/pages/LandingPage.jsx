import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { FaLock, FaUserShield, FaMobileAlt } from 'react-icons/fa';
import { Sparkles, ShieldCheck } from 'lucide-react';
import Particle from '../components/Particle'

function App() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/SignIn");
  }
  const handlePwdClick = () => {
    navigate("/PasswordGenerator");
  }
  return (
    <>
      <Particle />
      <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white min-h-screen">
        {/* Hero Section */}
        {/* Animated Background Blobs */}
        {/* <div className="absolute inset-0 overflow-hidden ">
          <div className="absolute top-[0px] left-[35%] w-[400px] h-[400px] bg-amber-600 opacity-20 blur-3xl rounded-full animate-float" />
          <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-orange-600 opacity-20 blur-3xl rounded-full animate-float delay-2000" />
        </div> */}

        <motion.section
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center text-center py-20 px-4"
        >
          <div className="relative z-10 rounded-xl p-8 w-full ">
            <h1 className="text-5xl md:text-9xl font-bold mb-4">VAULTMASTER</h1>
            <p className="text-xl text-slate-300 mt-14 mb-6">
              Your all-in-one hub to store, manage, and generate passwords seamlessly
            </p>
            <button

              className="px-6 py-2 text-white font-semibold cursor-pointer rounded-full mt-4 border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition duration-300"
              onClick={handleClick}
            >
              Get Started
            </button>
          </div>
        </motion.section>

        {/* Features Section */}
        <section className="pb-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-xl text-center"
            >
              <FaLock className="text-4xl mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
              <p className="text-slate-300">
                Keep your passwords encrypted and safe from prying eyes.
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-xl text-center"
            >
              <FaUserShield className="text-4xl mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2">User Privacy</h3>
              <p className="text-slate-300">
                Your data is yours alone. We respect your privacy.
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-xl text-center"
            >
              <FaMobileAlt className="text-4xl mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2">Mobile Friendly</h3>
              <p className="text-slate-300">
                Access your vault anytime, anywhere, on any device.
              </p>
            </motion.div>
          </div>
        </section>
        <motion.section
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" text-center py-20 px-4"
        >
          <h1 className='font-bold text-5xl'>
            Password Manager
          </h1>

          <div className="relative max-w-2xl mx-auto mt-12">
            {/* Glowing Background Blobs */}
            <div className="absolute -top-3 -left-8 w-35 h-35 bg-blue-500 opacity-10 blur-2xl rounded-full animate-pulse z-0" />
            {/* <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600 opacity-10 blur-2xl rounded-full animate-pulse z-0" /> */}

            {/* Glassmorphic Card */}
            <div className="relative z-10 bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-xl text-white">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600/20 border border-blue-500/30 rounded-full shadow-inner">
                  <Sparkles className="text-blue-300" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold mb-2 tracking-wide text-white">
                    Check out our new password generator
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    It generates ultra-secure passwords using a fully client-side algorithm.
                    Nothing is stored, nothing is shared. Just strong, private, encrypted randomness —
                    right in your browser.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-green-400 text-sm">
                    <ShieldCheck size={18} />
                    <span>100% privacy-safe & zero data retention</span>
                  </div>
                </div>
              </div>
              <button onClick={handlePwdClick} className="cursor-pointer mt-10 bg-gradient-to-r from-blue-600/30 via-blue-500/40 to-purple-600/30 backdrop-blur-md border border-white/20 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-80 transition-all duration-300">
                Try Now
              </button>
            </div>
          </div>


        </motion.section>
        {/* Footer */}
        <footer className="bg-white/5 border-t border-white/10 backdrop-blur-md py-6 text-center">
          <div className="flex justify-center items-center gap-2">
            <a href="https://github.com/theblag" target="_blank">
            <lord-icon
              src="https://cdn.lordicon.com/ioihllwu.json"
              trigger="hover"
              colors="primary:#3a3347,secondary:#ebe6ef"
              alt="Github Logo">
            </lord-icon></a>
          <a href='https://www.instagram.com/adityaarun._.10/' target='_blank'><lord-icon
            src="https://cdn.lordicon.com/wbuzyhjx.json"
            trigger="hover"
            colors="primary:#545454,secondary:#e4e4e4,tertiary:#ffc738,quaternary:#4bb3fd">
          </lord-icon></a>
          <a href='https://www.linkedin.com/in/aditya-a-664089332/' target='_blank'>
            <lord-icon
              src="https://cdn.lordicon.com/nwqudhei.json"
              trigger="morph"
              state="morph-alone"
              colors="primary:#545454,secondary:#e4e4e4">
            </lord-icon>
          </a>
          </div>
          <p className="text-slate-400">&copy; {new Date().getFullYear()} Vaultmaster. All rights reserved.</p>

        </footer>
      </div>
    </>
  );
}

export default App;
