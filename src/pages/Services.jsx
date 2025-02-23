import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Swal from 'sweetalert2';
import SEO from '../components/SEO';
import { CalendarDaysIcon, PhoneIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

const Services = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    // Catégories de services
    const categories = [
        { id: 'all', name: 'Tous les services' },
        { id: 'web', name: 'Développement Web' },
        { id: 'marketing', name: 'Marketing Digital' },
        { id: 'design', name: 'Design & UI/UX' }
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
            features: ['Design responsive', 'SEO optimisé', 'Formulaire de contact', 'Hébergement inclus', 'Maintenance 24/7'],
            price: '999,99 €',
            technologies: ['React', 'Next.js', 'Tailwind CSS'],
            backgroundImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80'
        },
        {
            id: 1,
            name: 'Marketing Digital',
            category: 'marketing',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
            ),
            description: "Stratégies marketing complètes pour augmenter votre visibilité en ligne.",
            features: ['SEO', 'Réseaux sociaux', 'Publicité en ligne', 'Analyse de données', 'Rapports mensuels'],
            price: '799,99 €/mois',
            technologies: ['Google Ads', 'Meta Ads', 'Analytics'],
            backgroundImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80'
        },
        {
            id: 2,
            name: 'Social Media',
            category: 'marketing',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                </svg>
            ),
            description: "Gestion professionnelle de vos réseaux sociaux pour développer votre communauté.",
            features: ['Création de contenu', 'Community management', 'Analyse des performances', 'Veille concurrentielle', 'Stratégie éditoriale'],
            price: '599,99 €/mois',
            technologies: ['Instagram', 'Facebook', 'LinkedIn'],
            backgroundImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80'
        },
        {
            id: 3,
            name: 'Design UI/UX',
            category: 'design',
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
            ),
            description: "Design d'interfaces modernes et expérience utilisateur optimisée.",
            features: ['Maquettes interactives', 'Tests utilisateurs', 'Design System', 'Responsive Design', 'Accessibilité'],
            price: '1299,99 €',
            technologies: ['Figma', 'Adobe XD', 'Sketch'],
            backgroundImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80'
        }
    ];

    const handleScheduleCall = (type) => {
        Swal.fire({
            title: 'Planifier un rendez-vous',
            html: `
                <div class="space-y-4">
                    <div class="text-left">
                        <label class="block text-sm font-medium text-gray-700">Nom complet</label>
                        <input type="text" id="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    </div>
                    <div class="text-left">
                        <label class="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    </div>
                    <div class="text-left">
                        <label class="block text-sm font-medium text-gray-700">Date souhaitée</label>
                        <input type="date" id="date" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    </div>
                    <div class="text-left">
                        <label class="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                    </div>
                </div>
            `,
            showCancelButton: true,
            confirmButtonText: 'Planifier',
            cancelButtonText: 'Annuler',
            confirmButtonColor: '#3B82F6',
            cancelButtonColor: '#6B7280',
            preConfirm: () => {
                return {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    date: document.getElementById('date').value,
                    message: document.getElementById('message').value
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Demande envoyée !',
                    text: 'Nous vous contacterons rapidement pour confirmer le rendez-vous.',
                    icon: 'success'
                });
            }
        });
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

    return (
        <div className="min-h-screen bg-gray-900 pb-20">
            <SEO 
                title="Nos Services - RBoost Digital | Solutions Web & Marketing"
                description="Découvrez nos services de création de sites web, référencement SEO, publicité en ligne et marketing digital. Solutions personnalisées pour votre croissance."
                keywords="services web, création site internet, référencement SEO, publicité en ligne, marketing digital, développement web"
                url="/services"
            />
            
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-90"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent)]"></div>
                    <div className="grain absolute inset-0 opacity-30"></div>
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

            {/* Services Section */}
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
                                    {/* Image de fond avec overlay */}
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

                                        <div className="flex items-center justify-between mt-8">
                                            <span className="text-2xl font-bold text-white">{service.price}</span>
                                            <button
                                                onClick={() => handleSubscribe(service.id, service.name)}
                                                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-medium rounded-xl hover:opacity-90 transition-opacity"
                                            >
                                                Souscrire
                                            </button>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                    </div>
                </div>
            </section>

            {/* Section Consultation */}
            <section className="py-20 bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Planifiez une consultation gratuite</h2>
                        <p className="text-xl text-gray-400">Discutons de vos objectifs et trouvons la meilleure solution pour votre projet</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Appel téléphonique */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-900/50 p-8 rounded-2xl border border-white/10 cursor-pointer"
                            onClick={() => handleScheduleCall('phone')}
                        >
                            <PhoneIcon className="w-12 h-12 text-blue-500 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Appel téléphonique</h3>
                            <p className="text-gray-400 mb-4">Échangeons rapidement sur vos besoins et objectifs</p>
                            <span className="text-blue-400 font-medium">15-30 minutes</span>
                        </motion.div>

                        {/* Visioconférence */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-900/50 p-8 rounded-2xl border border-white/10 cursor-pointer"
                            onClick={() => handleScheduleCall('video')}
                        >
                            <VideoCameraIcon className="w-12 h-12 text-emerald-500 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Visioconférence</h3>
                            <p className="text-gray-400 mb-4">Présentons en détail votre projet et nos solutions</p>
                            <span className="text-emerald-400 font-medium">30-45 minutes</span>
                        </motion.div>

                        {/* Rendez-vous personnalisé */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-900/50 p-8 rounded-2xl border border-white/10 cursor-pointer"
                            onClick={() => handleScheduleCall('meeting')}
                        >
                            <CalendarDaysIcon className="w-12 h-12 text-purple-500 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Rendez-vous personnalisé</h3>
                            <p className="text-gray-400 mb-4">Planifions une rencontre approfondie pour votre projet</p>
                            <span className="text-purple-400 font-medium">45-60 minutes</span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section FAQ */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Questions fréquentes</h2>
                        <p className="text-xl text-gray-400">Tout ce que vous devez savoir sur nos services</p>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-gray-800/50 p-6 rounded-2xl">
                            <h3 className="text-xl font-bold text-white mb-4">Combien de temps faut-il pour créer un site web ?</h3>
                            <p className="text-gray-400">La durée de création varie selon la complexité du projet. En général, un site vitrine prend 2-4 semaines, tandis qu'un e-commerce peut prendre 4-8 semaines.</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-2xl">
                            <h3 className="text-xl font-bold text-white mb-4">Quels sont vos délais de livraison ?</h3>
                            <p className="text-gray-400">Nos délais varient selon le type de projet. Nous établissons un planning détaillé lors de notre première consultation pour respecter vos échéances.</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-2xl">
                            <h3 className="text-xl font-bold text-white mb-4">Proposez-vous un support après-vente ?</h3>
                            <p className="text-gray-400">Oui, nous offrons un support technique continu et une maintenance régulière pour tous nos projets. Notre équipe est disponible 24/7 pour répondre à vos besoins.</p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-medium rounded-xl hover:opacity-90 transition-opacity"
                        >
                            Contactez-nous
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services; 