import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  const services = [
    {
      name: "Création de Site Internet",
      description: "Sites web professionnels et responsive",
      price: "À partir de 490€",
      icon: "🚀",
      path: "/services/web"
    },
    {
      name: "SEO & Content Marketing",
      description: "Optimisation pour les moteurs de recherche",
      price: "À partir de 799€/mois",
      icon: "📈",
      path: "/services/seo"
    },
    {
      name: "Publicité en Ligne",
      description: "Campagnes Google Ads & Social Ads",
      price: "À partir de 699€/mois",
      icon: "🎯",
      path: "/services/ads"
    },
    {
      name: "Social Media Management",
      description: "Gestion professionnelle de vos réseaux sociaux",
      price: "À partir de 599€/mois",
      icon: "📱",
      path: "/services/social-media"
    }
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#1a1a2e]/80 backdrop-blur-2xl border-b border-white/5 py-3 shadow-2xl shadow-blue-500/10' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo amélioré avec effet glassmorphism */}
            <Link to="/" className="group flex items-center space-x-4">
              <div className="relative w-12 h-12">
                {/* Effet de glassmorphism amélioré */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-xl backdrop-blur-md" />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-75"
                  animate={{ 
                    rotate: [0, 180],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-bl from-cyan-500 via-blue-500 to-purple-500 rounded-xl opacity-50 blur-sm"
                  animate={{ 
                    rotate: [180, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                {/* Logo principal avec effet néon */}
                <div className="absolute inset-0 bg-[#1a1a2e]/90 rounded-xl transform transition-all duration-300 group-hover:scale-95 flex items-center justify-center overflow-hidden">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transform transition-transform group-hover:scale-110 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                    R
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <motion.span 
                  className="text-xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                  whileHover={{ scale: 1.05 }}
                >
                  RBoost
                </motion.span>
                <span className="text-xs text-blue-400/60 font-light tracking-wider">Digital Agency</span>
              </div>
            </Link>

            {/* Navigation Desktop avec effet glassmorphism */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <div className="flex items-center space-x-2">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      to="/services"
                      className={`px-5 py-2.5 rounded-full transition-all duration-300 ${
                        isActive('/services') 
                          ? 'bg-white/10 text-white shadow-lg shadow-blue-500/10 border border-white/10 backdrop-blur-xl' 
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      Services
                    </Link>
                  </motion.div>
                  <motion.button
                    onClick={() => setActiveMenu(activeMenu === 'services' ? null : 'services')}
                    className={`p-2.5 rounded-full transition-all duration-300 ${
                      activeMenu === 'services' 
                        ? 'bg-white/10 text-white shadow-lg shadow-blue-500/10 border border-white/10 backdrop-blur-xl' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.svg 
                      className="w-4 h-4"
                      animate={{ rotate: activeMenu === 'services' ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.button>
                </div>

                {/* Mega Menu avec effet glassmorphism */}
                <AnimatePresence>
                  {activeMenu === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 right-0 mt-4 w-[600px] bg-[#1a1a2e]/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-blue-500/10 overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="grid gap-4">
                          {services.map((service, index) => (
                            <motion.div
                              key={service.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="group"
                            >
                              <Link 
                                to={service.path}
                                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-white/10 hover:shadow-lg hover:shadow-blue-500/5"
                                onClick={() => setActiveMenu(null)}
                              >
                                <motion.div 
                                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center backdrop-blur-xl border border-white/5"
                                  whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
                                >
                                  <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">{service.icon}</span>
                                </motion.div>
                                <div className="flex-1">
                                  <span className="block text-white font-medium group-hover:text-blue-400 transition-colors">
                                    {service.name}
                                  </span>
                                  <span className="text-sm text-gray-400/80 block mt-1">
                                    {service.description}
                                  </span>
                                  <span className="text-sm text-blue-400/90 block mt-2 font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-3 py-1 rounded-full inline-block backdrop-blur-xl border border-white/5">
                                    {service.price}
                                  </span>
                                </div>
                                <motion.div 
                                  className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity"
                                  whileHover={{ scale: 1.2 }}
                                >
                                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                  </svg>
                                </motion.div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/about" 
                  className={`px-5 py-2.5 rounded-full transition-all duration-300 ${
                    isActive('/about') 
                      ? 'bg-white/10 text-white shadow-lg shadow-blue-500/10 border border-white/10 backdrop-blur-xl' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  À Propos
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/contact"
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border border-white/10 backdrop-blur-xl"
                >
                  Nous Contacter
                </Link>
              </motion.div>

              {user ? (
                <div className="flex items-center space-x-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      to="/admin" 
                      className="px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                    >
                      Dashboard
                    </Link>
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                  >
                    Déconnexion
                  </motion.button>
                </div>
              ) : (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/login"
                    className="px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                  >
                    Connexion
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Bouton menu mobile amélioré */}
            <div className="lg:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 backdrop-blur-xl"
              >
                <span className="sr-only">{isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
                {isMenuOpen ? (
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Menu mobile amélioré */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-x-0 top-[72px] bg-[#1a1a2e]/90 backdrop-blur-2xl border-b border-white/10 overflow-hidden max-h-[calc(100vh-72px)] overflow-y-auto"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Services avec sous-menu */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Link
                      to="/services"
                      className={`flex-1 px-4 py-3 rounded-xl transition-all ${
                        isActive('/services') ? 'bg-white/10 text-white border border-white/10 backdrop-blur-xl' : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => setActiveMenu(null)}
                    >
                      Services
                    </Link>
                    <motion.button
                      onClick={() => setActiveMenu(activeMenu === 'services' ? null : 'services')}
                      className="p-3 ml-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 backdrop-blur-xl"
                      animate={{ rotate: activeMenu === 'services' ? 180 : 0 }}
                    >
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.button>
                  </div>

                  <AnimatePresence>
                    {activeMenu === 'services' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2 pl-4"
                      >
                        {services.map((service, index) => (
                          <motion.div
                            key={service.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Link
                              to={service.path}
                              className="flex items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 backdrop-blur-xl group"
                              onClick={() => {
                                setActiveMenu(null);
                                setIsMenuOpen(false);
                              }}
                            >
                              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mr-3 border border-white/5">
                                <span className="text-xl filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">{service.icon}</span>
                              </div>
                              <div className="flex-1">
                                <span className="block text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                                  {service.name}
                                </span>
                                <span className="text-xs text-gray-400/80">{service.price}</span>
                              </div>
                              <motion.div
                                className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                whileHover={{ scale: 1.2 }}
                              >
                                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                              </motion.div>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/about"
                  className={`block px-4 py-3 rounded-xl transition-all ${
                    isActive('/about') ? 'bg-white/10 text-white border border-white/10 backdrop-blur-xl' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  À Propos
                </Link>

                <Link
                  to="/contact"
                  className="block px-4 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-medium text-center hover:shadow-lg hover:shadow-blue-500/25 transition-all border border-white/10 backdrop-blur-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nous Contacter
                </Link>

                {user ? (
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <Link
                      to="/admin"
                      className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all backdrop-blur-xl"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all backdrop-blur-xl"
                    >
                      Déconnexion
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all backdrop-blur-xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Connexion
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Overlay amélioré */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 