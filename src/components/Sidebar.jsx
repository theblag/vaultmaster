import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/signin'); // Redirect after logout
        console.log('User logged out');
    };
    const handleGenerator = () => {
        navigate("/passwordgenerator");
    }

    return (
        <div className="">
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`absolute md:block hidden md:top-6 md:left-8 z-50 p-2 text-white bg-white/10 border border-white/20 rounded-md ${isOpen ? 'translate-x-45' : 'block'}`}
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`absolute md:hidden left-[85%] top-5 block z-50 p-2 text-white rounded-md ${isOpen ? 'hidden' : 'block'}`}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`absolute md:hidden left-[43%] top-5 block z-50 p-2 text-white rounded-md ${isOpen ? 'translate-x-45' : 'hidden'}`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

            </button>
            {/* Sidebar */}
            <aside
                className={`absolute hidden md:block md:w-64 w-full backdrop-blur-md bg-white/10 border-r border-white/10 p-6 min-h-screen transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'md:translate-x-0  ' : 'md:-translate-x-full '
                    }`}
            >
                <h2 className="text-2xl font-bold mb-8">🔐VaultMaster</h2>
                <nav className="space-y-4">
                    <a href="#" className="block text-white/80 hover:text-white font-medium">Dashboard</a>
                    <a href="#" className="block text-white/60 hover:text-white">My Vault</a>
                    <button onClick={handleGenerator} className="cursor-pointer block text-white/60 hover:text-white">Password Generator</button>                    <a href="#" className="block text-white/60 hover:text-white">Settings</a>
                    <p onClick={handleLogout} className="cursor-pointer block text-white/60 hover:text-white">Logout</p>
                </nav>
            </aside>
            <aside
                className={`absolute md:hidden block md:w-64 w-full backdrop-blur-md bg-white/10 border-r border-white/10 p-6 min-h-screen transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-y-0  ' : '-translate-y-full '
                    }`}
            >
                <h2 className="text-2xl font-bold mb-8">🔐 VaultMaster</h2>
                <nav className="space-y-4">
                    <a href="#" className="block text-white/80 hover:text-white font-medium">Dashboard</a>
                    <a href="#" className="block text-white/60 hover:text-white">My Vault</a>
                    <button onClick={handleGenerator} className="cursor-pointer block text-white/60 hover:text-white">Password Generator</button>
                    <a href="#" className="block text-white/60 hover:text-white">Settings</a>
                    <button onClick={handleLogout} className="cursor-pointer block text-white/60 hover:text-white">Logout</button>
                </nav>
            </aside>

        </div>
    );
};

export default Sidebar;
