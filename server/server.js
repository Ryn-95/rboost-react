import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cookieParser from 'cookie-parser';
import contactRoutes from './routes/contactRoutes.js';
import authRoutes from './routes/authRoutes.js';
import authMiddleware from './middleware/authMiddleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Charger les variables d'environnement
dotenv.config({ path: join(__dirname, '..', '.env') });

// Vérifier les variables d'environnement critiques
console.log('Variables d\'environnement chargées:', {
    NODE_ENV: process.env.NODE_ENV,
    MONGODB_URI: process.env.MONGODB_URI ? '****' : 'non défini',
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD ? '****' : 'non défini'
});

const app = express();

// Configuration CORS avec support des cookies
const corsOptions = {
    origin: function(origin, callback) {
        const allowedOrigins = [
            'http://localhost:3000',
            'https://rboost-react.vercel.app',
            'https://rboost-react-ryns-projects-df7e5921.vercel.app'
        ];
        
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Non autorisé par CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Middleware de logging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
    next();
});

// Routes publiques
app.use('/api/contacts', contactRoutes);
app.use('/api/auth', authRoutes);

// Routes protégées par l'authentification
app.use('/api/admin', authMiddleware);
app.use('/api/admin/messages', authMiddleware);

// Gestion globale des erreurs
app.use((err, req, res, next) => {
    console.error('Erreur serveur:', err);
    res.status(err.status || 500).json({
        message: err.message || 'Une erreur est survenue sur le serveur',
        error: process.env.NODE_ENV === 'development' ? err : {}
    });
});

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB Connecté:', mongoose.connection.host))
.catch(err => console.error('Erreur MongoDB:', err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
}); 