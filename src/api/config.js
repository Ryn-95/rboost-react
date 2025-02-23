import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: true
});

// Intercepteur pour les requêtes
api.interceptors.request.use(
    config => {
        console.log('Envoi de la requête à:', config.url);
        return config;
    },
    error => {
        console.error('Erreur de requête:', error);
        return Promise.reject(error);
    }
);

// Intercepteur pour les réponses
api.interceptors.response.use(
    response => {
        console.log('Réponse reçue:', response.status);
        return response;
    },
    error => {
        if (error.response) {
            console.error('Erreur serveur:', error.response.data);
        } else if (error.request) {
            console.error('Pas de réponse du serveur');
        } else {
            console.error('Erreur de configuration:', error.message);
        }
        return Promise.reject(error);
    }
);

export default api; 