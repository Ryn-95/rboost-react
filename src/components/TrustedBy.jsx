import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const companies = [
  {
    name: 'Facebook',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Facebook_icon_192.png/640px-Facebook_icon_192.png',
    delay: 0.2,
    tagline: "Le réseau social qui connecte le monde 🌍",
    description: "Facebook utilise React.js car il offre une interface ultra-réactive et des performances exceptionnelles pour gérer des millions d'interactions en temps réel.",
    gradient: "from-[#0668E1] to-[#0089FF]"
  },
  {
    name: 'Netflix',
    logo: 'https://cdn.worldvectorlogo.com/logos/netflix-3.svg',
    delay: 0.3,
    tagline: "Le streaming qui révolutionne le divertissement 🎬",
    gradient: "from-[#E50914] to-[#B00710]"
  },
  {
    name: 'Airbnb',
    logo: 'https://cdn.worldvectorlogo.com/logos/airbnb-1.svg',
    delay: 0.4,
    tagline: "La plateforme qui réinvente l'hébergement 🏠",
    gradient: "from-[#FF385C] to-[#FF385C]"
  },
  {
    name: 'Instagram',
    logo: 'https://cdn.worldvectorlogo.com/logos/instagram-2016-6.svg',
    delay: 0.5,
    tagline: "L'app qui donne vie à vos stories 📸",
    gradient: "from-[#833AB4] via-[#FD1D1D] to-[#F77737]"
  },
  {
    name: 'Discord',
    logo: 'https://cdn.worldvectorlogo.com/logos/discord-4.svg',
    delay: 0.6,
    tagline: "La communication nouvelle génération 💬",
    gradient: "from-[#5865F2] to-[#4752C4]"
  }
];

const TrustedBy = () => {
  return (
    <section className="relative pt-28 md:pt-32 pb-20 md:pb-32 bg-white overflow-hidden">
      {/* Effet de verre minimaliste */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/50 backdrop-blur-sm"></div>

      {/* Cercles décoratifs subtils */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full blur-3xl -top-[300px] -left-[300px]"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 1, ease: "easeInOut" }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-purple-50 to-pink-50 rounded-full blur-3xl -bottom-[300px] -right-[300px]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-24 mt-8 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-[0.2em] text-blue-600 mb-6 md:mb-4 font-medium mt-6 md:mt-0"
            >
              🚀 La Puissance de React
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 md:mb-12 px-4"
            >
              <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-8 md:mb-6 tracking-tight leading-tight">
                Des sites web{' '}
                <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  qui décoiffent
                </span>
                💨
              </h2>
              
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-6 md:mt-8">
                Propulsé par React, comme les géants du web.{' '}
                <span className="font-semibold">Meta, Netflix, Airbnb...</span> 🎯
                <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 block mt-3">
                  Si React est assez rapide pour Facebook, imaginez pour votre site ! 🏃‍♂️
                </span>
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col md:flex-row gap-4 justify-center mt-8 md:mt-12 px-6 md:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 md:py-3 bg-gray-900 text-white rounded-full text-sm font-medium tracking-wide hover:bg-gray-800 transition-all duration-300"
                >
                  Démarrer la Fusée
                  <span className="ml-2">🚀</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/services"
                  className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 md:py-3 border border-gray-200 text-gray-600 rounded-full text-sm font-medium tracking-wide hover:bg-gray-50 transition-all duration-300"
                >
                  Explorer nos Services
                  <span className="ml-2">🎯</span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm text-gray-500 mt-8 md:mt-6 px-4"
            >
              * Warning : Nos sites sont tellement rapides qu'ils peuvent créer des turbulences ! 🌪️
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center mb-24">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: company.delay, duration: 0.6, ease: "easeOut" }}
              className="group relative w-full max-w-[180px]"
            >
              <div className="relative bg-white rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-1">
                <motion.img
                  src={company.logo}
                  alt={`${company.name} utilise React.js`}
                  className={`h-10 w-auto mx-auto transition-all duration-500 ${company.name === 'Facebook' ? 'h-12' : 'h-10'}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute inset-x-0 bottom-0 translate-y-full pt-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <p className="text-sm text-gray-600 text-center font-light">{company.tagline}</p>
                  {company.name === 'Facebook' && (
                    <p className="text-xs text-gray-500 text-center mt-2 px-2">{company.description}</p>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="mb-8">
            <span className="inline-block text-3xl">💡</span>
          </div>
          <h3 className="text-2xl font-medium text-gray-900 mb-6">
            La Qualité Premium, Sans le Prix Premium
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Sites web professionnels à partir de{' '}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              490€
            </span>
            <br />
            <span className="text-sm mt-2 block text-gray-500">
              (C'est comme Netflix, mais pour votre business... et sans l'abonnement mensuel ! 😉)
            </span>
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-full text-sm font-medium tracking-wide hover:bg-gray-800 transition-all duration-300"
            >
              Commencez Votre Success Story
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy; 