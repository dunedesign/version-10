import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setIsVisible(false);
  };

  const openSettings = () => {
    // Implement cookie settings modal if needed
    console.log('Open cookie settings');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="md:flex items-center justify-between gap-8">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">🍪 Nous utilisons des cookies</h3>
            <p className="text-gray-600">
              Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience sur notre site. 
              Vous pouvez choisir d'accepter uniquement les cookies essentiels ou tous les cookies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 whitespace-nowrap">
            <button
              onClick={acceptEssential}
              className="px-6 py-2 border-2 border-lullaby-primary text-lullaby-primary rounded-lg hover:bg-lullaby-primary/10 transition-colors"
            >
              Cookies essentiels uniquement
            </button>
            <button
              onClick={acceptAll}
              className="px-6 py-2 bg-lullaby-primary text-white rounded-lg hover:bg-lullaby-dark transition-colors"
            >
              Accepter tous les cookies
            </button>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          <button onClick={openSettings} className="underline hover:text-lullaby-primary">
            Paramètres des cookies
          </button>
          {' • '}
          <a href="#" className="underline hover:text-lullaby-primary">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </div>
  );
}