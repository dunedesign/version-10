import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  onAddToCart: (id: number) => void;
}

export function ProductCard({ id, name, price, image, onAddToCart }: ProductProps) {
  const formattedPrice = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  }).format(price);

  return (
    <Link 
      to={`/product/${id}`}
      className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden p-3"
    >
      <div className="relative w-full aspect-square mb-3">
        <div className="w-full h-full rounded-full overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-medium text-base text-gray-900">{name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-lullaby-primary">{formattedPrice}</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(id);
            }}
            className="p-1.5 rounded-full bg-lullaby-primary/10 text-lullaby-primary hover:bg-lullaby-primary/20 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}