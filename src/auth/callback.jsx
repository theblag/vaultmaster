import { useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';

const AuthCallback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate('/Dashboard');
      } else {
        navigate('/signin');
      }
    };

    checkSession();
  }, [navigate]);

  return <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white relative">
  {/* Background Glow */}
  <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-blue-500 opacity-20 blur-3xl rounded-full animate-float" />
  <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-600 opacity-20 blur-3xl rounded-full animate-float" />

  {/* Loader */}
  <div className="backdrop-blur-md border border-white/10 bg-white/5 px-8 py-6 rounded-xl shadow-lg text-center z-10">
    <div className="mb-4">
      <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto" />
    </div>
    <p className="text-lg text-slate-300">Signing you in...</p>
  </div>
</div>

};

export default AuthCallback;
