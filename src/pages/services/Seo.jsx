import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Seo = () => {
  const services = [
    {
      name: "Audit SEO Complet",
      icon: "🔍",
      description: "Analyse approfondie de votre site et de votre positionnement actuel"
    },
    {
      name: "Optimisation Technique",
      icon: "⚙️",
      description: "Amélioration de la structure et des performances de votre site"
    },
    {
      name: "Content Marketing",
      icon: "✍️",
      description: "Création de contenu optimisé et stratégie éditoriale"
    },
    {
      name: "Link Building",
      icon: "🔗",
      description: "Développement de backlinks de qualité et netlinking"
    }
  ];

  const pricing = {
    basic: {
      name: "SEO Essentiel",
      price: "799€/mois",
      features: [
        "Audit SEO initial",
        "Optimisation on-page",
        "Recherche de mots-clés",
        "Rapport mensuel",
        "Support par email",
        "3 pages optimisées/mois"
      ]
    },
    pro: {
      name: "SEO Professionnel",
      price: "1499€/mois",
      features: [
        "Tout SEO Essentiel +",
        "Content marketing",
        "Link building",
        "Optimisation technique",
        "Support prioritaire",
        "10 pages optimisées/mois"
      ]
    },
    enterprise: {
      name: "SEO Enterprise",
      price: "Sur devis",
      features: [
        "Solution sur mesure",
        "Stratégie personnalisée",
        "Contenu premium",
        "Link building avancé",
        "Support dédié 24/7",
        "Pages illimitées"
      ]
    }
  };

  const benefits = [
    {
      title: "Visibilité Accrue",
      description: "Améliorez votre positionnement sur Google et augmentez votre trafic organique",
      icon: "📈"
    },
    {
      title: "Leads Qualifiés",
      description: "Attirez des visiteurs ciblés plus susceptibles de devenir des clients",
      icon: "🎯"
    },
    {
      title: "ROI Mesurable",
      description: "Suivez vos performances et mesurez le retour sur investissement",
      icon: "💰"
    },
    {
      title: "Autorité Renforcée",
      description: "Établissez votre expertise et renforcez votre crédibilité en ligne",
      icon: "👑"
    }
  ];

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
              SEO &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Content Marketing
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Optimisez votre visibilité en ligne et attirez plus de clients qualifiés grâce à notre expertise SEO
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="block w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all text-center"
                >
                  Audit SEO Gratuit
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="block w-full sm:w-auto px-8 py-3 border border-white/10 rounded-full font-medium hover:bg-white/5 transition-all text-center"
                >
                  En savoir plus
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#1a1a3e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nos Services SEO</h2>
            <p className="text-gray-400">Une approche complète pour votre référencement naturel</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 rounded-2xl p-4 sm:p-6 backdrop-blur-xl border border-white/10"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{service.name}</h3>
                <p className="text-sm sm:text-base text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#1a1a3e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Pourquoi Choisir Notre Service SEO ?</h2>
            <p className="text-gray-400">Des résultats concrets pour votre entreprise</p>
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
            <h2 className="text-3xl font-bold mb-4">Nos Forfaits SEO</h2>
            <p className="text-gray-400">Des solutions adaptées à vos objectifs</p>
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-2xl p-12 backdrop-blur-xl border border-white/10 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Prêt à Améliorer Votre Référencement ?</h2>
            <p className="text-gray-400 mb-8">
              Obtenez votre audit SEO gratuit et découvrez votre potentiel d'amélioration
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Demander mon audit gratuit
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

export default Seo; 