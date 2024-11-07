import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products, colors } from '../data/products';
import { ShoppingCart, ArrowLeft, Check, Minus, Plus, PlayCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface SelectedProduct {
  id: number;
  quantity: number;
  colors: string[];
}

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);
  const [addedToCart, setAddedToCart] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useCart();

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Produit non trouvé</h1>
        <Link to="/shop" className="text-lullaby-primary hover:underline">
          Retourner à la boutique
        </Link>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  }).format(product.price);

  const isDiscoveryBox = product.id === 7;
  const isPremiumBox = product.id === 8;
  const isBox = isDiscoveryBox || isPremiumBox;
  const requiredSelections = isDiscoveryBox ? 3 : isPremiumBox ? 6 : 0;
  
  const selectableProducts = products.filter(p => 
    p.category === 'chouchous' || p.category === 'bandeaux'
  );

  const totalSelectedQuantity = selectedProducts.reduce((sum, p) => sum + p.quantity, 0);

  const handleAddToCart = () => {
    if (isBox) {
      selectedProducts.forEach(selectedProduct => {
        dispatch({
          type: 'ADD_ITEM',
          payload: {
            productId: selectedProduct.id,
            quantity: selectedProduct.quantity,
            colors: selectedProduct.colors
          }
        });
      });
    } else if (selectedProducts.length > 0) {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          productId: product.id,
          quantity: 1,
          colors: selectedProducts[0].colors
        }
      });
    }
    setAddedToCart(true);
  };

  const handleProductSelection = (productId: number) => {
    setSelectedProducts(prev => {
      const isSelected = prev.find(p => p.id === productId);
      if (isSelected) {
        return prev.filter(p => p.id !== productId);
      }
      return [...prev, { id: productId, quantity: 1, colors: [colors[0].hex] }];
    });
  };

  const updateQuantity = (productId: number, delta: number) => {
    setSelectedProducts(prev => {
      return prev.map(p => {
        if (p.id === productId) {
          const newQuantity = Math.max(1, p.quantity + delta);
          const otherProductsQuantity = totalSelectedQuantity - p.quantity;
          if (otherProductsQuantity + newQuantity > requiredSelections) {
            return p;
          }
          const colors = [...p.colors];
          if (delta > 0) {
            colors.push(p.colors[0]);
          } else if (delta < 0) {
            colors.pop();
          }
          return { ...p, quantity: newQuantity, colors };
        }
        return p;
      });
    });
  };

  const updateColor = (productId: number, colorHex: string, index: number) => {
    setSelectedProducts(prev => 
      prev.map(p => {
        if (p.id === productId) {
          const newColors = [...p.colors];
          newColors[index] = colorHex;
          return { ...p, colors: newColors };
        }
        return p;
      })
    );
  };

  const canAddToCart = !isBox || totalSelectedQuantity === requiredSelections;

  const renderProductDetails = () => {
    switch (product.id) {
      case 1: // Chouchou Ouessane
      case 5: // Bandeau Iliana
        return (
          <ul className="space-y-3 text-gray-600">
            <li>• Fabriqué en France</li>
            <li>• Tissu 96% coton</li>
            <li>• Boutons métalliques dorés</li>
            <li>• Finitions couture main</li>
            <li>• Livraison gratuite en France</li>
          </ul>
        );
      case 2: // Chouchou Lucie
        return (
          <ul className="space-y-3 text-gray-600">
            <li>• Fabriqué en France</li>
            <li>• Tissu 96% coton</li>
            <li>• Aimant puissant</li>
            <li>• Boutons métalliques dorés</li>
            <li>• Finitions couture main</li>
            <li>• Livraison gratuite en France</li>
          </ul>
        );
      case 3: // Chouchou Héloïse
        return (
          <ul className="space-y-3 text-gray-600">
            <li>• Fabriqué en France</li>
            <li>• Tissu 96% coton</li>
            <li>• Pince pratique à clipser</li>
            <li>• Boutons métalliques dorés</li>
            <li>• Finitions couture main</li>
            <li>• Livraison gratuite en France</li>
          </ul>
        );
      case 4: // Chouchou Victoire
        return (
          <ul className="space-y-3 text-gray-600">
            <li>• Fabriqué en France</li>
            <li>• Tissu 96% coton</li>
            <li>• Pinces pratiques à clipser</li>
            <li>• Boutons métalliques dorés</li>
            <li>• Finitions couture main</li>
            <li>• Livraison gratuite en France</li>
          </ul>
        );
      case 6: // Bandeau Inès
        return (
          <ul className="space-y-3 text-gray-600">
            <li>• Fabriqué en France</li>
            <li>• Tissu 96% coton</li>
            <li>• Aimant puissant</li>
            <li>• Pince pratique à clipser</li>
            <li>• Boutons métalliques dorés</li>
            <li>• Finitions couture main</li>
            <li>• Livraison gratuite en France</li>
          </ul>
        );
      case 7: // Coffret découverte
      case 8: // Coffret premium
        return (
          <ul className="space-y-3 text-gray-600">
            <li>• Fabriqué en France</li>
            <li>• Tissu 96% coton</li>
            <li>• Livraison gratuite en France</li>
          </ul>
        );
      default:
        return (
          <ul className="space-y-3 text-gray-600">
            <li>• Fait main en France</li>
            <li>• Matériaux de haute qualité</li>
            <li>• Livraison gratuite en France</li>
          </ul>
        );
    }
  };

  const renderColorSelection = (selectedProduct: SelectedProduct, index: number) => (
    <div className="mt-4 flex flex-wrap gap-2">
      {colors.map((color) => (
        <button
          key={color.hex}
          onClick={() => updateColor(selectedProduct.id, color.hex, index)}
          className={`w-8 h-8 rounded-full border-2 transition-all ${
            selectedProduct.colors[index] === color.hex
              ? 'border-gray-900 scale-110'
              : 'border-transparent hover:border-gray-300'
          }`}
          style={{ backgroundColor: color.hex }}
          title={color.name}
        >
          {selectedProduct.colors[index] === color.hex && (
            <Check className="w-4 h-4 mx-auto text-white" />
          )}
        </button>
      ))}
    </div>
  );

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Link 
        to="/shop" 
        className="inline-flex items-center text-gray-600 hover:text-lullaby-primary mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour à la boutique
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-square rounded-2xl overflow-hidden bg-white">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            {product.videoUrl && (
              <a
                href={product.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-lullaby-primary hover:text-lullaby-dark mb-6"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Voir le tutoriel vidéo
              </a>
            )}
            <p className="text-2xl font-bold text-lullaby-primary">{formattedPrice}</p>
          </div>

          {!isBox && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Couleur</h2>
              <div className="flex flex-wrap gap-3">
                {colors.map((color) => (
                  <button
                    key={color.hex}
                    onClick={() => setSelectedProducts([{ id: product.id, quantity: 1, colors: [color.hex] }])}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedProducts[0]?.colors[0] === color.hex
                        ? 'border-gray-900 scale-110'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {selectedProducts[0]?.colors[0] === color.hex && (
                      <Check className="w-5 h-5 mx-auto text-white" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {isBox && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">
                Sélectionnez vos Lullas (Total: {totalSelectedQuantity}/{requiredSelections})
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {selectableProducts.map((p) => {
                  const selectedProduct = selectedProducts.find(sp => sp.id === p.id);
                  const isSelected = Boolean(selectedProduct);

                  return (
                    <div
                      key={p.id}
                      className={`relative flex flex-col p-4 rounded-lg border-2 transition-all ${
                        isSelected
                          ? 'border-lullaby-primary bg-lullaby-primary/5'
                          : 'border-gray-200 hover:border-lullaby-primary/50'
                      }`}
                    >
                      <div className="flex items-center">
                        <button
                          onClick={() => handleProductSelection(p.id)}
                          className="flex items-center flex-1"
                        >
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-16 h-16 rounded object-cover"
                          />
                          <span className="ml-4 text-left">
                            <span className="block font-medium">{p.name}</span>
                            <span className="text-sm text-gray-500">
                              {p.category === 'chouchous' ? 'Chouchou' : 'Bandeau'}
                            </span>
                          </span>
                        </button>

                        {isSelected && (
                          <div className="flex items-center gap-3 ml-4">
                            <button
                              onClick={() => updateQuantity(p.id, -1)}
                              className="p-1 rounded-full hover:bg-lullaby-primary/10"
                              disabled={selectedProduct.quantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-medium">
                              {selectedProduct.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(p.id, 1)}
                              className="p-1 rounded-full hover:bg-lullaby-primary/10"
                              disabled={totalSelectedQuantity >= requiredSelections}
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>
                      {isSelected && (
                        <div className="mt-4 space-y-4">
                          {Array.from({ length: selectedProduct.quantity }).map((_, index) => (
                            <div key={index} className="border-t pt-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">
                                  Couleur {selectedProduct.quantity > 1 ? `#${index + 1}` : ''}
                                </span>
                              </div>
                              {renderColorSelection(selectedProduct, index)}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-4">
            {!addedToCart ? (
              <button 
                onClick={handleAddToCart}
                className={`flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-colors ${
                  canAddToCart && (isBox || selectedProducts.length > 0)
                    ? 'bg-lullaby-primary text-white hover:bg-lullaby-dark'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!canAddToCart || (!isBox && selectedProducts.length === 0)}
              >
                <ShoppingCart className="w-5 h-5" />
                {isBox && !canAddToCart
                  ? `Sélectionnez encore ${requiredSelections - totalSelectedQuantity} produit${requiredSelections - totalSelectedQuantity > 1 ? 's' : ''}`
                  : !isBox && selectedProducts.length === 0
                  ? 'Sélectionnez une couleur'
                  : 'Ajouter au panier'
                }
              </button>
            ) : (
              <>
                <div className="flex items-center justify-center gap-2 px-8 py-3 bg-green-100 text-green-800 rounded-full">
                  <Check className="w-5 h-5" />
                  Produit ajouté au panier
                </div>
                <button
                  onClick={() => navigate('/cart')}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-lullaby-primary text-white rounded-full hover:bg-lullaby-dark transition-colors"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Finaliser la commande
                </button>
              </>
            )}
          </div>

          <div className="mt-12 border-t pt-8">
            <h2 className="font-semibold text-lg mb-4">Détails du produit</h2>
            {renderProductDetails()}
          </div>
        </div>
      </div>
    </main>
  );
}