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
    console.log('État utilisateur:', user);
  }, [user]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const megaMenuContent = {
    services: {
      title: "Nos Services",
      columns: [
        {
          title: "Services Marketing Digital",
          description: "Des solutions complètes pour votre présence en ligne",
          items: [
            { 
              name: "Création de Site Internet", 
              icon: "🌐", 
              link: "/services/web", 
              description: "Sites web professionnels et responsive",
              price: "À partir de 999€"
            },
            { 
              name: "SEO & Content Marketing", 
              icon: "📈", 
              link: "/services/seo", 
              description: "Optimisation pour les moteurs de recherche",
              price: "À partir de 799€/mois"
            },
            { 
              name: "Publicité en Ligne", 
              icon: "🎯", 
              link: "/services/ads", 
              description: "Campagnes Google Ads & Social Ads",
              price: "À partir de 699€/mois"
            },
            { 
              name: "Social Media Management", 
              icon: "📱", 
              link: "/services/social-media", 
              description: "Gestion professionnelle de vos réseaux sociaux",
              price: "À partir de 599€/mois"
            },
            { 
              name: "Email Marketing", 
              icon: "📧", 
              link: "/services/email", 
              description: "Campagnes email personnalisées et automatisées",
              price: "À partir de 499€/mois"
            }
          ]
        }
      ]
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#1a1a2e]/95 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] py-4' 
            : 'bg-[#1a1a2e] py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group relative">
              <motion.span 
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Rboost
              </motion.span>
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
            </Link>

            {/* Navigation Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <Link
                  to="/services"
                  onMouseEnter={() => setActiveMenu('services')}
                  className={`text-sm font-medium transition-all duration-300 px-6 py-2.5 rounded-full relative overflow-hidden ${
                    isActive('/services') || activeMenu === 'services'
                      ? 'text-white bg-gradient-to-r from-blue-400/20 to-purple-400/20 shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="relative z-10">Services</span>
                  {(isActive('/services') || activeMenu === 'services') && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
                <AnimatePresence>
                  {activeMenu === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={() => setActiveMenu(null)}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[500px] bg-[#1a1a2e]/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] border border-white/10 overflow-hidden"
                    >
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          {megaMenuContent.services.columns[0].title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-6">
                          {megaMenuContent.services.columns[0].description}
                        </p>
                        <div className="space-y-4">
                          {megaMenuContent.services.columns[0].items.map((item, itemIdx) => (
                            <motion.div 
                              key={itemIdx}
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                              <Link 
                                to={item.link}
                                className="block p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group border border-white/5 hover:border-white/10"
                              >
                                <div className="flex items-start space-x-4">
                                  <span className="text-2xl group-hover:scale-110 transition-transform mt-1">
                                    {item.icon}
                                  </span>
                                  <div className="flex-1">
                                    <span className="block text-white font-medium group-hover:text-blue-400 transition-colors">
                                      {item.name}
                                    </span>
                                    <span className="text-sm text-gray-400 block mt-1">
                                      {item.description}
                                    </span>
                                    <span className="text-sm text-blue-400 block mt-2">
                                      {item.price}
                                    </span>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 p-6 border-t border-white/5">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                              Besoin d'une stratégie personnalisée ?
                            </h4>
                            <p className="text-sm text-gray-400">
                              Parlons de votre projet
                            </p>
                          </div>
                          <Link
                            to="/contact"
                            className="px-6 py-2.5 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2 group"
                          >
                            <span>Consultation gratuite</span>
                            <svg 
                              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/about"
                className={`text-sm font-medium transition-all duration-300 px-6 py-2.5 rounded-full relative overflow-hidden ${
                  isActive('/about')
                    ? 'text-white bg-gradient-to-r from-blue-400/20 to-purple-400/20 shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`}
              >
                À propos
                {isActive('/about') && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>

              <Link
                to="/contact"
                className={`text-sm font-medium transition-all duration-300 px-6 py-2.5 rounded-full relative overflow-hidden ${
                  isActive('/contact')
                    ? 'text-white bg-gradient-to-r from-blue-400/20 to-purple-400/20 shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`}
              >
                Contact
                {isActive('/contact') && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </div>

            {/* Boutons de connexion/inscription pour desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  {user.isAdmin && (
                    <Link
                      to="/admin"
                      className="text-sm font-medium transition-all duration-300 px-6 py-2.5 rounded-full relative overflow-hidden text-white bg-gradient-to-r from-blue-400/20 to-purple-400/20 hover:from-blue-400/30 hover:to-purple-400/30"
                    >
                      Admin
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="text-sm font-medium transition-all duration-300 px-6 py-2.5 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30"
                  >
                    Déconnexion
                  </button>
                </div>
              ) : (
                <>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/login"
                      className="text-sm font-medium text-gray-200 hover:text-white transition-colors px-6 py-2.5 rounded-full hover:bg-white/10"
                    >
                      Connexion
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/register"
                      className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      Inscription
                    </Link>
                  </motion.div>
                </>
              )}
            </div>

            {/* Bouton menu mobile */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-200 hover:text-white transition-colors"
              >
                <motion.div
                  animate={isMenuOpen ? "open" : "closed"}
                  className="w-6 h-6 flex flex-col justify-center items-center"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 2 }
                    }}
                    className="w-6 h-0.5 bg-current mb-1 transform origin-center"
                  ></motion.span>
                  <motion.span
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    className="w-6 h-0.5 bg-current mb-1"
                  ></motion.span>
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -2 }
                    }}
                    className="w-6 h-0.5 bg-current transform origin-center"
                  ></motion.span>
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile amélioré */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#1a1a2e]/95 backdrop-blur-xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="min-h-screen flex flex-col px-4 py-20">
                <div className="flex-1 space-y-6">
                  {/* Services */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Nos Services
                    </h3>
                    <div className="grid gap-4">
                      {megaMenuContent.services.columns[0].items.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            to={item.link}
                            onClick={() => setIsMenuOpen(false)}
                            className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10"
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{item.icon}</span>
                              <div>
                                <span className="block font-medium text-white">{item.name}</span>
                                <span className="text-sm text-gray-400">{item.description}</span>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation principale */}
                  <div className="space-y-4">
                    <Link
                      to="/about"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 text-white hover:bg-white/5 rounded-xl transition-all"
                    >
                      À propos
                    </Link>
                    <Link
                      to="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 text-white hover:bg-white/5 rounded-xl transition-all"
                    >
                      Contact
                    </Link>
                  </div>
                </div>

                {/* Boutons de connexion */}
                <div className="space-y-4 mt-8">
                  {user ? (
                    <>
                      {user.isAdmin && (
                        <Link
                          to="/admin"
                          onClick={() => setIsMenuOpen(false)}
                          className="block w-full py-3 text-center text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all"
                        >
                          Admin
                        </Link>
                      )}
                      <Link
                        to="/login"
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full py-3 text-center text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all"
                      >
                        Connexion
                      </Link>
                      <Link
                        to="/register"
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full py-3 text-center bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-xl"
                      >
                        Inscription
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full py-3 text-center text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all"
                      >
                        Connexion
                      </Link>
                      <Link
                        to="/register"
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full py-3 text-center bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-xl"
                      >
                        Inscription
                      </Link>
                    </>
                  )}
                </div>
              </div>

              {/* Bouton de fermeture */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 p-2 text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar; 