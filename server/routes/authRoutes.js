import express from 'express';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import User from '../models/User.js';

const router = express.Router();

// Validation pour l'inscription
const registerValidation = [
    body('firstName').notEmpty().trim().escape(),
    body('lastName').notEmpty().trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Le mot de passe doit contenir au moins 8 caractères')
        .matches(/\d/)
        .withMessage('Le mot de passe doit contenir au moins un chiffre')
        .matches(/[A-Z]/)
        .withMessage('Le mot de passe doit contenir au moins une majuscule')
];

// Route de vérification d'authentification
router.get('/check', (req, res) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.json({ isAuthenticated: false });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.json({ isAuthenticated: false });
            }
            res.json({ isAuthenticated: true, user: decoded });
        });
    } catch (error) {
        res.json({ isAuthenticated: false });
    }
});

// Route d'inscription
router.post('/register', registerValidation, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                success: false, 
                errors: errors.array() 
            });
        }

        const { firstName, lastName, email, password } = req.body;

        // Vérifier si l'utilisateur existe déjà
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ 
                success: false, 
                message: 'Cet email est déjà utilisé' 
            });
        }

        // Créer le nouvel utilisateur
        const user = new User({
            firstName,
            lastName,
            email,
            password
        });

        await user.save();

        res.status(201).json({ 
            success: true, 
            message: 'Inscription réussie' 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: 'Erreur lors de l\'inscription' 
        });
    }
});

// Route de connexion
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Trouver l'utilisateur
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ 
                success: false, 
                message: 'Email ou mot de passe incorrect' 
            });
        }

        // Vérifier le mot de passe
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ 
                success: false, 
                message: 'Email ou mot de passe incorrect' 
            });
        }

        // Mettre à jour la date de dernière connexion
        user.lastLogin = new Date();
        await user.save();

        // Créer le token JWT
        const token = jwt.sign(
            { 
                id: user._id,
                email: user.email,
                isAdmin: user.isAdmin 
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Envoyer le token dans un cookie HTTP-only
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000 // 24 heures
        });

        res.json({ 
            success: true,
            token: token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                isAdmin: user.isAdmin
            }
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: 'Erreur lors de la connexion' 
        });
    }
});

// Route de déconnexion
router.post('/logout', (req, res) => {
    res.clearCookie('jwt');
    res.json({ 
        success: true, 
        message: 'Déconnexion réussie' 
    });
});

export default router; 