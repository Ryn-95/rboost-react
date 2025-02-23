import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import api from '../api/config';

const Admin = () => {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchContacts = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await api.get('/contacts');
            setContacts(response.data);
        } catch (err) {
            console.error('Erreur détaillée:', err);
            setError("Erreur lors du chargement des contacts. Vérifiez que le serveur est bien lancé sur le port 5001.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const updateContactStatus = async (contactId, newStatus) => {
        try {
            await api.put(`/contacts/${contactId}`, { status: newStatus });
            await fetchContacts();
        } catch (err) {
            console.error('Erreur lors de la mise à jour:', err);
            setError("Erreur lors de la mise à jour du statut");
        }
    };

    const adminMenus = [
        {
            title: "Messages",
            description: "Gérer les messages reçus via le formulaire de contact",
            icon: "📨",
            link: "/admin/messages"
        },
        // Ajoutez d'autres menus d'administration ici si nécessaire
    ];

    if (isLoading) return (
        <div className="min-h-screen bg-[#1a1a2e] text-white flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-400"></div>
        </div>
    );

    if (error) return (
        <div className="min-h-screen bg-[#1a1a2e] text-white flex flex-col items-center justify-center gap-4">
            <div className="text-red-400 text-center max-w-md">{error}</div>
            <button 
                onClick={fetchContacts}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
            >
                Réessayer
            </button>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#1a1a2e] text-white py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Tableau de Bord Administrateur</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {adminMenus.map((menu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                to={menu.link}
                                className="block p-6 bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/5 transition-all duration-300"
                            >
                                <div className="flex items-center space-x-4">
                                    <span className="text-4xl">{menu.icon}</span>
                                    <div>
                                        <h2 className="text-xl font-semibold">{menu.title}</h2>
                                        <p className="text-gray-400 mt-1">{menu.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Admin; 