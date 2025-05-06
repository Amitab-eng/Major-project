import React from 'react';
import { Phone, Mail, MapPin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-[#155724] text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="text-sm md:text-base">Welcome to FarmFresh</span>
            <span className="hidden md:inline mx-2">•</span>
            <span className="hidden md:inline text-sm md:text-base">Organic Agriculture & Eco Farming</span>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="hidden md:flex items-center mr-6">
            <Phone size={16} className="mr-2" />
            <span className="text-sm">+91 8582960070</span>
          </div>
          
          <div className="hidden md:flex items-center mr-6">
            <Mail size={16} className="mr-2" />
            <span className="text-sm">amitabdubey33@gmail.com</span>
          </div>
          
          <div className="hidden lg:flex items-center mr-6">
            <MapPin size={16} className="mr-2" />
            <span className="text-sm">123 Farm Road, Countryside</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <a href="#" className="hover:text-[#F4B84A] transition-colors" aria-label="Twitter">
              <Twitter size={16} />
            </a>
            <a href="#" className="hover:text-[#F4B84A] transition-colors" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:text-[#F4B84A] transition-colors" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="hover:text-[#F4B84A] transition-colors" aria-label="Youtube">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;