import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

type Category = 'all' | 'chouchous' | 'bandeaux' | 'coffrets';

const MIN_PRICE = 15.55;
const MAX_PRICE = 85.00;

export function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [priceRange, setPriceRange] = useState(MAX_PRICE);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (id: number) => {
    setCartCount(prev => prev + 1);
  };

  const categories = [
    { id: 'all', label: 'Tout', count: products.length },
    { id: 'chouchous', label: 'Chouchous', count: products.filter(p => p.category === 'chouchous').length },
    { id: 'bandeaux', label: 'Bandeaux', count: products.filter(p => p.category === 'bandeaux').length },
    { id: 'coffrets', label: 'Coffrets', count: products.filter(p => p.category === 'coffrets').length }
  ];

  const filteredProducts = products
    .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
    .filter(product => product.price <= priceRange);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(parseFloat(event.target.value));
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Notre Collection</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez notre sélection d'accessoires élégants et raffinés, 
          conçus pour sublimer votre style au quotidien.
        </p>
      </div>

      <div className="flex gap-8">
        {/* Sidebar with categories */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="font-semibold text-lg mb-4">Catégories</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id as Category)}
                  className={`w-full text-left px-4 py-2 rounded-lg flex justify-between items-center ${
                    selectedCategory === category.id
                      ? 'bg-lullaby-primary text-white'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <span>{category.label}</span>
                  <span className={`text-sm ${
                    selectedCategory === category.id
                      ? 'bg-white text-lullaby-primary'
                      : 'bg-gray-100 text-gray-600'
                  } px-2 py-1 rounded-full`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="font-semibold text-lg mb-4">Prix maximum</h2>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <input
                    type="range"
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    step="0.01"
                    value={priceRange}
                    onChange={handlePriceChange}
                    className="w-full accent-lullaby-primary"
                  />
                  <div className="text-center font-medium text-lullaby-primary">
                    {new Intl.NumberFormat('fr-FR', {
                      style: 'currency',
                      currency: 'EUR'
                    }).format(priceRange)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">Aucun produit ne correspond à vos critères.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}