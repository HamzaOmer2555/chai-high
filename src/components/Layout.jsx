import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/product', label: 'The Chai' },
    { path: '/about', label: 'Our Story' },
    { path: '/testimonials', label: 'Vibes' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-orange-200">
      <nav className="fixed w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <Coffee className="h-8 w-8 text-orange-600 transition-transform group-hover:rotate-12" />
              <span className="text-2xl font-bold tracking-tighter">HIGH CHAI</span>
            </Link>

            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors hover:text-orange-600 ${
                    location.pathname === link.path ? 'text-orange-600' : 'text-stone-600'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 top-full block h-0.5 w-full bg-orange-600 mt-1"
                    />
                  )}
                </Link>
              ))}
              <button className="bg-stone-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors flex items-center gap-2">
                <ShoppingBag size={16} />
                Buy Now
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-stone-200 bg-stone-50 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-stone-700 hover:text-orange-600"
                  >
                    {link.label}
                  </Link>
                ))}
                <button className="w-full bg-stone-900 text-white px-4 py-3 rounded-xl text-lg font-medium hover:bg-orange-600 transition-colors">
                  Buy Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 text-white mb-4">
              <Coffee className="h-6 w-6" />
              <span className="text-xl font-bold">HIGH CHAI</span>
            </div>
            <p className="text-sm">
              The legal high you can sip. FDA approved relaxation in every cup.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/product" className="hover:text-white">The Blend</Link></li>
              <li><Link to="/faq" className="hover:text-white">Safety</Link></li>
              <li><Link to="/testimonials" className="hover:text-white">Reviews</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Newsletter</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-stone-800 border-none rounded-lg px-3 py-2 text-sm w-full focus:ring-1 focus:ring-orange-500"
              />
              <button className="bg-orange-600 text-white p-2 rounded-lg hover:bg-orange-700">
                →
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-800 text-xs text-center">
          © 2026 High Chai. FDA Approved. Please drink responsibly.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
