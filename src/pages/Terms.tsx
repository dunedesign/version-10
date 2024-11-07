import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Terms() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <Link 
        to="/" 
        className="inline-flex items-center text-gray-600 hover:text-lullaby-primary mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour à l'accueil
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">Conditions Générales de Vente (CGV)</h1>
      <p className="text-gray-600 mb-8">Date de dernière mise à jour : 05/11/24</p>

      <div className="prose prose-gray max-w-none">
        <p className="mb-8">
          Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des ventes conclues entre l'entreprise DUNE - Design Universel, propriétaire de la marque Lullaby, et ses clients dans le cadre de la vente en ligne de produits tels que des chouchous, bandeaux et autres accessoires capillaires inclusifs.
        </p>

        <div className="mb-8">
          <p><strong>Entreprise :</strong> DUNE - Design Universel</p>
          <p><strong>Adresse :</strong> 8 rue Louis Armand, 92600 Asnières-sur-Seine, France</p>
          <p><strong>SIRET :</strong> 930700604</p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Objet</h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) ont pour objet de définir les droits et obligations des parties dans le cadre de la vente en ligne des produits proposés par Lullaby (chouchous, bandeaux et accessoires capillaires inclusifs) sur le site web officiel de la marque, accessible à l'adresse www.lullaby.boutique.com
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Produits</h2>
          <p>
            Les produits proposés à la vente par Lullaby sont des accessoires capillaires tels que des chouchous, bandeaux et autres produits destinés à toutes les personnes, sans distinction de genre, de type de cheveux, ou de style. La marque met un accent particulier sur l'inclusivité et la diversité des besoins capillaires.
          </p>
          <p className="mt-4">
            Les caractéristiques principales de chaque produit sont décrites sur la fiche produit respective, disponible sur le site internet.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Commandes</h2>
          <p>
            Pour passer commande, le client doit créer un compte ou acheter en tant qu'invité, en renseignant ses coordonnées complètes et exactes. L'acceptation de la commande par DUNE - Design Universel est confirmée par l'envoi d'un e-mail de confirmation.
          </p>
          <p className="mt-4">
            Le client est responsable de la véracité des informations communiquées lors de la commande. En cas d'erreur dans les informations fournies, la société ne pourra être tenue responsable d'éventuels retards ou erreurs dans la livraison.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Prix</h2>
          <p>
            Les prix des produits sont indiqués en euros, toutes taxes comprises (TTC), sauf mention contraire. Les frais de livraison, si applicables, seront précisés lors de la commande et ajoutés au montant total de la commande.
          </p>
          <p className="mt-4">
            DUNE - Design Universel se réserve le droit de modifier ses prix à tout moment, sans préavis. Toutefois, les produits seront facturés sur la base des tarifs en vigueur au moment de l'enregistrement de la commande.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Paiement</h2>
          <p>
            Le paiement des produits se fait exclusivement en ligne par carte bancaire, via une plateforme sécurisée.
          </p>
          <p className="mt-4">
            Le montant total de la commande sera débité du compte du client au moment de la validation de la commande. En cas de refus de paiement, la commande sera annulée.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. Livraison</h2>
          <p>
            Les produits sont livrés à l'adresse indiquée par le client lors de la commande. Les frais de livraison sont à la charge du client, sauf promotion spécifique indiquée sur le site.
          </p>
          <p className="mt-4">
            Les délais de livraison sont estimatifs et varient en fonction du mode de livraison choisi. DUNE - Design Universel ne peut être tenu responsable des retards dus à des événements indépendants de sa volonté (grèves, intempéries, etc.).
          </p>
          <p className="mt-4">
            En cas de livraison à l'international, des frais de douane ou autres taxes peuvent être applicables et seront à la charge du client.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">7. Droit de rétractation</h2>
          <p>
            Conformément à l'article L221-18 du Code de la consommation, le client dispose d'un délai de 14 jours calendaires à compter de la réception de sa commande pour exercer son droit de rétractation, sans avoir à justifier de motif ni à payer de pénalités.
          </p>
          <p className="mt-4">
            Le produit doit être retourné dans son état et son emballage d'origine, non utilisé et en parfait état de revente. Les frais de retour sont à la charge du client, sauf si un accord particulier a été conclu.
          </p>
          <p className="mt-4">
            DUNE - Design Universel s'engage à rembourser le client dans un délai de 14 jours suivant la réception du produit retourné.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">8. Garantie et Retours</h2>
          <p>
            Tous les produits vendus par Lullaby bénéficient de la garantie légale de conformité (articles L217-4 à L217-14 du Code de la consommation) et de la garantie des vices cachés (articles 1641 à 1649 du Code civil).
          </p>
          <p className="mt-4">
            Si le produit est défectueux, le client peut demander un remplacement ou un remboursement. La demande doit être effectuée dans un délai de 30 jours à compter de la réception du produit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">9. Responsabilité</h2>
          <p>
            DUNE - Design Universel ne pourra être tenu responsable des dommages directs ou indirects résultant de l'utilisation des produits vendus sur son site, sauf si ces dommages sont causés par une négligence grave ou une faute intentionnelle de la part de l'entreprise.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">10. Protection des données personnelles</h2>
          <p>
            Les informations collectées lors de la commande sont nécessaires pour le traitement et l'expédition des commandes. Ces données sont exclusivement utilisées par DUNE - Design Universel et ne seront pas transmises à des tiers, sauf en cas de nécessité pour la livraison.
          </p>
          <p className="mt-4">
            Conformément à la loi Informatique et Libertés du 6 janvier 1978, le client dispose d'un droit d'accès, de rectification et de suppression des données le concernant, en adressant une demande à l'adresse email de contact.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">11. Propriété intellectuelle</h2>
          <p>
            Tous les éléments du site Lullaby (textes, images, logos, etc.) sont protégés par des droits de propriété intellectuelle et sont la propriété exclusive de DUNE - Design Universel. Toute reproduction ou représentation, totale ou partielle, est interdite sans l'autorisation préalable de l'entreprise.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">12. Force majeure</h2>
          <p>
            DUNE - Design Universel ne pourra être tenue responsable de l'inexécution ou du retard dans l'exécution de l'une de ses obligations si cette inexécution résulte d'un événement de force majeure, tel que défini par la jurisprudence des tribunaux français.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">13. Loi applicable et règlement des litiges</h2>
          <p>
            Les présentes CGV sont soumises à la loi française. En cas de litige, les parties s'efforceront de résoudre leur différend à l'amiable. Si aucune solution amiable n'est trouvée, le litige sera soumis aux juridictions compétentes, à moins qu'une autre compétence territoriale ne soit applicable en vertu de la loi.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p>
            Pour toute question concernant les présentes Conditions Générales de Vente, vous pouvez contacter DUNE - Design Universel à l'adresse suivante :
          </p>
          <p className="mt-4">
            <strong>Email :</strong> contact@dunedesignuniversel.com
          </p>
        </section>
      </div>
    </main>
  );
}