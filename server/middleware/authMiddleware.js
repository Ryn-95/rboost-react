import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    try {
        // Vérifier le token dans les cookies
        const token = req.cookies.jwt;
        
        if (!token) {
            return res.status(401).json({ 
                success: false, 
                message: 'Accès non autorisé - Token manquant' 
            });
        }

        // Vérifier et décoder le token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        // Vérifier si l'utilisateur est un admin
        if (!decoded.isAdmin) {
            return res.status(403).json({ 
                success: false, 
                message: 'Accès interdit - Droits administrateur requis' 
            });
        }

        next();
    } catch (error) {
        return res.status(401).json({ 
            success: false, 
            message: 'Token invalide ou expiré' 
        });
    }
};

export default authMiddleware; 