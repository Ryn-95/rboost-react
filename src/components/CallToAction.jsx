import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const features = [
    {
      icon: "🚀",
      title: "Vitesse Supersonique",
      description: "Sites web plus rapides qu'un café serré le matin. Google nous demande nos secrets ! 🏃‍♂️",
      gradient: "from-blue-500/10 to-cyan-500/10",
      delay: 0.2
    },
    {
      icon: "🛡️",
      title: "Sécurité Imprenable",
      description: "Protection plus solide que le coffre-fort de Gringotts. Les hackers nous évitent ! 🔒",
      gradient: "from-purple-500/10 to-pink-500/10",
      delay: 0.4
    },
    {
      icon: "🎯",
      title: "Support Légendaire",
      description: "Une équipe plus réactive que votre ex sur Instagram. 24/7, même pendant les matchs ! 🏆",
      gradient: "from-amber-500/10 to-orange-500/10",
      delay: 0.6
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Effet de particules minimaliste */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{ 
              y: [null, Math.random() * -400],
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="inline-flex items-center px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8"
          >
            <span className="text-blue-200 text-sm font-light tracking-wide">
              La Différence RBoost 🌟
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
            Performance{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 font-medium">
                Maximum
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-300/10 to-cyan-300/10 blur-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span>
          </h2>
          <p className="text-blue-100/80 text-lg mb-8">
            Attachez vos ceintures, on passe à la vitesse supérieure ! 🏎️
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: feature.delay }}
              className="group"
            >
              <Link 
                to={feature.icon === "🚀" ? "/services/web" : 
                    feature.icon === "🛡️" ? "/about" : 
                    "/contact"}
                className="block"
              >
                <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:bg-white/10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="text-3xl mb-6"
                  >
                    {feature.icon}
                  </motion.div>

                  <h3 className="text-xl font-light text-white mb-4 tracking-wide">
                    {feature.title}
                  </h3>
                  
                  <p className="text-blue-100/80 text-sm leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-light text-white mb-6 tracking-wide">
              Fun fact : Nos sites sont tellement rapides que même Flash nous a demandé des conseils ! 🏃‍♂️✨
            </h3>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-white/10 hover:bg-white/15 text-white rounded-full text-sm tracking-wide transition-all duration-300"
              >
                Boostez Votre Projet 🚀
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Effet de vague minimaliste */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
        <svg className="relative block w-full h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-white/5" />
        </svg>
      </div>
    </section>
  );
};

export default CallToAction; 