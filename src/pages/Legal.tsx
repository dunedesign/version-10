import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Legal() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <Link 
        to="/" 
        className="inline-flex items-center text-gray-600 hover:text-lullaby-primary mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour à l'accueil
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
      <p className="text-gray-600 mb-8">Date de dernière mise à jour : 05/11/24</p>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Propriétaire du site</h2>
          <p>
            Le site www.lullaby.boutique.com est édité par l'entreprise :
          </p>
          <ul className="list-none pl-0 mt-4">
            <li>DUNE - Design Universel</li>
            <li>8 rue Louis Armand, 92600 Asnières-sur-Seine, France</li>
            <li>SIRET : 830700604</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Directeur de la publication</h2>
          <p>
            Lucy Gauthier, en qualité de Fondatrice de Lullaby
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Hébergement</h2>
          <p>
            Le site est hébergé par :
          </p>
          <p>OVH et bolt</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p>
            Pour toute question ou demande, vous pouvez nous contacter par :
          </p>
          <p>Email : contact@dunedesignuniversel.com</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">1. Propriété intellectuelle</h2>
          <p>
            Le site Lullaby et son contenu (textes, images, logos, vidéos, icônes, graphismes, etc.) sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, distribution, modification, ou autre utilisation non autorisée de ces éléments, en tout ou en partie, est strictement interdite sans l'accord préalable et écrit de DUNE - Design Universel.
          </p>
          <p>
            Les marques et logos présents sur le site sont des marques déposées, appartenant à DUNE - Design Universel ou à des tiers ayant autorisé leur utilisation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">2. Données personnelles</h2>
          <h3 className="text-lg font-medium mb-2">Collecte des données :</h3>
          <p>
            Dans le cadre de l'utilisation du site [Nom du site], DUNE - Design Universel collecte des données personnelles des utilisateurs, telles que leur nom, adresse e-mail, adresse postale, numéro de téléphone, etc. Ces données sont collectées lors de la création d'un compte, de l'achat d'un produit, ou de l'inscription à la newsletter.
          </p>

          <h3 className="text-lg font-medium mb-2 mt-4">Finalités de la collecte :</h3>
          <p>Les données personnelles collectées sont utilisées pour :</p>
          <ul>
            <li>Le traitement des commandes et des livraisons ;</li>
            <li>La gestion des demandes de renseignements ou de support ;</li>
            <li>L'envoi de communications commerciales (avec consentement préalable) ;</li>
            <li>L'amélioration de l'expérience utilisateur sur le site.</li>
          </ul>

          <h3 className="text-lg font-medium mb-2 mt-4">Droits des utilisateurs :</h3>
          <p>
            Conformément à la loi Informatique et Libertés du 6 janvier 1978 et au Règlement (UE) 2016/679 du 27 avril 2016 relatif à la protection des données personnelles (RGPD), vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <ul>
            <li>Droit d'accès ;</li>
            <li>Droit de rectification ;</li>
            <li>Droit à l'effacement (droit à l'oubli) ;</li>
            <li>Droit de limitation du traitement ;</li>
            <li>Droit à la portabilité des données ;</li>
            <li>Droit d'opposition au traitement des données.</li>
          </ul>
          <p>
            Pour exercer vos droits, vous pouvez nous contacter à l'adresse suivante : contact@dunedesignuniversel.com.
          </p>
          <p>
            Pour plus d'informations sur le traitement des données personnelles, veuillez consulter notre Politique de confidentialité.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">3. Cookies</h2>
          <p>
            Le site utilise des cookies afin de faciliter la navigation et d'améliorer l'expérience utilisateur. Un cookie est un petit fichier de données envoyé par le site et stocké sur votre appareil.
          </p>
          <p>Les cookies utilisés sur ce site permettent de :</p>
          <ul>
            <li>Mémoriser les préférences des utilisateurs ;</li>
            <li>Analyser l'utilisation du site pour en améliorer les performances.</li>
          </ul>
          <p>
            Vous pouvez configurer votre navigateur pour refuser les cookies ou être averti de leur utilisation. Toutefois, cela peut affecter certaines fonctionnalités du site.
          </p>
          <p>
            Pour plus de détails sur l'utilisation des cookies, veuillez consulter notre Politique de cookies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">4. Responsabilité</h2>
          <p>
            DUNE - Design Universel s'efforce de garantir l'exactitude et l'actualité des informations publiées sur le site [Nom du site], mais ne peut être tenue responsable des erreurs, omissions ou inexactitudes qui pourraient survenir.
          </p>
          <p>
            Le site peut contenir des liens vers des sites tiers. DUNE - Design Universel n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu et leur utilisation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">5. Loi applicable et résolution des litiges</h2>
          <p>Les présentes mentions légales sont régies par la loi française.</p>
          <p>
            En cas de litige, les parties s'engagent à rechercher une solution amiable. Si une solution amiable n'est pas trouvée, le litige sera soumis aux juridictions compétentes du ressort de la Cour d'appel de Paris.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">6. Modification des mentions légales</h2>
          <p>
            DUNE - Design Universel se réserve le droit de modifier ou de mettre à jour les présentes mentions légales à tout moment, sans préavis. Les utilisateurs du site sont invités à consulter régulièrement cette page pour prendre connaissance de toute modification.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">7. Accessibilité du site</h2>
          <p>
            Le site Lullaby est conçu pour être accessible à tous les utilisateurs, y compris ceux en situation de handicap. Si vous rencontrez des difficultés pour naviguer sur notre site, n'hésitez pas à nous contacter pour que nous puissions trouver une solution.
          </p>
        </section>
      </div>
    </main>
  );
}