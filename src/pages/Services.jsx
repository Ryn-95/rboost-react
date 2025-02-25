import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            title: "Développement Web",
            description: "Sites vitrines, e-commerce et applications web sur mesure avec les dernières technologies.",
            icon: "🚀",
            gradient: "from-blue-500 to-cyan-500",
            features: ["React.js", "Next.js", "Node.js", "Performance optimisée"],
            link: "/services/web",
            delay: 0.2,
            bgPattern: "radial-gradient(circle at 10% 20%, rgb(0, 107, 141) 0%, rgb(0, 69, 91) 90%)",
            stats: [
                { value: "99%", label: "Performance" },
                { value: "490€", label: "Prix de base" },
                { value: "<1s", label: "Temps de chargement" }
            ],
            technologies: ["React", "Vue.js", "Next.js", "Node.js", "MongoDB", "PostgreSQL"],
            processSteps: [
                "Analyse des besoins",
                "Design UX/UI",
                "Développement",
                "Tests & Optimisation",
                "Déploiement",
                "Maintenance"
            ]
        },
        {
            title: "Référencement SEO",
            description: "Optimisation pour les moteurs de recherche et stratégie de contenu pour plus de visibilité.",
            icon: "📈",
            gradient: "from-purple-500 to-pink-500",
            features: ["Audit SEO", "Optimisation technique", "Content marketing", "Suivi des positions"],
            link: "/services/seo",
            delay: 0.3,
            bgPattern: "radial-gradient(circle at 10% 20%, rgb(133, 29, 186) 0%, rgb(95, 21, 133) 90%)",
            stats: [
                { value: "+80%", label: "Trafic organique" },
                { value: "490€", label: "Prix de base" },
                { value: "+65%", label: "Conversions" }
            ],
            technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Screaming Frog", "Google Search Console"],
            processSteps: [
                "Audit initial",
                "Optimisation on-page",
                "Création de contenu",
                "Link building",
                "Suivi des positions",
                "Rapports mensuels"
            ]
        },
        {
            title: "Google Ads",
            description: "Campagnes publicitaires ciblées pour atteindre rapidement vos objectifs commerciaux.",
            icon: "🎯",
            gradient: "from-amber-500 to-orange-500",
            features: ["Search Ads", "Display Ads", "Remarketing", "Analytics"],
            link: "/services/ads",
            delay: 0.4,
            bgPattern: "radial-gradient(circle at 10% 20%, rgb(255, 126, 0) 0%, rgb(214, 96, 0) 90%)",
            stats: [
                { value: "x3", label: "ROI moyen" },
                { value: "490€", label: "Prix de base" },
                { value: "+150%", label: "Conversions" }
            ],
            technologies: ["Google Ads", "Google Analytics", "Google Tag Manager", "Facebook Ads", "LinkedIn Ads"],
            processSteps: [
                "Analyse de marché",
                "Stratégie de ciblage",
                "Création des annonces",
                "Optimisation continue",
                "A/B Testing",
                "Rapports de performance"
            ]
        },
        {
            title: "Social Media",
            description: "Gestion professionnelle de vos réseaux sociaux pour développer votre communauté.",
            icon: "💫",
            gradient: "from-green-500 to-emerald-500",
            features: ["Stratégie sociale", "Création de contenu", "Community management", "Publicité sociale"],
            link: "/services/social-media",
            delay: 0.5,
            bgPattern: "radial-gradient(circle at 10% 20%, rgb(12, 180, 87) 0%, rgb(0, 150, 70) 90%)",
            stats: [
                { value: "+200%", label: "Engagement" },
                { value: "490€", label: "Prix de base" },
                { value: "+10k", label: "Followers/mois" }
            ],
            technologies: ["Instagram", "Facebook", "LinkedIn", "TikTok", "Twitter", "Canva Pro"],
            processSteps: [
                "Audit des réseaux",
                "Stratégie éditoriale",
                "Création de contenu",
                "Community management",
                "Publicité sociale",
                "Analyse des résultats"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <SEO 
                title="Services - RBoost Digital"
                description="Découvrez nos services de développement web, SEO, publicité en ligne et social media. Solutions digitales sur mesure pour votre entreprise."
                keywords="développement web, SEO, Google Ads, social media, marketing digital"
                url="/services"
            />
            
            {/* Hero Section avec effet parallaxe */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
                    {/* Effet de particules animées */}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            initial={{ 
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                scale: 0
                            }}
                            animate={{ 
                                y: [null, Math.random() * -500],
                                scale: [0, 1, 0],
                                opacity: [0, 0.5, 0]
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 2
                            }}
                        />
                    ))}
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                    <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8"
                        >
                            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-xl rounded-full text-blue-200 text-sm mb-6">
                            Nos Services
                            </span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-8xl font-light text-white mb-8 leading-tight"
                        >
                            Solutions{' '}
                            <span className="relative">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                    digitales
                                </span>
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-xl"
                                    animate={{ 
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 0.8, 0.5]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl text-blue-100/80 leading-relaxed max-w-2xl mx-auto"
                        >
                            Transformez votre vision en réalité avec nos solutions sur mesure
                        </motion.p>
                    </div>
                </div>

                {/* Vague décorative améliorée */}
                <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
                    <svg 
                        viewBox="0 0 1200 120" 
                        preserveAspectRatio="none" 
                        className="relative block w-full h-[150px]"
                        style={{ transform: 'rotate(180deg)' }}
                    >
                        <path 
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                            className="fill-gray-50"
                            opacity=".25"
                        />
                        <path 
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                            className="fill-gray-50"
                            opacity=".5"
                        />
                        <path 
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                            className="fill-gray-50"
                        />
                    </svg>
                </div>
            </section>

            {/* Services Section avec mise en page innovante */}
            <section className="py-20 md:py-32 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: service.delay }}
                                    className="group relative"
                                    onClick={() => setSelectedService(service)}
                                >
                                    <div 
                                        className="relative p-8 rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer transform hover:scale-[1.02] hover:shadow-2xl"
                                        style={{ background: service.bgPattern }}
                                    >
                                        {/* Effet de brillance au survol */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-white via-white/0 to-white/0 group-hover:translate-x-full transform -translate-x-full transition-transform duration-1000"></div>
                                        
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-8">
                                                <span className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                                                    {service.icon}
                                                </span>
                                                <motion.div
                                                    whileHover={{ rotate: 90 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
                                                >
                                                    <span className="text-white">→</span>
                                                </motion.div>
                                    </div>
                                    
                                            <h3 className="text-2xl font-medium text-white mb-4">
                                                {service.title}
                                            </h3>
                                            
                                            <p className="text-white/80 mb-6 leading-relaxed">
                                                {service.description}
                                            </p>

                                            {/* Stats */}
                                            <div className="grid grid-cols-3 gap-4 mb-6">
                                                {service.stats.map((stat, i) => (
                                                    <div key={i} className="text-center">
                                                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                                        <div className="text-xs text-white/60">{stat.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                            
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {service.features.map((feature, i) => (
                                                    <span 
                                                        key={i}
                                                        className="px-4 py-1.5 text-sm bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/10"
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                        </div>

                                            {/* Technologies */}
                                            <div className="border-t border-white/10 pt-6 mt-6">
                                                <h4 className="text-sm text-white/60 mb-3">Technologies utilisées</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {service.technologies.map((tech, i) => (
                                                        <span key={i} className="text-xs text-white/80 bg-white/5 px-3 py-1 rounded-full">
                                                            {tech}
                                            </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Cercles décoratifs */}
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
            </section>

            {/* Section Processus */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl font-light text-gray-900 mb-6">
                                Notre Processus
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Une approche méthodique pour des résultats exceptionnels
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "🎯",
                                    title: "Analyse",
                                    description: "Étude approfondie de vos besoins et objectifs"
                                },
                                {
                                    icon: "💡",
                                    title: "Stratégie",
                                    description: "Élaboration d'un plan d'action personnalisé"
                                },
                                {
                                    icon: "🚀",
                                    title: "Exécution",
                                    description: "Mise en œuvre et optimisation continue"
                                }
                            ].map((step, index) => (
                        <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative"
                                >
                                    <div className="bg-gray-50 rounded-2xl p-8 relative z-10">
                                        <span className="text-4xl mb-6 inline-block">{step.icon}</span>
                                        <h3 className="text-xl font-medium text-gray-900 mb-4">{step.title}</h3>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                    {index < 2 && (
                                        <motion.div
                                            className="hidden md:block absolute top-1/2 left-full w-16 h-0.5 bg-gray-200 z-0"
                                            style={{ transform: 'translateX(-50%)' }}
                                        />
                                    )}
                        </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section CTA améliorée */}
            <section className="py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
                    {/* Effet de vagues animées */}
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <motion.path
                            d="M0,0 L100,0 C150,100 200,100 300,0 C400,-100 450,-100 500,0 L500,500 L0,500 Z"
                            fill="none"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="2"
                            animate={{
                                d: [
                                    "M0,0 L100,0 C150,100 200,100 300,0 C400,-100 450,-100 500,0 L500,500 L0,500 Z",
                                    "M0,0 L100,0 C150,-100 200,-100 300,0 C400,100 450,100 500,0 L500,500 L0,500 Z"
                                ]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                        />
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/10 backdrop-blur-xl p-12 rounded-3xl border border-white/10"
                        >
                            <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
                                Prêt à{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                    transformer
                                </span>{' '}
                                votre projet ?
                            </h2>
                            <p className="text-xl text-blue-100/80 mb-12 leading-relaxed">
                                Discutons ensemble de vos ambitions et créons quelque chose d'extraordinaire
                            </p>
                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center px-10 py-4 bg-white text-gray-900 rounded-full text-lg font-medium tracking-wide hover:bg-gray-50 transition-all duration-300 group"
                            >
                                Démarrer votre projet
                                <motion.span
                                    className="ml-2 transform group-hover:translate-x-1 transition-transform"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Modal de détails du service */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-3xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* En-tête */}
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-4xl">{selectedService.icon}</span>
                                        <h3 className="text-3xl font-medium bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                            {selectedService.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-lg">{selectedService.description}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                    </div>

                    <div className="space-y-8">
                                {/* Statistiques */}
                                <div className="grid grid-cols-3 gap-6 p-6 bg-gray-50 rounded-2xl">
                                    {selectedService.stats.map((stat, index) => (
                                        <div key={index} className="text-center">
                                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                                                {stat.value}
                                            </div>
                                            <div className="text-sm text-gray-600">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Processus */}
                                <div>
                                    <h4 className="text-xl font-medium mb-6 flex items-center gap-2">
                                        <span className="text-blue-600">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                        Notre processus
                                    </h4>
                                    <div className="space-y-4">
                                        {selectedService.processSteps.map((step, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                            >
                                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">
                                                    {index + 1}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-medium text-gray-900">{step}</div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-xl font-medium mb-6 flex items-center gap-2">
                                        <span className="text-blue-600">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                        </span>
                                        Technologies utilisées
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedService.technologies.map((tech, index) => (
                                            <motion.span
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                        </div>
                        </div>

                                {/* Fonctionnalités */}
                                <div>
                                    <h4 className="text-xl font-medium mb-6 flex items-center gap-2">
                                        <span className="text-blue-600">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        Fonctionnalités clés
                                    </h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {selectedService.features.map((feature, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
                                            >
                                                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">{feature}</span>
                                            </motion.div>
                                        ))}
                        </div>
                    </div>

                                {/* CTA */}
                                <div className="flex justify-center pt-6">
                        <Link
                                        to={selectedService.link}
                                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105"
                                    >
                                        Découvrir {selectedService.title}
                                        <motion.span
                                            className="ml-2"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            →
                                        </motion.span>
                        </Link>
                    </div>
                </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Services; 