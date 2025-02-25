import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Ads = () => {
  const adTypes = [
    {
      name: "Google Ads",
      icon: "🎯",
      features: [
        "Campagnes Search",
        "Display Advertising",
        "Remarketing",
        "Shopping Ads"
      ]
    },
    {
      name: "Facebook & Instagram Ads",
      icon: "📱",
      features: [
        "Posts sponsorisés",
        "Stories Ads",
        "Carousel Ads",
        "Lead Generation"
      ]
    },
    {
      name: "LinkedIn Ads",
      icon: "💼",
      features: [
        "Sponsored Content",
        "Message Ads",
        "Dynamic Ads",
        "Lead Forms"
      ]
    },
    {
      name: "YouTube Ads",
      icon: "🎥",
      features: [
        "In-Stream Ads",
        "Discovery Ads",
        "Bumper Ads",
        "Video Remarketing"
      ]
    }
  ];

  const packages = [
    {
      name: "Starter Ads",
      price: "699€/mois",
      features: [
        "1 plateforme publicitaire",
        "Budget ads jusqu'à 1500€",
        "2 campagnes actives",
        "Rapport mensuel",
        "Support par email"
      ]
    },
    {
      name: "Business Ads",
      price: "1299€/mois",
      features: [
        "2 plateformes publicitaires",
        "Budget ads jusqu'à 5000€",
        "5 campagnes actives",
        "A/B Testing",
        "Remarketing",
        "Rapport hebdomadaire",
        "Support prioritaire"
      ]
    },
    {
      name: "Premium Ads",
      price: "2499€/mois",
      features: [
        "Toutes les plateformes",
        "Budget ads illimité",
        "Campagnes illimitées",
        "Tests avancés",
        "Stratégie personnalisée",
        "Rapport en temps réel",
        "Support dédié 24/7",
        "Formation équipe"
      ]
    }
  ];

  const benefits = [
    {
      title: "Résultats Rapides",
      description: "Générez du trafic et des conversions dès le lancement de vos campagnes",
      icon: "⚡"
    },
    {
      title: "Ciblage Précis",
      description: "Atteignez exactement votre audience cible au bon moment",
      icon: "🎯"
    },
    {
      title: "ROI Optimisé",
      description: "Maximisez votre retour sur investissement publicitaire",
      icon: "📈"
    },
    {
      title: "Data Driven",
      description: "Optimisations basées sur les données en temps réel",
      icon: "📊"
    }
  ];

  const pricing = {
    basic: {
      name: "Ads Starter",
      price: "699€/mois",
      features: [
        "Configuration compte",
        "1 campagne",
        "Mots-clés ciblés",
        "Rapport mensuel",
        "Support par email",
        "Budget pub non inclus"
      ]
    },
    pro: {
      name: "Ads Business",
      price: "1299€/mois",
      features: [
        "Tout Ads Starter +",
        "3 campagnes",
        "Remarketing",
        "A/B Testing",
        "Support prioritaire",
        "Budget pub non inclus"
      ]
    },
    enterprise: {
      name: "Ads Enterprise",
      price: "Sur devis",
      features: [
        "Solution sur mesure",
        "Campagnes illimitées",
        "Stratégie multi-canal",
        "Optimisation avancée",
        "Support dédié 24/7",
        "Budget pub non inclus"
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
              Publicité{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                en Ligne
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Maximisez votre visibilité et vos conversions avec des campagnes publicitaires ciblées et performantes
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="block w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all text-center"
                >
                  Lancer ma campagne
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

      {/* Ad Types Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#1a1a3e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nos Solutions Publicitaires</h2>
            <p className="text-gray-400">Une présence multi-plateforme pour une visibilité maximale</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
            {adTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 rounded-2xl p-4 sm:p-6 backdrop-blur-xl border border-white/10"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{type.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{type.name}</h3>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
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

      {/* Benefits Section */}
      <section className="py-20 bg-[#1a1a3e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Pourquoi Choisir Notre Service Ads ?</h2>
            <p className="text-gray-400">Des campagnes optimisées pour des résultats concrets</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a3e] to-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nos Forfaits Ads</h2>
            <p className="text-gray-400">Des solutions adaptées à votre budget</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-2xl p-12 backdrop-blur-xl border border-white/10 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Prêt à Lancer Votre Campagne ?</h2>
            <p className="text-gray-400 mb-8">
              Discutons de vos objectifs et créons une stratégie publicitaire sur mesure
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Démarrer maintenant
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

export default Ads; 