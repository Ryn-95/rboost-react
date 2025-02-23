import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Home = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    // Animation des compteurs
    const animateValue = (target, element, duration = 2000) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = Math.floor(progress * target);
            element.textContent = current;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = target;
            }
        };
        window.requestAnimationFrame(step);
    };

    useEffect(() => {
        // Animation des compteurs
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute('data-count'));
                    animateValue(target, entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('[data-count]').forEach(counter => {
            observer.observe(counter);
        });

        // Gestion de la FAQ
        const faqButtons = document.querySelectorAll('[id^="faq-button-"]');
        
        faqButtons.forEach(button => {
            button.addEventListener('click', () => {
                const content = document.getElementById(button.getAttribute('aria-controls'));
                const isExpanded = button.getAttribute('aria-expanded') === 'true';
                
                // Mettre à jour l'état
                button.setAttribute('aria-expanded', !isExpanded);
                
                // Afficher/masquer le contenu
                if (isExpanded) {
                    content.style.maxHeight = '0';
                    content.style.opacity = '0';
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.style.opacity = '1';
                }
                
                // Rotation de l'icône
                const icon = button.querySelector('svg');
                icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
            });

            // Gestion de la navigation au clavier
            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    button.click();
                }
            });
        });

        return () => {
            observer.disconnect();
            // Nettoyer les event listeners de la FAQ
            faqButtons.forEach(button => {
                button.removeEventListener('click', () => {});
                button.removeEventListener('keydown', () => {});
            });
        };
    }, []);

    // Gestionnaire de clic pour la FAQ
    const handleFaqClick = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-[#1a1a2e] text-white">
            <SEO 
                title="RBoost Digital - Agence Web & Marketing Digital à Paris"
                description="Transformez votre présence en ligne avec RBoost Digital. Experts en création de sites web, SEO, et marketing digital. Solutions sur mesure pour votre entreprise."
                keywords="agence web paris, création site web, développement web, SEO, marketing digital, agence digitale, site internet professionnel"
                url="/"
            />
            
            {/* Hero Section Améliorée */}
            <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden" role="banner" aria-label="Section principale">
                {/* Effet de grain */}
                <div className="absolute inset-0 opacity-30" aria-hidden="true">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-[0.07] mix-blend-soft-light"></div>
                </div>

                {/* Cercles lumineux */}
                <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                    <div className="absolute w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
                    <div className="absolute w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
                </div>

                {/* Contenu principal */}
                <div className="relative container mx-auto px-4 pt-32 pb-20">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 mb-6 transform hover:scale-105 transition-all duration-300" role="text">
                            <span className="text-blue-300 text-sm font-medium">Votre Partenaire Digital</span>
                        </div>

                        {/* Titre principal */}
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight" role="heading" aria-level="1">
                            Transformez votre 
                            <span className="relative">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">vision digitale</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-xl transform -skew-x-12" aria-hidden="true"></span>
                            </span>
                            <span className="whitespace-nowrap">en réalité</span>
                        </h1>

                        {/* Sous-titre */}
                        <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed" role="contentinfo">
                            Nous créons des expériences web innovantes qui propulsent votre entreprise vers le succès numérique
                        </p>

                        {/* Boutons d'action */}
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link to="/contact" 
                                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 hover:shadow-xl">
                                Démarrer votre projet
                            </Link>
                            <a href="#services" 
                                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all">
                                Découvrir nos services
                            </a>
                        </div>
                    </div>
                </div>

                {/* Wave Effect */}
                <div className="wave absolute bottom-[-2px] left-0 w-full overflow-hidden leading-0">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[150px]">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
                    </svg>
                </div>
            </section>

            {/* Section Pourquoi nous choisir */}
            <section className="py-16 bg-white" role="region" aria-labelledby="avantages-title">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 id="avantages-title" className="text-3xl font-bold text-gray-900 mb-4">Pourquoi nous choisir</h2>
                        <p className="text-lg text-gray-600">Nos Avantages</p>
                        <p className="text-lg text-gray-600 mt-2">Des solutions innovantes pour votre réussite digitale</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
                        {/* Performance */}
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" role="listitem">
                            <div className="text-center mb-4">
                                <svg className="w-12 h-12 mx-auto text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Performance Optimale</h3>
                            <p className="text-gray-700 text-center">Sites web ultra-rapides et optimisés pour une expérience utilisateur exceptionnelle</p>
                        </div>

                        {/* Sécurité */}
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" role="listitem">
                            <div className="text-center mb-4">
                                <svg className="w-12 h-12 mx-auto text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Sécurité Maximale</h3>
                            <p className="text-gray-700 text-center">Protection avancée contre les cybermenaces et conformité RGPD</p>
                        </div>

                        {/* Support */}
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" role="listitem">
                            <div className="text-center mb-4">
                                <svg className="w-12 h-12 mx-auto text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Support Premium</h3>
                            <p className="text-gray-700 text-center">Assistance technique 24/7 et accompagnement personnalisé</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Process avec Timeline */}
            <section className="relative py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
                {/* Effet de grain similaire au header */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-[0.07] mix-blend-soft-light"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 mb-6">
                            <span className="text-blue-300 text-sm font-medium">Notre Processus</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Comment nous travaillons</h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">Une approche structurée pour des résultats exceptionnels</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Étape 1 */}
                        <div className="relative group">
                            <div className="glass-stats p-8 rounded-2xl backdrop-blur-lg border border-white/10 transition-all duration-500 hover:border-blue-500/30 hover:transform hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <span className="text-2xl font-bold text-white">01</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">Découverte</h3>
                                    <p className="text-blue-100">Analyse approfondie de vos besoins et objectifs</p>
                                </div>
                            </div>
                            <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent -translate-y-1/2 transform"></div>
                        </div>

                        {/* Étape 2 */}
                        <div className="relative group">
                            <div className="glass-stats p-8 rounded-2xl backdrop-blur-lg border border-white/10 transition-all duration-500 hover:border-purple-500/30 hover:transform hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <span className="text-2xl font-bold text-white">02</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">Design</h3>
                                    <p className="text-blue-100">Création d'une expérience utilisateur unique</p>
                                </div>
                            </div>
                            <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent -translate-y-1/2 transform"></div>
                        </div>

                        {/* Étape 3 */}
                        <div className="relative group">
                            <div className="glass-stats p-8 rounded-2xl backdrop-blur-lg border border-white/10 transition-all duration-500 hover:border-emerald-500/30 hover:transform hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <span className="text-2xl font-bold text-white">03</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">Développement</h3>
                                    <p className="text-blue-100">Réalisation technique avec les dernières technologies</p>
                                </div>
                            </div>
                            <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent -translate-y-1/2 transform"></div>
                        </div>

                        {/* Étape 4 */}
                        <div className="relative group">
                            <div className="glass-stats p-8 rounded-2xl backdrop-blur-lg border border-white/10 transition-all duration-500 hover:border-amber-500/30 hover:transform hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <span className="text-2xl font-bold text-white">04</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">Lancement</h3>
                                    <p className="text-blue-100">Mise en ligne et optimisation continue</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Effect pour la section Process */}
                <div className="wave absolute bottom-[-2px] left-0 w-full overflow-hidden leading-0">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[150px]">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
                    </svg>
                </div>
            </section>

            {/* Section Technologies avec Animation */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                {/* Motif d'arrière-plan */}
                <div className="absolute inset-0 bg-grid-gray-100 opacity-[0.05]"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 mb-6 transform hover:scale-105 transition-all duration-300">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-medium">Technologies de pointe</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-4 md:mb-6">Stack Technologique</h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">Les meilleurs outils pour des solutions performantes et évolutives</p>
                    </div>
                
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                        {/* React */}
                        <div className="group relative p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                            <div className="relative z-10">
                                <div className="h-16 w-16 mx-auto mb-6 relative">
                                    <div className="absolute inset-0 bg-blue-500/10 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-12"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl transform -rotate-6 transition-transform group-hover:-rotate-12 opacity-0 group-hover:opacity-10"></div>
                                    <svg viewBox="0 0 24 24" fill="none" className="h-16 w-16 relative transition-all duration-500 group-hover:scale-110">
                                        <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="#61DAFB"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#61DAFB"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">React</h3>
                                <p className="text-sm text-gray-600 text-center mb-4">Interface utilisateur dynamique et réactive</p>
                                <div className="flex justify-center gap-2 flex-wrap">
                                    <span className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">Frontend</span>
                                    <span className="px-3 py-1 text-xs bg-indigo-100 text-indigo-600 rounded-full">UI</span>
                                </div>
                            </div>
                        </div>

                        {/* Node.js */}
                        <div className="group relative p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                            <div className="relative z-10">
                                <div className="h-16 w-16 mx-auto mb-6 relative">
                                    <div className="absolute inset-0 bg-green-500/10 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-12"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl transform -rotate-6 transition-transform group-hover:-rotate-12 opacity-0 group-hover:opacity-10"></div>
                                    <svg viewBox="0 0 24 24" fill="none" className="h-16 w-16 relative transition-all duration-500 group-hover:scale-110">
                                        <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.204-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.023.185.015l1.874 1.12c.074.037.166.037.228 0l7.314-4.237c.074-.037.119-.11.119-.202V7.768c0-.091-.045-.165-.119-.202l-7.314-4.237c-.074-.037-.166-.037-.228 0L4.553 7.566c-.074.037-.119.11-.119.202v8.47c0 .091.045.165.119.202l2.001 1.157c1.088.544 1.756-.095 1.756-.741V8.492c0-.119.091-.21.21-.21h.927c.11 0 .21.091.21.21v8.47c0 1.449-.788 2.288-2.169 2.288-.422 0-.752 0-1.688-.46l-1.929-1.12c-.238-.139-.387-.406-.387-.691V7.768c0-.285.149-.552.387-.691l7.314-4.237c.238-.139.552-.139.789 0l7.314 4.237c.238.139.387.406.387.691v8.47c0 .285-.149.552-.387.691l-7.314 4.237c-.238.139-.514.139-.772.139zm2.264-5.811c-3.21 0-3.87-1.469-3.87-2.714 0-.119.091-.21.21-.21h.945c.101 0 .189.074.201.175.149.999.582 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.182-.83-2.588-1.067-2.022-.182-3.24-.643-3.24-2.264 0-1.485 1.251-2.382 3.359-2.382 2.264 0 3.382.788 3.523 2.478.006.055-.015.109-.049.15-.034.042-.082.067-.137.067h-.945c-.095 0-.182-.068-.201-.161-.223-1.101-.843-1.449-2.191-1.449-1.614 0-1.801.566-1.801.991 0 .514.223.662 2.514.951 2.264.285 3.314.643 3.314 2.37-.012 1.61-1.339 2.591-3.76 2.591z" fill="#43853d"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">Node.js</h3>
                                <p className="text-sm text-gray-600 text-center mb-4">Runtime JavaScript performant</p>
                                <div className="flex justify-center gap-2 flex-wrap">
                                    <span className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full">Backend</span>
                                    <span className="px-3 py-1 text-xs bg-emerald-100 text-emerald-600 rounded-full">Server</span>
                                </div>
                            </div>
                        </div>

                        {/* MongoDB */}
                        <div className="group relative p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                            <div className="relative z-10">
                                <div className="h-16 w-16 mx-auto mb-6 relative">
                                    <div className="absolute inset-0 bg-green-500/10 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-12"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl transform -rotate-6 transition-transform group-hover:-rotate-12 opacity-0 group-hover:opacity-10"></div>
                                    <svg viewBox="0 0 24 24" fill="none" className="h-16 w-16 relative transition-all duration-500 group-hover:scale-110">
                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm4.41 14.41c-.36.36-.86.58-1.41.58H9c-.55 0-1.05-.22-1.41-.59C7.22 16.05 7 15.55 7 15v-4c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v4c0 .55-.22 1.05-.59 1.41z" fill="#47A248"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">MongoDB</h3>
                                <p className="text-sm text-gray-600 text-center mb-4">Base de données NoSQL flexible</p>
                                <div className="flex justify-center gap-2 flex-wrap">
                                    <span className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full">Database</span>
                                    <span className="px-3 py-1 text-xs bg-emerald-100 text-emerald-600 rounded-full">NoSQL</span>
                                </div>
                            </div>
                        </div>

                        {/* TailwindCSS */}
                        <div className="group relative p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                            <div className="relative z-10">
                                <div className="h-16 w-16 mx-auto mb-6 relative">
                                    <div className="absolute inset-0 bg-cyan-500/10 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-12"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl transform -rotate-6 transition-transform group-hover:-rotate-12 opacity-0 group-hover:opacity-10"></div>
                                    <svg viewBox="0 0 24 24" fill="none" className="h-16 w-16 relative transition-all duration-500 group-hover:scale-110">
                                        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#38bdf8"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">TailwindCSS</h3>
                                <p className="text-sm text-gray-600 text-center mb-4">Framework CSS utilitaire</p>
                                <div className="flex justify-center gap-2 flex-wrap">
                                    <span className="px-3 py-1 text-xs bg-cyan-100 text-cyan-600 rounded-full">CSS</span>
                                    <span className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">Design</span>
                                </div>
                            </div>
                        </div>

                        {/* TypeScript */}
                        <div className="group relative p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                            <div className="relative z-10">
                                <div className="h-16 w-16 mx-auto mb-6 relative">
                                    <div className="absolute inset-0 bg-blue-500/10 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-12"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl transform -rotate-6 transition-transform group-hover:-rotate-12 opacity-0 group-hover:opacity-10"></div>
                                    <svg viewBox="0 0 24 24" fill="none" className="h-16 w-16 relative transition-all duration-500 group-hover:scale-110">
                                        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="#3178C6"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">TypeScript</h3>
                                <p className="text-sm text-gray-600 text-center mb-4">JavaScript typé et sécurisé</p>
                                <div className="flex justify-center gap-2 flex-wrap">
                                    <span className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">Language</span>
                                    <span className="px-3 py-1 text-xs bg-indigo-100 text-indigo-600 rounded-full">Typed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Réalisations */}
            <section className="py-32 relative overflow-hidden">
                {/* Arrière-plan animé */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-[0.07] mix-blend-soft-light"></div>
                    <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
                    <div className="absolute w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* En-tête avec animation */}
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 mb-6">
                            <span className="text-blue-300 text-sm font-medium">Nos Réalisations</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Projets Récents</h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">Découvrez nos dernières réalisations et succès clients</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Projet 1 : E-commerce */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                            <div className="relative h-[400px] overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80" 
                                     alt="E-commerce Premium" 
                                     className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-80"></div>
                                
                                <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-all duration-500">
                                    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/10 transform transition-all duration-500 group-hover:scale-105">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                                                </svg>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white ml-3">E-commerce Premium</h3>
                                        </div>
                                        <p className="text-blue-100 mb-4">Une plateforme e-commerce moderne avec une expérience d'achat fluide et sécurisée</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-200 backdrop-blur-sm">React.js</span>
                                            <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-200 backdrop-blur-sm">Node.js</span>
                                            <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-200 backdrop-blur-sm">MongoDB</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Projet 2 : Application Mobile */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                            <div className="relative h-[400px] overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                                     alt="Application Mobile" 
                                     className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-80"></div>
                                
                                <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-all duration-500">
                                    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/10 transform transition-all duration-500 group-hover:scale-105">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                                                </svg>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white ml-3">Application Mobile</h3>
                                        </div>
                                        <p className="text-blue-100 mb-4">Application mobile intuitive avec des fonctionnalités innovantes et une interface utilisateur moderne</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-200 backdrop-blur-sm">Flutter</span>
                                            <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-200 backdrop-blur-sm">Firebase</span>
                                            <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-200 backdrop-blur-sm">UI/UX</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Projet 3 : Site Vitrine */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                            <div className="relative h-[400px] overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" 
                                     alt="Site Vitrine" 
                                     className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-80"></div>
                                
                                <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-all duration-500">
                                    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/10 transform transition-all duration-500 group-hover:scale-105">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                                                </svg>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white ml-3">Site Vitrine</h3>
                                        </div>
                                        <p className="text-blue-100 mb-4">Site web élégant et responsive avec des animations fluides et une expérience utilisateur optimisée</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-sm text-emerald-200 backdrop-blur-sm">Symfony</span>
                                            <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-sm text-emerald-200 backdrop-blur-sm">TailwindCSS</span>
                                            <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-sm text-emerald-200 backdrop-blur-sm">Alpine.js</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Effect */}
                <div className="wave absolute bottom-[-2px] left-0 w-full overflow-hidden leading-0">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[150px]">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
                    </svg>
                </div>
            </section>

            {/* Section FAQ */}
            <section className="py-20 bg-gray-50" role="region" aria-labelledby="faq-title">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 id="faq-title" className="text-3xl font-bold text-gray-900 text-center mb-12">Questions fréquentes</h2>
                        
                        <div className="space-y-6" role="list">
                            {/* Question 1 */}
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden" role="listitem">
                                <button className="w-full px-6 py-4 text-left focus:outline-none" 
                                        id="faq-button-1"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="faq-content-1">
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-medium text-gray-900">Comment débuter un projet avec Rboost ?</span>
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                                        </svg>
                                    </div>
                                </button>
                                <div id="faq-content-1" 
                                     className="px-6 pb-4" 
                                     role="region" 
                                     aria-labelledby="faq-button-1">
                                    <p className="text-gray-600">Contactez-nous via le formulaire ci-dessus ou par téléphone. Nous organiserons une première consultation gratuite pour discuter de vos besoins et objectifs.</p>
                                </div>
                            </div>

                            {/* Question 2 */}
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden" role="listitem">
                                <button className="w-full px-6 py-4 text-left focus:outline-none"
                                        id="faq-button-2"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="faq-content-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-medium text-gray-900">Quels sont vos délais de réalisation ?</span>
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                                        </svg>
                                    </div>
                                </button>
                                <div id="faq-content-2" 
                                     className="px-6 pb-4" 
                                     role="region" 
                                     aria-labelledby="faq-button-2">
                                    <p className="text-gray-600">Les délais varient selon la complexité du projet. Nous établissons un planning détaillé lors de la phase de conception et respectons scrupuleusement les échéances fixées.</p>
                                </div>
                            </div>

                            {/* Question 3 */}
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden" role="listitem">
                                <button className="w-full px-6 py-4 text-left focus:outline-none"
                                        id="faq-button-3"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="faq-content-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-medium text-gray-900">Proposez-vous un support après-projet ?</span>
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                                        </svg>
                                    </div>
                                </button>
                                <div id="faq-content-3" 
                                     className="px-6 pb-4" 
                                     role="region" 
                                     aria-labelledby="faq-button-3">
                                    <p className="text-gray-600">Oui, nous offrons un support technique continu et des services de maintenance pour assurer le bon fonctionnement de votre solution digitale.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section CTA Finale */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-6">
                            <span className="text-blue-600 text-sm font-medium">Prêt à démarrer ?</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Transformez votre projet en réalité</h2>
                        <p className="text-xl text-gray-600 mb-12">Contactez-nous dès aujourd'hui pour discuter de votre projet</p>
                        
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link to="/contact" 
                                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300">
                                <span className="relative z-10">Démarrer votre projet</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                            <Link to="/services" 
                                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all">
                                <span>En savoir plus</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home; 