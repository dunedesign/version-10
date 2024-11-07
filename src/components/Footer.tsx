import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setStatus('loading');
    
    try {
      const response = await fetch('https://api.kit.co/v1/lists/_eU1Wl4KxsOPl6zpgs-D3w/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer _eU1Wl4KxsOPl6zpgs-D3w'
        },
        body: JSON.stringify({ 
          email,
          doubleOptIn: false,
          source: 'website'
        })
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'inscription');
      }

      setStatus('success');
      setMessage('Merci pour votre inscription !');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Une erreur est survenue. Veuillez réessayer.');
      console.error('Newsletter error:', error);
    }
  };

  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="block mb-6">
              <img 
                src="https://i.imgur.com/4TKJN4a.png" 
                alt="Lullaby"
                className="h-12 w-auto" 
              />
            </Link>
            <p className="text-gray-600">6 nouveaux accessoires innovants et inclusifs.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-600 hover:text-lullaby-primary">Contact</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-lullaby-primary">Conditions Générales de Vente</Link></li>
              <li><Link to="/legal" className="text-gray-600 hover:text-lullaby-primary">Mentions légales</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-lullaby-primary">Cookies</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Inscrivez-vous pour recevoir nos offres</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-lullaby-light"
                  disabled={status === 'loading'}
                />
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    status === 'loading'
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-lullaby-primary text-white hover:bg-lullaby-dark'
                  }`}
                >
                  {status === 'loading' ? 'Envoi...' : 'S\'inscrire'}
                </button>
              </div>
              {message && (
                <p className={`text-sm ${
                  status === 'success' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          © {new Date().getFullYear()} Lullaby. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}