
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-2 bg-background/80 backdrop-blur-lg shadow-md' : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold flex items-center gap-3">
              <img 
                src="/lovable-uploads/d97f1fe1-486c-4552-b2ed-9669a0710acf.png" 
                alt="QuantaMind Logo" 
                className="h-12 w-12 object-contain"
              />
              <span className={`transition-all ${isScrolled ? 'text-white' : 'text-white'}`}>QuantaMind</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-300 hover:text-white transition">About</Link>
            {/* <Link to="/product" className="text-gray-300 hover:text-white transition">Product</Link> */}
            <Link to="/technology" className="text-gray-300 hover:text-white transition">How it works</Link>
            <Link to="/features" className="text-gray-300 hover:text-white transition">Features</Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white transition">Pricing</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
          </nav>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-gray-300 p-2"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden pt-16">
          <nav className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/product" 
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Product
            </Link>
            <Link 
              to="/technology" 
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it works
            </Link>
            <a 
              href="/features" 
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="/pricing" 
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
