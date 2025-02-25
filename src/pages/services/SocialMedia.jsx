import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
  const platforms = [
    {
      name: "Instagram",
      icon: "📸",
      features: ["Création de contenu", "Stories & Reels", "Engagement organique"]
    },
    {
      name: "Facebook",
      icon: "👥",
      features: ["Gestion de communauté", "Publicités ciblées", "Analyse des performances"]
    },
    {
      name: "LinkedIn",
      icon: "💼",
      features: ["Personal Branding", "Content B2B", "Lead Generation"]
    },
    {
      name: "TikTok",
      icon: "🎵",
      features: ["Création de vidéos", "Tendances virales", "Engagement Gen Z"]
    }
  ];

  const pricing = {
    basic: {
      name: "Social Starter",
      price: "599€/mois",
      features: [
        "2 réseaux sociaux",
        "8 posts/mois",
        "Design de base",
        "Rapport mensuel",
        "Support par email",
        "Veille concurrentielle"
      ]
    },
    pro: {
      name: "Social Business",
      price: "1199€/mois",
      features: [
        "4 réseaux sociaux",
        "20 posts/mois",
        "Design personnalisé",
        "Stories & Reels",
        "Support prioritaire",
        "Stratégie de contenu"
      ]
    },
    enterprise: {
      name: "Social Enterprise",
      price: "Sur devis",
      features: [
        "Réseaux illimités",
        "Posts illimités",
        "Design premium",
        "Contenu sur mesure",
        "Support dédié 24/7",
        "Stratégie globale"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 px-4">
              Gestion Professionnelle de vos{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Réseaux Sociaux
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Développez votre présence en ligne et engagez votre communauté avec une stratégie social media sur mesure
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="block w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all text-center"
                >
                  Commencer maintenant
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="block w-full sm:w-auto px-8 py-3 border border-white/10 rounded-full font-medium hover:bg-white/5 transition-all text-center"
                >
                  Demander un devis
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#1a1a3e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Plateformes Gérées</h2>
            <p className="text-gray-400">Une expertise sur tous les réseaux sociaux majeurs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 rounded-2xl p-4 sm:p-6 backdrop-blur-xl border border-white/10"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{platform.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{platform.name}</h3>
                <ul className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="text-sm sm:text-base text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-[#1a1a3e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nos Forfaits</h2>
            <p className="text-gray-400">Des solutions adaptées à vos besoins</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(pricing).map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 rounded-2xl p-8 backdrop-blur-xl border border-white/10 relative group hover:border-blue-400/30 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/5 group-hover:to-purple-400/5 rounded-2xl transition-all"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-6">{pkg.price}</div>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/contact"
                      className="block w-full py-3 text-center bg-gradient-to-r from-blue-400 to-purple-400 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                    >
                      Choisir ce forfait
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a3e] to-[#1a1a2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-2xl p-12 backdrop-blur-xl border border-white/10 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Prêt à booster votre présence sociale ?</h2>
            <p className="text-gray-400 mb-8">
              Prenez rendez-vous pour une consultation gratuite et découvrez comment nous pouvons vous aider
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Réserver ma consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia; 