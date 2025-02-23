import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import contactRoutes from '../server/routes/contactRoutes.js';
import authRoutes from '../server/routes/authRoutes.js';
import authMiddleware from '../server/middleware/authMiddleware.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? 'https://rboost-react-ryns-projects-df7e5921.vercel.app'
        : 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/contacts', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', authMiddleware);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connecté'))
    .catch(err => console.error('Erreur MongoDB:', err));

export default app; 