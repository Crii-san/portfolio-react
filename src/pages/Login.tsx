import { useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F9FAFF] px-6">
      <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-900 font-playfair mb-4">
            Administrateur
        </h1>
        <div className="w-16 h-1 bg-[#FDC435] mb-8 rounded" />
        
        <p className="text-[#828282] font-nunito text-center mb-8 text-lg">
          Veuillez vous connecter avec votre compte Google pour accéder au dashboard d'administration.
        </p>

        <button 
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-full px-6 py-2.5 font-roboto text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
        >
          <FaGoogle />
          Se connecter avec Google
        </button>
        
        <button 
          onClick={() => navigate('/')}
          className="mt-8 text-gray-500 hover:text-black font-nunito text-sm"
        >
          Retour au portfolio
        </button>
      </div>
    </main>
  );
}