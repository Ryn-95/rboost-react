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

// Intercepteur pour les requêtes
api.interceptors.request.use(
    config => {
        // Log de la requête
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
        // Log de la réponse
        console.log('Réponse reçue:', response.status);
        return response;
    },
    error => {
        // Log détaillé de l'erreur
        console.error('Erreur API détaillée:', {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data,
            config: error.config
        });

        // Gestion spécifique des erreurs
        if (error.response) {
            // La requête a été faite et le serveur a répondu avec un code d'erreur
            console.error('Erreur serveur:', error.response.data);
        } else if (error.request) {
            // La requête a été faite mais aucune réponse n'a été reçue
            console.error('Pas de réponse du serveur');
        } else {
            // Une erreur s'est produite lors de la configuration de la requête
            console.error('Erreur de configuration:', error.message);
        }

        return Promise.reject(error);
    }
);

export default api; 