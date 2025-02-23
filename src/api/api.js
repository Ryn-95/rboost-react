import axios from 'axios';

const baseURL = import.meta.env.MODE === 'development' 
    ? 'http://localhost:5001/api'
    : 'https://rboost-react-ryns-projects-df7e5921.vercel.app/api';

const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

export const getContacts = async () => {
    try {
        const response = await api.get('/contacts');
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des contacts:', error);
        throw error;
    }
};

export const createContact = async (contactData) => {
    try {
        const response = await api.post('/contacts', contactData);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la création du contact:', error);
        throw error;
    }
};

export default api; 