import React, { useState, useEffect } from 'react';
import api from '../api/config';
import Swal from 'sweetalert2';

const AdminMessages = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMessages = async () => {
        try {
            setLoading(true);
            setError(null);
            console.log('Tentative de connexion à:', api.defaults.baseURL);
            const response = await api.get('/contacts');
            console.log('Réponse reçue:', response.data);
            setMessages(response.data);
        } catch (error) {
            console.error('Erreur détaillée:', error);
            console.error('Message d\'erreur:', error.message);
            console.error('Response:', error.response);
            setError(error.message);
            Swal.fire({
                title: 'Erreur !',
                text: `Impossible de charger les messages: ${error.message}`,
                icon: 'error',
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonText: 'Réessayer',
                cancelButtonText: 'Annuler'
            }).then((result) => {
                if (result.isConfirmed) {
                    fetchMessages();
                }
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const updateStatus = async (id, newStatus) => {
        try {
            await api.put(`/contacts/${id}`, { status: newStatus });
            fetchMessages(); // Recharger les messages
            Swal.fire({
                title: 'Succès !',
                text: 'Statut mis à jour avec succès',
                icon: 'success'
            });
        } catch (error) {
            console.error('Erreur lors de la mise à jour du statut:', error);
            Swal.fire({
                title: 'Erreur !',
                text: 'Impossible de mettre à jour le statut',
                icon: 'error'
            });
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'new': return 'bg-blue-500';
            case 'in_progress': return 'bg-yellow-500';
            case 'completed': return 'bg-green-500';
            default: return 'bg-gray-500';
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-8">Messages Reçus</h1>
                
                <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-700">
                            <thead className="bg-gray-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Nom</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Sujet</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Message</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Statut</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800 divide-y divide-gray-700">
                                {messages.map((message) => (
                                    <tr key={message._id} className="hover:bg-gray-700 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                            {formatDate(message.createdAt)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                            {message.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                            {message.email}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                            {message.subject}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-300">
                                            <div className="max-w-xs overflow-hidden text-ellipsis">
                                                {message.message}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(message.status)} text-white`}>
                                                {message.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <select
                                                className="bg-gray-700 text-white rounded px-2 py-1"
                                                value={message.status}
                                                onChange={(e) => updateStatus(message._id, e.target.value)}
                                            >
                                                <option value="new">Nouveau</option>
                                                <option value="in_progress">En cours</option>
                                                <option value="completed">Terminé</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminMessages; 