import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
import { Copy, Edit, Trash, FolderOpen } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '../context/AuthConnect';
import { div } from 'framer-motion/client';
import { motion } from 'framer-motion';



const Manager = () => {
    const { user } = useAuth();
    const ref = useRef()
    const passRef = useRef()
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [form, setForm] = useState({ site: "", url: "", username: "", password: "" });
    const [passwordArray, setPasswordArray] = useState([]);
    const [newPassword, setnewPassword] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [loading, setLoading] = useState(true);


    const getPasswords = async () => {
        setLoading(true);
        try {
            let req = await fetch(`${import.meta.env.VITE_BACKEND_URL}?user_id=${user.email}`);
            let passwords = await req.json();
            setPasswordArray(passwords);
        } catch (err) {
            console.error("Error fetching passwords:", err);
        }
        setLoading(false);
    };


    useEffect(() => {
        getPasswords()
    }, [])





    const showPassword = () => {
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
            passRef.current.type = "password"
        }
        else {
            ref.current.src = "icons/eyecross.png"
            passRef.current.type = "text"
        }

    }

    const savePassword = async (e) => {
        if (
            form.url.length >= 1 &&
            form.site.length >= 1 &&
            form.username.length >= 1 &&
            form.password.length >= 1
        ) {
            const isEditing = !!form.id;

            const finalForm = {
                ...form,
                id: form.id || uuidv4(),
                user_id: user.email
            };
            if (isEditing) {
                await fetch(import.meta.env.VITE_BACKEND_URL, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id: form.id }),
                });

                finalForm.id = form.id;

                setPasswordArray(passwordArray.map((p) =>
                    p.id === form.id ? finalForm : p
                ));
            } else {
                finalForm.id = uuidv4();
                setPasswordArray([...passwordArray, finalForm]);
            }

            await fetch(import.meta.env.VITE_BACKEND_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(finalForm),
            });

            getPasswords();
            setForm({ site: "", url: "", username: "", password: "" });

            toast('✏️ Password Saved Successfully!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast('❌ Please fill all the details, Fields cannot be left empty!', {
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
    };

    const editPassword = (id) => {
        setForm({ ...passwordArray.filter(item => item.id === id)[0], id: id })
        setPasswordArray(passwordArray.filter(item => item.id !== id))
        setnewPassword(!newPassword);
        setIsVisible(!isVisible);



    }
    const deletePassword = async (id) => {
        let c = confirm("Are you sure you want to delete this password?");
        if (c) {
            let res = await fetch(import.meta.env.VITE_BACKEND_URL, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id })
            });

            let data = await res.json();

            if (data.success) {
                setPasswordArray(passwordArray.filter((item) => item.id !== id));
                toast('🗑️ Password Deleted Successfully!', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            } else {
                toast('❌ Failed to delete password', {
                    position: "top-right",
                    autoClose: 4000,
                    theme: "dark",
                });
            }
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }
    const handleNewPasswordClick = () => {
        setnewPassword(!newPassword);
        setIsVisible(!isVisible);
    }
    const handleClose = () => {
        setnewPassword(!newPassword);
        setIsVisible(!isVisible);
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
    const [visiblePasswords, setVisiblePasswords] = useState({});

    const toggleVisibility = (id) => {
        setVisiblePasswords(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="absolute md:w-fit w-full md:right-0 mr-60">
                {isVisible && (
                    <div className="flex justify-center items-center w-full">

                        <button onClick={handleNewPasswordClick} className=' bg-gradient-to-r from-gray-400/10 via-slate-500/30 to-gray-300/10 border border-gray-700 hover:border-gray-600 hover:bg-transparent cursor-pointer flex justify-center items-center gap-2 mt-5  text-white font-bold py-2 px-4 rounded-full'>
                            <lord-icon
                                className='w-6 h-6'
                                src="https://cdn.lordicon.com/sbnjyzil.json"
                                trigger="hover"
                                state="hover-swirl"
                                colors="primary:#e4e4e4,secondary:#ffffff"
                            >
                            </lord-icon>Create New Password</button>
                    </div>
                )}
                {!isVisible && (
                    <div className="flex justify-end mr-6">
                        <button onClick={handleClose} className='cursor-pointer'>
                            <lord-icon
                                src="https://cdn.lordicon.com/ebyacdql.json"
                                trigger="hover"
                                colors="primary:#ffffff"
                            >
                            </lord-icon>
                        </button>
                    </div>
                )}
            </div>
            <div className='flex flex-col justify-center items-center'>


                {newPassword && (<><div className='md:w-auto w-[80%]'>
                    <h1 className='mb-5 text-2xl font-bold text-center'>Enter the Details</h1>
                    <input type='text' name="site" id="site" value={form.site} onChange={handleChange} placeholder='Enter Website Name' className="w-full mb-3 bg-white/10 backdrop-blur-md text-white placeholder-white/50 border border-white/20 rounded px-4 py-1 focus:outline-none" />
                    <input type='text' name="url" id="url" value={form.url} onChange={handleChange} placeholder='Enter Website URL' className="w-full bg-white/10 backdrop-blur-md text-white placeholder-white/50 border border-white/20 rounded px-4 py-1 focus:outline-none" />
                    <div className='flex gap-5 mt-3'>
                        <input type='text' name="username" id="username" value={form.username} onChange={handleChange} placeholder='Enter Username' className="md:w-[60%] w-[65%] bg-white/10 backdrop-blur-md text-white placeholder-white/50 border border-white/20 rounded px-4 py-1 focus:outline-none" />
                        <div className="relative">
                            <input type='password' ref={passRef} name="password" id="password" value={form.password} onChange={handleChange} placeholder='Enter Password' className="focus:outline-none md:pr-8 pr-8 md:w-full w-full bg-white/10 backdrop-blur-md text-white  placeholder-white/50 border border-white/20 rounded px-4 py-1" />
                            <span className='absolute right-2 top-2 invert'>
                                <img width={20} ref={ref} className='cursor-pointer' src="icons/eye.png" onClick={showPassword} alt="showPassword?" />
                            </span>
                        </div>
                    </div>
                </div>
                    <button onClick={savePassword} className='bg-gradient-to-r from-gray-400/10 via-slate-500/30 to-gray-300/10 border border-gray-700 hover:border-gray-600 hover:bg-transparent cursor-pointer flex justify-center items-center gap-2 mt-5  text-white font-bold py-2 px-4 rounded-full'>
                        <lord-icon
                            className='w-6 h-6'
                            src="https://cdn.lordicon.com/gzqofmcx.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                        >
                        </lord-icon>Save Password</button>
                </>
                )}




            </div>
            <div className="passwords mt-24">
                <h1 className='md:text-3xl font-bold text-center mx-auto w-1/2 text-2xl md:w-1/2 mt-2 md:mt-10 md:mb-10 pb-3'>Your Passwords</h1>
            </div>
            {loading &&
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-56 m-10">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="h-64 bg-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-700/30 animate-pulse"
                        />
                    ))}
                </div>
            }


            {!loading && passwordArray.length === 0 && <div className="flex flex-col items-center text-slate-400 mt-20">
                <FolderOpen size={48} className="mb-4" />
                <p className="text-lg">No passwords saved yet</p>
            </div>}
            <div className='grid md:grid-cols-3 mb-10 gap-4 w-[80%] md:w-[60%] mx-auto md:mt-5'>
                {passwordArray.length != 0 && passwordArray.map((item) => {
                    return (

                        <div className="relative backdrop-blur-md overflow-hidden w-full mx-auto bg-white/10 border border-white/10 p-4 rounded-xl shadow hover:shadow-lg transition ">
                            <div className="absolute top-2 right-2">
                                <div key={item.id} className="relative">
                                    <button
                                        onClick={() =>
                                            setActiveDropdown(activeDropdown === item.id ? null : item.id)
                                        }
                                        className="absolute top-2 right-2 text-xl text-white/80 hover:text-white cursor-pointer"
                                    >
                                        ⋮
                                    </button>

                                    {activeDropdown === item.id && (
                                        <div className="flex flex-col text-slate-950 absolute right-2 top-10 w-32 bg-white border border-slate-200 rounded-md shadow-lg z-10">
                                            <button onClick={() => editPassword(item.id)} className="px-4 py-2 rounded-md text-sm text-left hover:bg-slate-100 flex items-center">
                                                <Edit size={16} className="mr-2" /> Edit
                                            </button>

                                            <button onClick={() => { deletePassword(item.id) }} className="px-4 py-2 rounded-md text-sm text-left hover:bg-slate-100 text-red-600 flex items-center">
                                                <Trash size={16} className="mr-2" /> Delete
                                            </button>
                                        </div>
                                    )}
                                </div>


                            </div>


                            <h3 className="text-xl font-medium overflow-hidden ml-1 w-[80%] md:w-[80%] overflow-y-hidden h-10">{item.site}</h3>
                            <p className="text-sm text-blue-400 mb-3 ml-1 w-[80%] overflow-hidden"><a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a></p>
                            <div className="relative mb-2 py-1.5 space-x-1 flex items-center border border-white/10 rounded-full">
                                <span className="ml-4 w-[70%] md:w-[75%] overflow-hidden">
                                    {item.username}
                                </span>

                                <div className='absolute left-[75%] md:left-[80%] mt-1 space-x-2 ml-5'>

                                    <button className="text-white/80 hover:text-white" >
                                        <Copy onClick={() => { copyText(item.username) }} size={16} className='cursor-pointer' />
                                    </button>

                                </div>
                            </div>
                            <div className="relative py-1 flex items-center space-x-1 border border-white/10 rounded-full">
                                <input
                                    type={visiblePasswords[item.id] ? 'text' : 'password'}
                                    value={item.password}
                                    readOnly
                                    className="px-3 py-1 mr-2 w-[75%] overflow-hidden focus:outline-none "
                                />
                                <div className="absolute md:ml-[75%] ml-[70%] mt-1">
                                    <button className="invert opacity-80 hover:opacity-100 px-2">
                                        <img width={16} onClick={() => toggleVisibility(item.id)} className='cursor-pointer' src={visiblePasswords[item.id] ? 'icons/eyecross.png' : 'icons/eye.png'} alt="" />
                                    </button>
                                    <button className="text-white/80 hover:text-white" >
                                        <Copy onClick={() => { copyText(item.password) }} size={16} className='cursor-pointer' />
                                    </button>
                                </div>

                            </div>
                        </div>
                    )
                })
                }
            </div>

        </div>
    )
}

export default Manager
