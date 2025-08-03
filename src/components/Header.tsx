import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-2 bg-background/80 backdrop-blur-lg shadow-md"
            : "py-4 bg-transparent"
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
              <span
                className={`transition-all ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                QuantaMind
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition"
            >
              About
            </Link>
            <Link
              to="/technology"
              className="text-gray-300 hover:text-white transition"
            >
              How it works
            </Link>
            <Link
              to="/features"
              className="text-gray-300 hover:text-white transition"
            >
              Features
            </Link>
            <Link
              to="/product"
              className="text-gray-300 hover:text-white transition"
            >
              Product
            </Link>
            <Link
              to="/pricing"
              className="text-gray-300 hover:text-white transition"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-300">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{user.userId}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={logout}
                  className="text-gray-300 hover:text-white"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-gray-300 hover:text-white"
                >
                  <Link to="/login">Login</Link>
                </Button>
                <Button
                  size="sm"
                  asChild
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link to="/register">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>

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
              to="/technology"
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it works
            </Link>
            <Link
              to="/features"
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/product"
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              to="/pricing"
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Auth Section */}
            <div className="border-t border-white/10 pt-8 flex flex-col space-y-4">
              {user ? (
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 text-gray-300 mb-4">
                    <User className="w-5 h-5" />
                    <span>{user.userId}</span>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-gray-300 hover:text-white"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col space-y-4">
                  <Button
                    variant="ghost"
                    asChild
                    className="text-gray-300 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link to="/register">Sign Up</Link>
                  </Button>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
