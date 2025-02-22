import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';

const Services = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [activeComparison, setActiveComparison] = useState(false);
    const [selectedServices, setSelectedServices] = useState([]);
    const [activeFaq, setActiveFaq] = useState(null);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    // FAQ Data
    const faqs = [
        {
            question: "Comment se déroule un projet type ?",
            answer: "Notre processus se déroule en 4 étapes : analyse des besoins, conception, développement et lancement. Nous vous accompagnons à chaque étape avec un suivi personnalisé."
        },
        {
            question: "Quels sont les délais moyens de réalisation ?",
            answer: "Les délais varient selon le projet : 2-3 semaines pour un site vitrine, 1-2 mois pour un e-commerce, 2-4 semaines pour un design UI/UX complet."
        },
        {
            question: "Proposez-vous un support après-vente ?",
            answer: "Oui, nous offrons un support technique 24/7 et des mises à jour régulières pendant 6 mois après le lancement."
        }
    ];

    const handleServiceSelection = (serviceId) => {
        if (selectedServices.includes(serviceId)) {
            setSelectedServices(selectedServices.filter(id => id !== serviceId));
        } else if (selectedServices.length < 2) {
            setSelectedServices([...selectedServices, serviceId]);
        }
    };

    const handleSubscribe = (serviceId, serviceName) => {
        if (!isLoggedIn) {
            Swal.fire({
                title: 'Connexion requise',
                text: 'Vous devez être connecté pour souscrire à un service',
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Se connecter',
                cancelButtonText: 'Annuler',
                confirmButtonColor: '#3B82F6',
                cancelButtonColor: '#6B7280',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/login';
                }
            });
            return;
        }

        Swal.fire({
            title: 'Confirmation',
            text: `Voulez-vous souscrire au service "${serviceName}" ?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Oui, souscrire',
            cancelButtonText: 'Annuler',
            confirmButtonColor: '#3B82F6',
            cancelButtonColor: '#6B7280',
        }).then((result) => {
            if (result.isConfirmed) {
                // Simulation d'appel API
                Swal.fire({
                    title: 'Traitement en cours',
                    text: 'Veuillez patienter...',
                    allowOutsideClick: false,
                    showConfirmButton: false,
                    willOpen: () => {
                        Swal.showLoading();
                    }
                });

                setTimeout(() => {
                    Swal.fire('Succès', 'Souscription effectuée avec succès', 'success');
                }, 1500);
            }
        });
    };

    // Catégories de services
    const categories = [
        { id: 'all', name: 'Tous les services' },
        { id: 'web', name: 'Développement Web' },
        { id: 'design', name: 'Design' },
        { id: 'marketing', name: 'Marketing Digital' }
    ];

    const services = [
        {
            id: 0,
            name: 'Site Web Vitrine',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
            ),
            description: "Une vitrine en ligne professionnelle pour présenter votre entreprise et vos services.",
            features: ['Design responsive', 'SEO optimisé', 'Formulaire de contact'],
            price: '999,99 €',
            technologies: ['React', 'Next.js', 'Tailwind CSS'],
            backgroundImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80'
        },
        {
            id: 1,
            name: 'E-commerce Premium',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
            ),
            description: "Solution e-commerce complète avec gestion des stocks et paiements sécurisés.",
            features: ['Paiement sécurisé', 'Gestion des stocks', 'Dashboard admin'],
            price: '1999,99 €',
            technologies: ['Shopify', 'Stripe', 'Analytics'],
            backgroundImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80'
        },
        {
            id: 2,
            name: 'Design UI/UX',
            category: 'design',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                </svg>
            ),
            description: "Création d'interfaces modernes et intuitives pour une expérience utilisateur optimale.",
            features: ['Maquettes Figma', 'Prototypes interactifs', 'Design System'],
            price: '1499,99 €',
            technologies: ['Figma', 'Adobe XD', 'Principle'],
            backgroundImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 pb-20">
            {/* Hero Section Améliorée */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-90"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent)]"></div>
                    <div className="grain absolute inset-0 opacity-30"></div>
                    {/* Particules animées */}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-blue-400 rounded-full"
                            initial={{ 
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight 
                            }}
                            animate={{ 
                                y: [0, -20, 0],
                                opacity: [0.2, 1, 0.2]
                            }}
                            transition={{ 
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span 
                            className="inline-block text-blue-400 text-lg font-semibold mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Nos Services
                        </motion.span>
                        <motion.h1 
                            className="text-5xl md:text-6xl font-bold text-white mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Sur Mesure</span>
                        </motion.h1>
                        <motion.p 
                            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            Découvrez notre gamme complète de services digitaux conçus pour répondre à vos besoins spécifiques
                        </motion.p>
                        
                        {/* Filtres de catégories */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {categories.map((category) => (
                                <motion.button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        selectedCategory === category.id
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {category.name}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section Stats */}
            <section className="py-20 bg-gray-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
                            <div className="text-gray-400">Projets Réalisés</div>
                        </motion.div>
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
                            <div className="text-gray-400">Clients Satisfaits</div>
                        </motion.div>
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                            <div className="text-gray-400">Support Client</div>
                        </motion.div>
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <div className="text-4xl font-bold text-pink-400 mb-2">5★</div>
                            <div className="text-gray-400">Note Moyenne</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section Améliorée */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services
                            .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
                            .map((service, index) => (
                            <motion.article 
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="group relative service-card bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10"
                            >
                                {/* Image de fond avec overlay et gestion d'erreur */}
                                <div className="absolute inset-0 z-0">
                                    <img 
                                        src={service.backgroundImage}
                                        alt={service.name}
                                        className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/90"></div>
                                </div>

                                {/* Contenu principal */}
                                <div className="relative z-10 p-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="service-icon w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                                            {service.icon}
                                        </div>
                                        <div className="flex gap-2">
                                            {service.technologies.map((tech, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-3 py-1 text-xs font-medium text-white bg-white/10 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold text-white mb-4 group">
                                        <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-500">
                                            {service.name}
                                        </span>
                                    </h2>
                                    
                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-3 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-300">
                                                <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Image du service avec gestion d'erreur */}
                                    <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                                        <img 
                                            src={service.image}
                                            alt={service.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
                                    </div>
                                    
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="text-2xl font-bold text-emerald-400">
                                            {service.price}
                                        </div>
                                        <div className="text-sm text-gray-400">
                                            Par projet
                                        </div>
                                    </div>
                                    
                                    <button
                                        onClick={() => handleSubscribe(service.id, service.name)}
                                        className="group w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                                    >
                                        <span className="flex items-center justify-center">
                                            {isLoggedIn ? "S'abonner" : "Se connecter pour s'abonner"}
                                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Processus de Travail */}
            <section className="py-20 bg-gray-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2 
                            className="text-3xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Notre Processus
                        </motion.h2>
                        <motion.p 
                            className="text-gray-400"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Une approche structurée pour votre réussite
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                icon: "🎯",
                                title: "Analyse",
                                description: "Étude approfondie de vos besoins"
                            },
                            {
                                icon: "✏️",
                                title: "Conception",
                                description: "Design et planification détaillée"
                            },
                            {
                                icon: "🛠️",
                                title: "Développement",
                                description: "Création de votre solution"
                            },
                            {
                                icon: "🚀",
                                title: "Lancement",
                                description: "Mise en ligne et suivi"
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                className="relative"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className="bg-gray-700/30 rounded-2xl p-6 backdrop-blur-lg border border-white/10">
                                    <div className="text-4xl mb-4">{step.icon}</div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                                    <p className="text-gray-400">{step.description}</p>
                                </div>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent transform translate-x-1/2">
                                        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Témoignages */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2 
                            className="text-3xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Ce que disent nos clients
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sophie Martin",
                                role: "CEO, TechStart",
                                image: "/images/testimonial1.jpg",
                                content: "Une équipe exceptionnelle qui a su transformer notre vision en réalité."
                            },
                            {
                                name: "Thomas Dubois",
                                role: "Directeur Marketing, InnovCorp",
                                image: "/images/testimonial2.jpg",
                                content: "Professionnalisme et créativité au rendez-vous. Résultats au-delà de nos attentes."
                            },
                            {
                                name: "Marie Lambert",
                                role: "Fondatrice, EcoStyle",
                                image: "/images/testimonial3.jpg",
                                content: "Un accompagnement personnalisé et des solutions adaptées à nos besoins."
                            }
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center text-white text-xl font-bold">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-white font-semibold">{testimonial.name}</div>
                                        <div className="text-gray-400 text-sm">{testimonial.role}</div>
                                    </div>
                                </div>
                                <p className="text-gray-300 italic">"{testimonial.content}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nouvelle Section : Comparateur de Services */}
            <section className="py-20 bg-gray-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Comparez nos Services</h2>
                        <p className="text-gray-400">Sélectionnez jusqu'à 2 services pour les comparer</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['Site Web Vitrine', 'E-commerce Premium', 'Design UI/UX'].map((service, index) => (
                            <motion.div
                                key={index}
                                className={`cursor-pointer ${
                                    selectedServices.includes(index)
                                        ? 'ring-2 ring-blue-500'
                                        : ''
                                }`}
                                onClick={() => handleServiceSelection(index)}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-2">{service}</h3>
                                    <div className="flex justify-center">
                                        <input
                                            type="checkbox"
                                            checked={selectedServices.includes(index)}
                                            onChange={() => {}}
                                            className="w-5 h-5 text-blue-500"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <AnimatePresence>
                        {selectedServices.length === 2 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="mt-12 bg-gray-800/50 backdrop-blur-lg rounded-xl p-8"
                            >
                                <div className="grid grid-cols-3 gap-4">
                                    <div></div>
                                    {selectedServices.map((serviceId, index) => (
                                        <div key={index} className="text-center">
                                            <h4 className="text-lg font-semibold text-white mb-4">
                                                {['Site Web Vitrine', 'E-commerce Premium', 'Design UI/UX'][serviceId]}
                                            </h4>
                                        </div>
                                    ))}
                                    
                                    {[
                                        'Prix',
                                        'Délai de livraison',
                                        'Nombre de pages',
                                        'Support technique',
                                        'Modifications incluses'
                                    ].map((feature, index) => (
                                        <React.Fragment key={index}>
                                            <div className="text-gray-400 py-2">{feature}</div>
                                            {selectedServices.map((serviceId, idx) => (
                                                <div key={idx} className="text-white text-center py-2">
                                                    {serviceId === 0 && (
                                                        feature === 'Prix' ? '999,99 €' :
                                                        feature === 'Délai de livraison' ? '2-3 semaines' :
                                                        feature === 'Nombre de pages' ? '5 pages' :
                                                        feature === 'Support technique' ? '6 mois' :
                                                        '2 révisions'
                                                    )}
                                                    {serviceId === 1 && (
                                                        feature === 'Prix' ? '1999,99 €' :
                                                        feature === 'Délai de livraison' ? '1-2 mois' :
                                                        feature === 'Nombre de pages' ? 'Illimité' :
                                                        feature === 'Support technique' ? '12 mois' :
                                                        '5 révisions'
                                                    )}
                                                    {serviceId === 2 && (
                                                        feature === 'Prix' ? '1499,99 €' :
                                                        feature === 'Délai de livraison' ? '2-4 semaines' :
                                                        feature === 'Nombre de pages' ? '10 pages' :
                                                        feature === 'Support technique' ? '3 mois' :
                                                        '3 révisions'
                                                    )}
                                                </div>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Section FAQ Améliorée */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Questions Fréquentes</h2>
                        <p className="text-gray-400">Tout ce que vous devez savoir sur nos services</p>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                    className="w-full px-6 py-4 text-left flex justify-between items-center"
                                >
                                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                                    <motion.svg
                                        animate={{ rotate: activeFaq === index ? 180 : 0 }}
                                        className="w-6 h-6 text-blue-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </motion.svg>
                                </button>
                                <AnimatePresence>
                                    {activeFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-6 pb-4"
                                        >
                                            <p className="text-gray-400">{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Avantages avec Icônes Animées */}
            <section className="py-20 bg-gray-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Nos Avantages</h2>
                        <p className="text-gray-400">Ce qui nous différencie</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "⚡️",
                                title: "Performance Optimale",
                                description: "Sites web ultra-rapides et optimisés"
                            },
                            {
                                icon: "🛡️",
                                title: "Sécurité Maximale",
                                description: "Protection avancée et conformité RGPD"
                            },
                            {
                                icon: "🎯",
                                title: "Résultats Garantis",
                                description: "Objectifs atteints ou remboursés"
                            }
                        ].map((advantage, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-white/10"
                            >
                                <div className="text-4xl mb-4">{advantage.icon}</div>
                                <h3 className="text-xl font-semibold text-white mb-2">{advantage.title}</h3>
                                <p className="text-gray-400">{advantage.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section CTA */}
            <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-12 border border-white/10"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Prêt à démarrer votre projet ?</h2>
                        <p className="text-gray-400 mb-8">Contactez-nous dès maintenant pour une consultation gratuite</p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all transform hover:scale-105"
                        >
                            Démarrer maintenant
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services; 