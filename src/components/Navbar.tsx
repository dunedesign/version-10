import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const navigate = useNavigate();
  const { state: { items } } = useCart();
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <header className="sticky top-0 bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-20">
          {/* Left section */}
          <div className="w-1/4 flex items-center gap-4">
            <button className="lg:hidden p-2">
              <Menu className="w-6 h-6" />
            </button>
            <Link to="/" className="flex items-center">
              <img 
                src="https://i.imgur.com/4TKJN4a.png" 
                alt="Lullaby"
                className="h-12 w-auto" 
              />
            </Link>
          </div>
          
          {/* Center section */}
          <div className="flex-1 hidden lg:flex items-center justify-center">
            <nav>
              <ul className="flex gap-16">
                <li>
                  <Link 
                    to="/"
                    className="text-gray-600 hover:text-lullaby-primary transition-colors font-medium"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/shop"
                    className="text-gray-600 hover:text-lullaby-primary transition-colors font-medium"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact"
                    className="text-gray-600 hover:text-lullaby-primary transition-colors font-medium"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right section */}
          <div className="w-1/4 flex items-center justify-end gap-4">
            <div className="relative hidden sm:block">
              <input
                type="search"
                placeholder="Rechercher..."
                className="w-64 pl-10 pr-4 py-2 rounded-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-lullaby-light transition-all"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
            
            <button 
              onClick={() => navigate('/cart')}
              className="relative p-2"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-lullaby-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}