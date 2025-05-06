import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingCart, Search, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { name: 'Home', path: '/', hasDropdown: true },
    { name: 'About', path: '/about', hasDropdown: false },
    { name: 'Services', path: '/services', hasDropdown: false },
    { name: 'Shop', path: '/shop', hasDropdown: false },
    { name: 'Portfolio', path: '/portfolio', hasDropdown: false },
    { name: 'Blog', path: '/blog', hasDropdown: false },
    { name: 'Contact', path: '/contact', hasDropdown: false }
  ];

  return (
    <nav className={`sticky top-0 z-50 bg-white shadow transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group" 
                onMouseEnter={() => link.name === 'Home' && setHomeDropdownOpen(true)}
                onMouseLeave={() => link.name === 'Home' && setHomeDropdownOpen(false)}>
                <Link 
                  to={link.path} 
                  className={`font-medium hover:text-[#155724] transition-colors ${location.pathname === link.path ? 'text-[#155724]' : 'text-gray-800'}`}
                >
                  <div className="flex items-center">
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={16} className="ml-1" />}
                  </div>
                </Link>
                
                {link.name === 'Home' && homeDropdownOpen && (
                  <div className="absolute z-10 left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home 1</Link>
                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home 2</Link>
                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home 3</Link>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={toggleSearch}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            <Link to="/shop" className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-[#F4B84A] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </Link>
            
            <Link 
              to="/contact"
              className="hidden md:block bg-[#155724] hover:bg-[#0d3518] text-white px-6 py-2 rounded-full transition-colors"
            >
              Get In Touch!
            </Link>
            
            <button 
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="py-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="block mx-4 my-3 bg-[#155724] hover:bg-[#0d3518] text-white px-4 py-2 rounded-md text-center transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get In Touch!
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-lg w-full max-w-2xl p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <form className="flex items-center">
                <input 
                  type="text"
                  placeholder="Search for products, services..."
                  className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#155724]"
                />
                <button 
                  type="submit"
                  className="bg-[#155724] hover:bg-[#0d3518] text-white p-3 rounded-r-lg transition-colors"
                >
                  <Search size={20} />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;