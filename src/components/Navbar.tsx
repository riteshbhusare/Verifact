import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Demo', href: '#demo' },
    { name: 'Blog', href: '#blog' },
    { name: 'About', href: '#about' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-blue-600/95 backdrop-blur-sm shadow-lg' : 'bg-blue-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-white text-xl font-bold">Verifact</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-blue-200 font-medium transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-white">
              <User className="w-4 h-4" />
              <span className="text-sm">{currentUser?.email}</span>
            </div>
            <button 
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-200 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700 rounded-b-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-blue-200 font-medium transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-blue-600 pt-3 mt-3">
                <div className="flex items-center space-x-2 text-white px-3 py-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{currentUser?.email}</span>
                </div>
                <button 
                  onClick={logout}
                  className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;