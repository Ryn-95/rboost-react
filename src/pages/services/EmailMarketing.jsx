import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EmailMarketing = () => {
  const services = [
    {
      name: "Newsletters",
      icon: "📧",
      features: [
        "Design personnalisé",
        "Contenu engageant",
        "Tests A/B",
        "Analyse des performances"
      ]
    },
    {
      name: "Automation",
      icon: "⚙️",
      features: [
        "Scénarios personnalisés",
        "Séquences d'emails",
        "Segmentation avancée",
        "Triggers automatiques"
      ]
    },
    {
      name: "E-commerce",
      icon: "🛍️",
      features: [
        "Paniers abandonnés",
        "Promotions ciblées",
        "Fidélisation client",
        "Recommandations produits"
      ]
    },
    {
      name: "Lead Nurturing",
      icon: "🎯",
      features: [
        "Qualification des leads",
        "Parcours personnalisés",
        "Scoring des contacts",
        "Conversion optimisée"
      ]
    }
  ];

  const packages = [
    {
      name: "Essentiel",
      price: "499€/mois",
      features: [
        "Jusqu'à 10 000 contacts",
        "5 templates personnalisés",
        "2 automations",
        "Rapport mensuel",
        "Support par email"
      ]
    },
    {
      name: "Business",
      price: "899€/mois",
      features: [
        "Jusqu'à 50 000 contacts",
        "10 templates personnalisés",
        "5 automations",
        "Tests A/B",
        "Segmentation avancée",
        "Rapport hebdomadaire",
        "Support prioritaire"
      ]
    },
    {
      name: "Enterprise",
      price: "1499€/mois",
      features: [
        "Contacts illimités",
        "Templates illimités",
        "Automations illimitées",
        "Tests multivariés",
        "API personnalisée",
        "Rapport en temps réel",
        "Support dédié 24/7",
        "Formation équipe"
      ]
    }
  ];

  const benefits = [
    {
      title: "ROI Élevé",
      description: "L'email marketing offre le meilleur retour sur investissement du marketing digital",
      icon: "💰"
    },
    {
      title: "Personnalisation",
      description: "Messages personnalisés basés sur le comportement et les préférences",
      icon: "🎯"
    },
    {
      title: "Automatisation",
      description: "Gagnez du temps grâce à des campagnes automatisées intelligentes",
      icon: "⚡"
    },
    {
      title: "Mesurable",
      description: "Suivez et optimisez vos performances en temps réel",
      icon: "📊"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Email{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Marketing
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Créez des campagnes d'emails performantes et personnalisées pour fidéliser vos clients
            </p>
            <div className="flex justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  Commencer maintenant
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="px-8 py-3 border border-white/10 rounded-full font-medium hover:bg-white/5 transition-all"
                >
                  Demander un devis
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
            <h2 className="text-3xl font-bold mb-4">Nos Solutions Email</h2>
            <p className="text-gray-400">Des stratégies email marketing adaptées à vos objectifs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 rounded-2xl p-6 backdrop-blur-xl border border-white/10"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center">
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
            <h2 className="text-3xl font-bold mb-4">Pourquoi l'Email Marketing ?</h2>
            <p className="text-gray-400">Le canal marketing avec le meilleur ROI</p>
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
            <h2 className="text-3xl font-bold mb-4">Nos Forfaits</h2>
            <p className="text-gray-400">Des solutions adaptées à votre volume d'emails</p>
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
            <h2 className="text-3xl font-bold mb-4">Prêt à Lancer vos Campagnes Email ?</h2>
            <p className="text-gray-400 mb-8">
              Discutons de votre stratégie email marketing et créons des campagnes qui convertissent
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

export default EmailMarketing; 