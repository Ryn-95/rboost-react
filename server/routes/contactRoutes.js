import express from 'express';
import { body, validationResult } from 'express-validator';
import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// S'assurer que les variables d'environnement sont chargées
dotenv.config({ path: join(__dirname, '../..', '.env') });

const router = express.Router();

// Configuration de Nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER || 'rdigitaall@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'togjsbezckzsfrsy'
    },
    tls: {
        rejectUnauthorized: false
    },
    debug: true,
    logger: true
});

// Vérification de la configuration email
transporter.verify((error, success) => {
    if (error) {
        console.error('Erreur de configuration email:', error);
    } else {
        console.log('Serveur SMTP prêt à envoyer des emails');
        console.log('Configuration utilisée:', {
            user: process.env.EMAIL_USER || 'rdigitaall@gmail.com',
            host: 'smtp.gmail.com',
            port: 465
        });
    }
});

// Validation des données
const validateContact = [
    body('name').notEmpty().trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('phone').notEmpty().trim().escape(),
    body('subject').notEmpty().trim().escape(),
    body('message').notEmpty().trim().escape(),
];

// Route POST pour créer un nouveau contact
router.post('/', validateContact, async (req, res) => {
    try {
        console.log('Données reçues:', req.body);
        
        // Vérification des erreurs de validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log('Erreurs de validation:', errors.array());
            return res.status(400).json({ 
                success: false,
                message: 'Erreurs de validation',
                errors: errors.array() 
            });
        }

        const contact = new Contact({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            subject: req.body.subject,
            message: req.body.message
        });

        console.log('Contact à sauvegarder:', contact);
        const savedContact = await contact.save();
        console.log('Contact sauvegardé avec succès:', savedContact);

        const siteUrl = process.env.NODE_ENV === 'production' 
            ? 'https://rboost-react-65clukrdbnui3xoysum1dthxzcob.vercel.app'
            : 'http://localhost:3000';

        // Email de notification pour l'admin
        const adminMailOptions = {
            from: `"RBoost Contact Form" <${process.env.EMAIL_USER || 'rdigitaall@gmail.com'}>`,
            to: process.env.ADMIN_EMAIL || 'rdigitaall@gmail.com',
            subject: `Nouveau message de ${req.body.name} - ${req.body.subject}`,
            html: `
                <h2>Nouveau message reçu</h2>
                <p><strong>De:</strong> ${req.body.name}</p>
                <p><strong>Email:</strong> ${req.body.email}</p>
                <p><strong>Téléphone:</strong> ${req.body.phone}</p>
                <p><strong>Sujet:</strong> ${req.body.subject}</p>
                <p><strong>Message:</strong></p>
                <p>${req.body.message}</p>
                <p><a href="${siteUrl}/admin/messages">Voir tous les messages</a></p>
            `
        };

        // Email de confirmation pour l'expéditeur
        const userMailOptions = {
            from: `"RBoost Digital" <${process.env.EMAIL_USER || 'rdigitaall@gmail.com'}>`,
            to: req.body.email,
            subject: 'Confirmation de réception de votre message',
            html: `
                <h2>Merci de nous avoir contacté !</h2>
                <p>Cher(e) ${req.body.name},</p>
                <p>Nous avons bien reçu votre message concernant "${req.body.subject}".</p>
                <p>Notre équipe va l'examiner dans les plus brefs délais et vous répondra rapidement.</p>
                <p>Voici un récapitulatif de votre message :</p>
                <div style="background-color: #f5f5f5; padding: 15px; margin: 10px 0; border-radius: 5px;">
                    <p><strong>Sujet :</strong> ${req.body.subject}</p>
                    <p><strong>Message :</strong></p>
                    <p>${req.body.message}</p>
                </div>
                <p>Si vous avez des questions supplémentaires, n'hésitez pas à nous contacter.</p>
                <p>Cordialement,<br>L'équipe RBoost Digital</p>
            `
        };

        console.log('Tentative d\'envoi d\'email à l\'admin avec les options:', adminMailOptions);
        console.log('Tentative d\'envoi d\'email de confirmation avec les options:', userMailOptions);

        // Envoi des emails avec gestion des erreurs détaillée
        try {
            const [adminInfo, userInfo] = await Promise.all([
                transporter.sendMail(adminMailOptions),
                transporter.sendMail(userMailOptions)
            ]);
            console.log('Email admin envoyé avec succès:', adminInfo);
            console.log('Email de confirmation envoyé avec succès:', userInfo);
        } catch (emailError) {
            console.error('Erreur lors de l\'envoi des emails:', emailError);
            // On continue malgré l'erreur d'envoi d'email
        }

        res.status(201).json({
            success: true,
            message: 'Votre message a été envoyé avec succès',
            data: savedContact
        });
    } catch (error) {
        console.error('Erreur détaillée:', error);
        res.status(500).json({
            success: false,
            message: 'Une erreur est survenue lors de l\'envoi du message',
            error: error.message
        });
    }
});

// Route GET pour récupérer tous les contacts
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        console.log('Liste des contacts récupérée:', contacts);
        res.json(contacts);
    } catch (error) {
        console.error('Erreur lors de la récupération des contacts:', error);
        res.status(500).json({
            success: false,
            message: 'Une erreur est survenue',
            error: error.message
        });
    }
});

// Route PUT pour mettre à jour le statut d'un contact
router.put('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        );

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact non trouvé'
            });
        }

        res.json({
            success: true,
            message: 'Statut mis à jour avec succès',
            data: contact
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Une erreur est survenue',
            error: error.message
        });
    }
});

export default router; 