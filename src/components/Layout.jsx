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
  ];

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/30 text-amber-950 font-sans selection:bg-amber-200">
      <nav className="fixed w-full z-50 bg-amber-50/90 backdrop-blur-md border-b border-amber-200">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex justify-between h-24 items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <Coffee className="h-10 w-10 text-amber-700 transition-transform group-hover:rotate-12" />
              <span className="text-4xl font-bold tracking-tighter font-handwritten text-amber-800">High Chai</span>
            </Link>

            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-base font-semibold transition-colors hover:text-amber-700 ${
                    location.pathname === link.path ? 'text-amber-700' : 'text-amber-900/70'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 top-full block h-0.5 w-full bg-amber-700 mt-1"
                    />
                  )}
                </Link>
              ))}
              <button className="bg-gradient-to-r from-amber-800 to-orange-700 text-white px-6 py-3 rounded-full text-base font-bold hover:from-amber-900 hover:to-orange-800 transition-colors flex items-center gap-2">
                <ShoppingBag size={18} />
                Buy Now
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-amber-900">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
              className="md:hidden border-t border-amber-200 bg-amber-50 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-amber-900 hover:text-amber-700"
                  >
                    {link.label}
                  </Link>
                ))}
                <button className="w-full bg-gradient-to-r from-amber-800 to-orange-700 text-white px-4 py-3 rounded-xl text-lg font-medium hover:from-amber-900 hover:to-orange-800 transition-colors">
                  Buy Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow pt-24">
        {children}
      </main>

      <footer className="bg-gradient-to-br from-amber-950 via-orange-950 to-amber-950 text-amber-300/70 py-12">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 text-amber-100 mb-4">
              <Coffee className="h-6 w-6" />
              <span className="text-2xl font-bold font-handwritten">High Chai</span>
            </div>
            <p className="text-sm">
              The legal high you can sip. FDA approved relaxation in every cup.
            </p>
          </div>
          <div>
            <h3 className="text-amber-100 font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/product" className="hover:text-amber-100">The Blend</Link></li>
              <li><Link to="/" className="hover:text-amber-100">Safety</Link></li>
              <li><Link to="/testimonials" className="hover:text-amber-100">Reviews</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-amber-100 font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-amber-100">About Us</Link></li>
              <li><a href="/about#contact-section" className="hover:text-amber-100">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-amber-100 font-bold mb-4">Newsletter</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-amber-900/50 border-none rounded-lg px-3 py-2 text-sm w-full focus:ring-1 focus:ring-amber-600 text-amber-100 placeholder:text-amber-400/50"
              />
              <button className="bg-amber-700 text-white p-2 rounded-lg hover:bg-amber-600">
                →
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-8 lg:px-12 mt-12 pt-8 border-t border-amber-900/50 text-xs text-center">
          © 2026 High Chai. FDA Approved. Please drink responsibly.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
