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
    origin: process.env.NODE_ENV === 'production'
        ? ['https://rboost-react-ryns-projects-df7e5921.vercel.app', 'https://rboost-react.vercel.app']
        : 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Routes publiques
app.use('/api/contacts', contactRoutes);
app.use('/api/auth', authRoutes);

// Routes protégées par l'authentification
app.use('/api/admin', authMiddleware);
app.use('/api/admin/messages', authMiddleware);

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB Connecté:', mongoose.connection.host))
.catch(err => console.error('Erreur MongoDB:', err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
}); 