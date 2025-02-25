import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Web = () => {
  const services = [
    {
      name: "Site Vitrine",
      icon: "🌐",
      features: [
        "Design sur mesure",
        "Responsive design",
        "Optimisation SEO",
        "Formulaire de contact"
      ]
    },
    {
      name: "Site E-commerce",
      icon: "🛍️",
      features: [
        "Catalogue produits",
        "Paiement sécurisé",
        "Gestion des stocks",
        "Dashboard admin"
      ]
    },
    {
      name: "Application Web",
      icon: "💻",
      features: [
        "Fonctionnalités avancées",
        "Interface intuitive",
        "Base de données",
        "API personnalisée"
      ]
    },
    {
      name: "Maintenance",
      icon: "🔧",
      features: [
        "Mises à jour régulières",
        "Sauvegardes",
        "Support technique",
        "Monitoring 24/7"
      ]
    }
  ];

  const pricing = {
    basic: {
      name: "Site Vitrine",
      price: "490€",
      features: [
        "Design responsive",
        "Jusqu'à 5 pages",
        "Formulaire de contact",
        "Optimisation SEO de base",
        "Hébergement inclus 1 an",
        "Support technique"
      ]
    },
    pro: {
      name: "Site E-commerce",
      price: "990€",
      features: [
        "Toutes les fonctionnalités Basic",
        "Boutique en ligne complète",
        "Système de paiement sécurisé",
        "Gestion des stocks",
        "Panel d'administration",
        "Formation incluse"
      ]
    },
    enterprise: {
      name: "Sur Mesure",
      price: "Sur devis",
      features: [
        "Solution personnalisée",
        "Fonctionnalités avancées",
        "Intégrations API",
        "Architecture sur mesure",
        "Support prioritaire",
        "Maintenance premium"
      ]
    }
  };

  const technologies = [
    {
      name: "Front-end",
      icon: "🎨",
      stack: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"]
    },
    {
      name: "Back-end",
      icon: "⚙️",
      stack: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
    },
    {
      name: "E-commerce",
      icon: "🛒",
      stack: ["Shopify", "WooCommerce", "Stripe", "PayPal"]
    },
    {
      name: "Outils",
      icon: "🔧",
      stack: ["Git", "Docker", "AWS", "Vercel"]
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
              Création de{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Site Internet
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Des sites web modernes, performants et optimisés pour convertir vos visiteurs en clients
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="block w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all text-center"
                >
                  Démarrer un projet
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="block w-full sm:w-auto px-8 py-3 border border-white/10 rounded-full font-medium hover:bg-white/5 transition-all text-center"
                >
                  Voir nos réalisations
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
            <h2 className="text-3xl font-bold mb-4">Nos Services Web</h2>
            <p className="text-gray-400">Des solutions adaptées à vos besoins</p>
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
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
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

      {/* Technologies Section */}
      <section className="py-20 bg-[#1a1a3e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technologies Utilisées</h2>
            <p className="text-gray-400">Les meilleurs outils pour des sites performants</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{tech.name}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {tech.stack.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
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
            <p className="text-gray-400">Des solutions pour tous les budgets</p>
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
            <h2 className="text-3xl font-bold mb-4">Prêt à Lancer Votre Projet Web ?</h2>
            <p className="text-gray-400 mb-8">
              Discutons de vos besoins et créons ensemble le site web parfait pour votre entreprise
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

export default Web; 