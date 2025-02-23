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

export default api; 