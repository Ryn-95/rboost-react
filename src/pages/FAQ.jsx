import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Comment débuter un projet avec Rboost ?",
      answer: "Pour débuter un projet avec Rboost, il vous suffit de nous contacter via notre formulaire de contact ou par téléphone. Nous organiserons ensuite une consultation gratuite pour discuter de vos besoins et objectifs."
    },
    {
      id: 2,
      question: "Quels sont les délais de réalisation ?",
      answer: "Les délais varient selon la complexité du projet. En général, un site vitrine prend 4-6 semaines, un e-commerce 8-12 semaines. Nous établissons un planning détaillé au début du projet."
    },
    {
      id: 3,
      question: "Proposez-vous un service de maintenance ?",
      answer: "Oui, nous proposons différentes formules de maintenance pour assurer le bon fonctionnement de votre site : mises à jour de sécurité, sauvegardes, corrections de bugs, etc."
    },
    {
      id: 4,
      question: "Quelles technologies utilisez-vous ?",
      answer: "Nous utilisons les technologies les plus modernes et adaptées à chaque projet : React, Vue.js, Node.js, PHP/Symfony, WordPress, etc. Le choix dépend de vos besoins spécifiques."
    },
    {
      id: 5,
      question: "Comment assurez-vous le référencement (SEO) ?",
      answer: "Nous intégrons les bonnes pratiques SEO dès la conception : structure optimisée, temps de chargement rapide, contenu de qualité, balises meta, etc. Nous proposons aussi des services SEO avancés."
    }
  ];

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <>
      <SEO 
        title="FAQ - Questions Fréquentes | RBoost Digital"
        description="Trouvez les réponses à vos questions sur nos services web et marketing digital. Tout ce que vous devez savoir sur notre processus et nos solutions."
        keywords="faq agence web, questions fréquentes, aide site internet, support marketing digital"
        url="/faq"
      />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] bg-gradient-to-b from-gray-900 via-gray-800 to-black py-32 overflow-hidden">
        <div className="particles">
          {[...Array(10)].map((_, i) => (
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-block text-blue-400 text-lg font-semibold mb-4">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Questions <span className="gradient-text">Fréquentes</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trouvez rapidement des réponses à vos questions sur nos services et notre façon de travailler
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-blue-400 transform transition-transform duration-300 ${
                      openQuestion === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {openQuestion === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-300">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Vous avez d'autres questions ?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Notre équipe est là pour répondre à toutes vos questions et vous accompagner dans votre projet.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <span>Contactez-nous</span>
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ; 