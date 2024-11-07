import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';

export function CheckoutSuccess() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('checkout_reference');

  useEffect(() => {
    // Ici, vous pourriez implémenter une logique pour :
    // 1. Vérifier le statut du paiement avec l'API SumUp
    // 2. Mettre à jour le statut de la commande dans votre système
    // 3. Envoyer un email de confirmation
    // 4. Vider le panier
  }, [orderId]);

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Merci pour votre commande !
        </h1>
        
        <p className="text-gray-600 mb-8">
          Votre paiement a été confirmé et votre commande est en cours de traitement.
          {orderId && <span className="block mt-2">Numéro de commande : {orderId}</span>}
        </p>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-center text-gray-600 mb-4">
            <Package className="w-5 h-5 mr-2" />
            <span>Prochaines étapes</span>
          </div>
          
          <ol className="space-y-4 text-left">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-lullaby-primary/10 rounded-full flex items-center justify-center text-lullaby-primary font-medium">
                1
              </span>
              <div className="ml-4">
                <h3 className="font-medium text-gray-900">Confirmation par email</h3>
                <p className="text-gray-600">
                  Vous allez recevoir un email de confirmation avec les détails de votre commande.
                </p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-lullaby-primary/10 rounded-full flex items-center justify-center text-lullaby-primary font-medium">
                2
              </span>
              <div className="ml-4">
                <h3 className="font-medium text-gray-900">Préparation de la commande</h3>
                <p className="text-gray-600">
                  Nous allons préparer votre commande avec le plus grand soin.
                </p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-lullaby-primary/10 rounded-full flex items-center justify-center text-lullaby-primary font-medium">
                3
              </span>
              <div className="ml-4">
                <h3 className="font-medium text-gray-900">Expédition</h3>
                <p className="text-gray-600">
                  Vous recevrez un email avec le numéro de suivi dès que votre commande sera expédiée.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <Link
          to="/shop"
          className="inline-flex items-center justify-center px-8 py-3 bg-lullaby-primary text-white rounded-lg hover:bg-lullaby-dark transition-colors"
        >
          Continuer mes achats
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </main>
  );
}