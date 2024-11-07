import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const SUMUP_API_KEY = 'sup_sk_D5viNOfdrextG71FByxo1iZShr0BvgRVc';
const SUMUP_PUBLIC_KEY = 'sup_pk_XKwi92E0id2NMK35MXVmwKsZOxFU33iQj';

export function Cart() {
  const { state: { items }, dispatch } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const calculateSubtotal = () => {
    return items.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  };

  const shipping = items.length > 0 ? 0 : 0; // Free shipping
  const total = calculateSubtotal() + shipping;

  const handleCheckout = async () => {
    try {
      setIsProcessing(true);

      // Prepare checkout items for SumUp
      const checkoutItems = items.map(item => {
        const product = products.find(p => p.id === item.productId);
        return {
          name: product?.name || '',
          quantity: item.quantity,
          price: product?.price || 0,
        };
      });

      // Create checkout session with SumUp
      const response = await fetch('https://api.sumup.com/v0.1/checkouts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SUMUP_API_KEY}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          checkout_reference: `ORDER_${Date.now()}`,
          amount: total,
          currency: 'EUR',
          description: `Commande Lullaby - ${items.length} article(s)`,
          return_url: `${window.location.origin}/checkout/success`,
          cancel_url: `${window.location.origin}/cart`,
          items: checkoutItems,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la création du checkout');
      }

      const checkoutData = await response.json();
      window.location.href = checkoutData.checkout_url;

    } catch (error) {
      console.error('Erreur de paiement:', error);
      alert('Une erreur est survenue lors de la redirection vers le paiement. Veuillez réessayer.');
    } finally {
      setIsProcessing(false);
    }
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity: newQuantity } });
  };

  const removeItem = (productId: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId } });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Votre panier est vide</h1>
          <p className="text-gray-600 mb-8">
            Découvrez notre collection et ajoutez des articles à votre panier.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-8 py-3 bg-lullaby-primary text-white rounded-lg hover:bg-lullaby-dark transition-colors"
          >
            Continuer mes achats
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <Link 
        to="/shop" 
        className="inline-flex items-center text-gray-600 hover:text-lullaby-primary mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Continuer mes achats
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">Mon Panier</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {items.map(item => {
              const product = products.find(p => p.id === item.productId);
              if (!product) return null;

              return (
                <div 
                  key={`${item.productId}`}
                  className="flex gap-6 p-6 bg-white rounded-xl shadow-sm"
                >
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium text-lg">{product.name}</h3>
                        <div className="flex gap-2 mt-2">
                          {item.colors.map((color, index) => (
                            <div key={index} className="flex items-center text-gray-600 text-sm">
                              {item.quantity > 1 && <span className="mr-1">#{index + 1}:</span>}
                              <span 
                                className="inline-block w-4 h-4 rounded-full" 
                                style={{ backgroundColor: color }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <p className="font-medium">{formatPrice(product.price * item.quantity)}</p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-50"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-50"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.productId)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Résumé de la commande</h2>

            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span>{formatPrice(calculateSubtotal())}</span>
              </div>
              <div className="flex justify-between">
                <span>Livraison</span>
                <span>{shipping === 0 ? 'Gratuite' : formatPrice(shipping)}</span>
              </div>
              <div className="h-px bg-gray-200 my-4"></div>
              <div className="flex justify-between text-lg font-semibold text-gray-900">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            <button 
              onClick={handleCheckout}
              disabled={isProcessing}
              className={`w-full mt-6 px-8 py-4 bg-lullaby-primary text-white rounded-lg transition-colors ${
                isProcessing 
                  ? 'opacity-75 cursor-not-allowed' 
                  : 'hover:bg-lullaby-dark'
              }`}
            >
              {isProcessing ? 'Redirection...' : 'Procéder au paiement'}
            </button>

            <div className="mt-6 text-sm text-gray-500">
              <p>Paiement 100% sécurisé via SumUp</p>
              <p>Livraison gratuite en France métropolitaine</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}