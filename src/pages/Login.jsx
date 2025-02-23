import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import api from '../api/config';
import Swal from 'sweetalert2';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post('/auth/login', formData);
      
      if (response.data.success) {
        console.log('Données utilisateur reçues:', response.data.user);
        // Mettre à jour le contexte d'authentification
        login(response.data.user, response.data.token);

        // Afficher un message de succès
        Swal.fire({
          icon: 'success',
          title: 'Connexion réussie !',
          text: 'Vous allez être redirigé...',
          timer: 1500,
          showConfirmButton: false
        });

        // Rediriger vers le tableau de bord si admin, sinon vers la page d'accueil
        setTimeout(() => {
          if (response.data.user.isAdmin) {
            console.log('Utilisateur admin détecté, redirection vers /admin');
            navigate('/admin');
          } else {
            console.log('Utilisateur non-admin, redirection vers /');
            navigate('/');
          }
        }, 1500);
      }
    } catch (error) {
      console.error('Erreur de connexion:', error);
      
      Swal.fire({
        icon: 'error',
        title: 'Erreur de connexion',
        text: error.response?.data?.message || 'Une erreur est survenue lors de la connexion',
        confirmButtonText: 'Réessayer'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black py-32 overflow-hidden">
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `-${Math.random() * 6}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-md mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                Connexion
              </h1>
              <p className="text-gray-400">
                Accédez à votre espace personnel
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="exemple@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-600 text-blue-500 focus:ring-blue-500 bg-gray-700/50"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                    Se souvenir de moi
                  </label>
                </div>

                <div className="text-sm">
                  <Link to="/forgot-password" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    Mot de passe oublié ?
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium 
                  ${loading ? 'opacity-75 cursor-not-allowed' : 'hover:from-blue-700 hover:to-emerald-700 transform hover:scale-105'}
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 
                  transition-all duration-300`}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                    Connexion en cours...
                  </div>
                ) : (
                  'Se connecter'
                )}
              </button>

              <div className="text-center mt-6">
                <p className="text-gray-400">
                  Pas encore de compte ?{' '}
                  <Link to="/register" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    S'inscrire
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Login; 