import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  showCta?: boolean;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  description, 
  backgroundImage,
  showCta = true 
}) => {
  return (
    <div 
      className="relative bg-cover bg-center h-[600px] flex items-center"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#F4B84A] text-lg md:text-xl mb-4"
          >
            {subtitle}
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg mb-8 text-gray-200"
          >
            {description}
          </motion.p>
          
          {showCta && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a 
                href="#services" 
                className="bg-[#155724] hover:bg-[#0d3518] text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center justify-center"
              >
                Our Services
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="/contact" 
                className="bg-transparent hover:bg-white text-white hover:text-[#155724] px-8 py-3 rounded-full font-medium border-2 border-white transition-colors inline-flex items-center justify-center"
              >
                Contact Us
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;