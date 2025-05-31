import { supabase } from '../../supabaseClient'; 
import React from 'react';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

function SignIn() {
    const navigate = useNavigate();
    const [session, setSession] = useState(null);

    //  Check if user is already logged in
    useEffect(() => {
        const checkSession = async () => {
            const { data } = await supabase.auth.getSession();
            if (data.session) {
                // Redirect to dashboard if already logged in
                navigate('/dashboard');
                // console.log("session:",data.session);
            }
        };

        checkSession();
    }, [navigate]);

    //  Handle Google login
    const handleSignIn = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'https://vaultmaster.vercel.app/auth/callback', // or your deployed callback URL
            },
        });
    };

    if (!session) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white relative overflow-hidden">
                {/* Animated Background Glow */}
                <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-blue-500 opacity-20 blur-3xl rounded-full animate-float" />
                <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-600 opacity-20 blur-3xl rounded-full animate-float" />

                {/* Sign-In Card */}
                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-10 rounded-2xl shadow-md w-full max-w-md text-center z-10">
                    <h1 className="text-3xl font-bold mb-6">Welcome to Vaultmaster</h1>
                    <p className="text-slate-300 mb-8">Sign in securely to access your vault</p>

                    <button
                        onClick={handleSignIn}
                        className="cursor-pointer w-full flex items-center justify-center bg-white text-black px-6 py-3 rounded-full shadow hover:shadow-lg transition"
                    >
                        <FcGoogle className="text-2xl mr-2" />
                        Sign in with Google
                    </button>

                    <p className="text-sm text-slate-400 mt-6">
                        By continuing, you agree to our <span className="underline">Terms</span> and <span className="underline">Privacy Policy</span>.
                    </p>
                </div>
            </div>
        );
    }
    // if (session) {
    //     return (
    //         <div className="flex items-center justify-center min-h-screen bg-gray-900">
    //             <h1 className="text-white text-3xl">Welcome back!</h1>
    //             <p className="text-slate-300 mt-4">You are signed in as {session.user.email}</p>
    //         </div>
    //     )
    // }

}

export default SignIn;
