import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d3518] text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="mb-6 text-gray-300">
              We are dedicated to providing the highest quality organic produce while using sustainable farming practices that protect our environment and support local communities.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-[#155724] hover:bg-[#F4B84A] p-2 rounded-full transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-[#155724] hover:bg-[#F4B84A] p-2 rounded-full transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-[#155724] hover:bg-[#F4B84A] p-2 rounded-full transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-[#155724] hover:bg-[#F4B84A] p-2 rounded-full transition-colors" aria-label="Youtube">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#F4B84A]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#F4B84A] flex items-center transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#F4B84A] flex items-center transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-[#F4B84A] flex items-center transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-[#F4B84A] flex items-center transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#F4B84A] flex items-center transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative">
              Contact Info
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#F4B84A]"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <Phone size={18} className="mr-3 text-[#F4B84A] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Phone Number</p>
                  <p className="font-medium">+91 8582960070</p>
                </div>
              </li>
              <li className="flex">
                <Mail size={18} className="mr-3 text-[#F4B84A] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Email Address</p>
                  <p className="font-medium">amitabdubey33@gmail.com</p>
                </div>
              </li>
              <li className="flex">
                <MapPin size={18} className="mr-3 text-[#F4B84A] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Office Address</p>
                  <p className="font-medium">123 Farm Road, Countryside</p>
                </div>
              </li>
              <li className="flex">
                <Clock size={18} className="mr-3 text-[#F4B84A] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Working Hours</p>
                  <p className="font-medium">Mon - Fri: 8:00AM - 6:00PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative">
              Newsletter
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#F4B84A]"></span>
            </h3>
            <p className="mb-4 text-gray-300">
              Subscribe to our newsletter to receive the latest updates and offers.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full px-4 py-2 rounded-l-md focus:outline-none text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-[#F4B84A] hover:bg-[#d9a43d] text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
            <p className="text-sm text-gray-400">
              We respect your privacy. Your information is safe with us.
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 FarmFresh. All Rights Reserved.
            </p>
            <div className="flex space-x-4 text-gray-400 text-sm">
              <Link to="/privacy" className="hover:text-[#F4B84A] transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-[#F4B84A] transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-[#F4B84A] transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;