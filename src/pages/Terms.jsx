import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white py-32">
      <SEO 
        title="Conditions d'Utilisation - RBoost Digital"
        description="Consultez nos conditions d'utilisation pour comprendre vos droits et obligations lors de l'utilisation de nos services."
        keywords="conditions utilisation, mentions légales, CGU, CGV"
        url="/terms"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8">Conditions d'Utilisation</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Présentation</h2>
              <p className="mb-4">
                Les présentes conditions générales d'utilisation régissent l'utilisation du site web 
                de RBoost Digital. En accédant à ce site, vous acceptez ces conditions dans leur intégralité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Mentions Légales</h2>
              <p className="mb-4">
                RBoost Digital<br />
                75 Avenue des Champs-Élysées<br />
                75008 Paris, France<br />
                Email : rdigitaall@gmail.com<br />
                Téléphone : 06 05 85 12 16
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Services</h2>
              <p className="mb-4">Nos services comprennent :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Création de sites web</li>
                <li>Optimisation SEO</li>
                <li>Marketing digital</li>
                <li>Gestion des réseaux sociaux</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Propriété Intellectuelle</h2>
              <p className="mb-4">
                L'ensemble du contenu de ce site (textes, images, logos, etc.) est protégé par le droit 
                d'auteur. Toute reproduction ou utilisation non autorisée est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Responsabilités</h2>
              <p className="mb-4">
                RBoost Digital s'efforce d'assurer l'exactitude des informations mais ne peut garantir 
                l'absence d'erreurs. Nous nous réservons le droit de modifier le contenu à tout moment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Conditions de Paiement</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Les prix sont indiqués en euros TTC</li>
                <li>Le paiement s'effectue selon les modalités convenues dans le devis</li>
                <li>Un acompte de 30% est demandé à la signature</li>
                <li>Le solde est payable à la livraison du projet</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Délais et Livraison</h2>
              <p className="mb-4">
                Les délais de livraison sont donnés à titre indicatif. Nous nous engageons à respecter 
                au mieux les délais annoncés et à tenir le client informé de tout changement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Résiliation</h2>
              <p className="mb-4">
                En cas de non-respect des présentes conditions, nous nous réservons le droit de 
                suspendre ou de mettre fin à nos services après notification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Loi Applicable</h2>
              <p className="mb-4">
                Les présentes conditions sont régies par le droit français. Tout litige relève de la 
                compétence exclusive des tribunaux de Paris.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Contact</h2>
              <p className="mb-4">
                Pour toute question concernant ces conditions, contactez-nous :
              </p>
              <ul className="space-y-2">
                <li>Email : rdigitaall@gmail.com</li>
                <li>Téléphone : 06 05 85 12 16</li>
                <li>Adresse : 75 Avenue des Champs-Élysées, 75008 Paris, France</li>
              </ul>
            </section>

            <section>
              <p className="text-sm">
                Dernière mise à jour : {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms; 