import axios from 'axios';

const baseURL = import.meta.env.MODE === 'development' 
    ? 'http://localhost:5001/api'
    : 'https://rboost-react-ryns-projects-df7e5921.vercel.app/api';

const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: true
});

// Intercepteur pour gérer les erreurs
api.interceptors.response.use(
    response => response,
    error => {
        console.error('Erreur API:', error.response?.data || error.message);
        throw error;
    }
);

export default api; 