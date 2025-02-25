import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const About = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO 
                title="À Propos - RBoost Digital"
                description="Découvrez l'histoire et l'équipe derrière RBoost Digital. Experts en création de sites web et marketing digital à Paris."
                keywords="agence web paris, équipe digitale, expertise web, développement web"
                url="/about"
            />

            {/* Hero Section avec Parallax */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8"
                        >
                            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-xl rounded-full text-blue-200 text-sm mb-6">
                                Bienvenue chez RBoost Digital
                            </span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-7xl font-light text-white mb-8"
                        >
                            Créons ensemble{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                votre succès digital
                            </span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl text-blue-100/80 leading-relaxed max-w-2xl mx-auto"
                        >
                            Une équipe passionnée qui transforme vos idées en expériences digitales exceptionnelles
                        </motion.p>
                    </div>
                </div>

                {/* Vague décorative */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                    <svg className="relative block w-full" style={{ height: '150px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
                    </svg>
                </div>
            </section>

            {/* Section Notre Histoire */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="text-blue-600 text-sm tracking-wider mb-6 block">NOTRE HISTOIRE</span>
                                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
                                    De l'idée à l'excellence digitale
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-gray-600 leading-relaxed">
                                        Fondée en 2020 à Paris, RBoost Digital est née d'une vision simple mais ambitieuse : redéfinir les standards du développement web et du marketing digital. Notre approche unique combine expertise technique de pointe et créativité sans limites.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Chaque projet est une nouvelle aventure, une opportunité de repousser les limites de l'innovation digitale. Notre équipe passionnée travaille main dans la main avec nos clients pour transformer leurs ambitions en réalisations exceptionnelles.
                                    </p>
                                    <div className="grid grid-cols-2 gap-8 pt-6">
                                        <div>
                                            <div className="text-3xl font-light text-blue-600 mb-2">200+</div>
                                            <p className="text-gray-600">Projets réalisés</p>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-light text-blue-600 mb-2">98%</div>
                                            <p className="text-gray-600">Clients satisfaits</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                                    <img 
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                                        alt="L'équipe RBoost en action" 
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Valeurs */}
            <section className="py-20 md:py-32 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <span className="text-blue-600 text-sm tracking-wider mb-6 block">NOS VALEURS</span>
                            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                                Les principes qui nous guident
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Notre mission est portée par des valeurs fortes qui définissent chacune de nos actions
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Excellence",
                                    description: "Nous visons l'excellence dans chaque ligne de code, chaque pixel, chaque interaction. La qualité n'est pas une option, c'est notre standard.",
                                    icon: "✨",
                                    gradient: "from-blue-500/10 to-cyan-500/10"
                                },
                                {
                                    title: "Innovation",
                                    description: "L'innovation est dans notre ADN. Nous explorons constamment de nouvelles technologies pour créer des solutions qui vous démarquent.",
                                    icon: "💡",
                                    gradient: "from-purple-500/10 to-pink-500/10"
                                },
                                {
                                    title: "Engagement",
                                    description: "Votre succès est notre priorité. Nous nous engageons pleinement dans chaque projet avec passion, transparence et détermination.",
                                    icon: "🤝",
                                    gradient: "from-amber-500/10 to-orange-500/10"
                                }
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className="group"
                                >
                                    <div className={`bg-gradient-to-br ${value.gradient} p-8 rounded-2xl backdrop-blur-xl border border-white/20 hover:shadow-lg transition-all duration-500`}>
                                        <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                                        <h3 className="text-xl font-medium text-gray-900 mb-4">{value.title}</h3>
                                        <p className="text-gray-600">{value.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Équipe */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <span className="text-blue-600 text-sm tracking-wider mb-6 block">NOTRE ÉQUIPE</span>
                            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                                Des experts passionnés à votre service
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Une équipe talentueuse qui combine créativité et expertise technique
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                {
                                    name: "Alexandre Dubois",
                                    role: "Directeur Technique",
                                    icon: "👨‍💻",
                                    gradient: "from-blue-500/10 to-cyan-500/10"
                                },
                                {
                                    name: "Marie Chen",
                                    role: "Directrice Artistique",
                                    icon: "👩‍🎨",
                                    gradient: "from-purple-500/10 to-pink-500/10"
                                },
                                {
                                    name: "Thomas Martin",
                                    role: "Lead Developer",
                                    icon: "👨‍🔧",
                                    gradient: "from-amber-500/10 to-orange-500/10"
                                },
                                {
                                    name: "Sarah Cohen",
                                    role: "UX Designer",
                                    icon: "👩‍💻",
                                    gradient: "from-green-500/10 to-emerald-500/10"
                                }
                            ].map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className="group text-center"
                                >
                                    <div className="relative mb-6 inline-block">
                                        <div className={`w-32 h-32 rounded-full mx-auto bg-gradient-to-br ${member.gradient} flex items-center justify-center text-5xl`}>
                                            {member.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-medium text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-gray-600">{member.role}</p>
                                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-sm text-gray-500">Expert passionné avec plus de 5 ans d'expérience</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section CTA */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-light text-white mb-8">
                                Prêt à transformer votre vision en réalité ?
                            </h2>
                            <p className="text-xl text-blue-100/80 mb-12">
                                Discutons de votre projet et créons ensemble quelque chose d'extraordinaire
                            </p>
                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-full text-lg font-medium tracking-wide hover:bg-gray-50 transition-all duration-300"
                            >
                                Commençons l'aventure
                                <span className="ml-2">→</span>
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About; 