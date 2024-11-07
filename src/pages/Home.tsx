import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

type Category = 'all' | 'chouchous' | 'bandeaux' | 'coffrets';

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (id: number) => {
    setCartCount(prev => prev + 1);
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products.slice(0, 6) 
    : products.filter(product => product.category === selectedCategory).slice(0, 6);

  return (
    <main className="flex-1">
      <section className="mb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div 
            className="rounded-2xl relative overflow-hidden"
            style={{ minHeight: '400px' }}
          >
            {/* Background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: 'url("https://i.imgur.com/Clr7XF8.jpg")',
              }}
            />
            
            {/* Beige overlay */}
            <div 
              className="absolute inset-0" 
              style={{ backgroundColor: 'rgba(245, 240, 235, 0.82)' }}
            />
            
            {/* Content */}
            <div className="relative z-10 p-12 text-center">
              <img 
                src="https://i.imgur.com/4TKJN4a.png" 
                alt="Lullaby"
                className="h-24 w-auto mx-auto mb-4" 
              />
              <p className="text-xl mb-8 max-w-md mx-auto text-gray-700">
                6 nouveaux accessoires innovants et inclusifs.
              </p>
              <Link 
                to="/shop"
                className="inline-block bg-lullaby-primary text-white px-8 py-3 rounded-full font-medium hover:bg-lullaby-dark transition-colors"
              >
                Découvrir la collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Nos Favoris</h2>
          <div className="flex gap-2">
            {[
              { id: 'all', label: 'Tout' },
              { id: 'chouchous', label: 'Chouchous' },
              { id: 'bandeaux', label: 'Bandeaux' },
              { id: 'coffrets', label: 'Coffrets' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedCategory(filter.id as Category)}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  selectedCategory === filter.id
                    ? 'bg-lullaby-primary text-white'
                    : 'bg-white hover:bg-lullaby-primary/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/shop"
            className="inline-block px-6 py-2 border-2 border-lullaby-primary text-lullaby-primary rounded-full hover:bg-lullaby-primary hover:text-white transition-colors"
          >
            Voir toute la collection
          </Link>
        </div>
      </section>
    </main>
  );
}