import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white py-32">
      <SEO 
        title="Politique de Confidentialité - RBoost Digital"
        description="Découvrez notre politique de confidentialité et comment nous protégeons vos données personnelles."
        keywords="politique confidentialité, protection données, RGPD, vie privée"
        url="/privacy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="mb-4">
                Chez RBoost Digital, nous accordons une grande importance à la protection de vos données personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Collecte des Données</h2>
              <p className="mb-4">Nous collectons les informations suivantes :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Informations relatives à votre entreprise</li>
                <li>Données de navigation sur notre site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Utilisation des Données</h2>
              <p className="mb-4">Vos données sont utilisées pour :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vous contacter concernant nos services</li>
                <li>Personnaliser votre expérience</li>
                <li>Améliorer notre site web</li>
                <li>Envoyer des communications marketing (avec votre consentement)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Protection des Données</h2>
              <p className="mb-4">
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès, 
                modification, divulgation ou destruction non autorisés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Vos Droits</h2>
              <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Cookies</h2>
              <p className="mb-4">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines 
                fonctionnalités du site pourraient ne pas fonctionner correctement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Contact</h2>
              <p className="mb-4">
                Pour toute question concernant notre politique de confidentialité, contactez-nous :
              </p>
              <ul className="space-y-2">
                <li>Email : rdigitaall@gmail.com</li>
                <li>Téléphone : 06 05 85 12 16</li>
                <li>Adresse : 75 Avenue des Champs-Élysées, 75008 Paris, France</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Modifications</h2>
              <p className="mb-4">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Les modifications entrent en vigueur dès leur publication sur le site.
              </p>
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

export default Privacy; 