import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  subtitle, 
  title, 
  description, 
  centered = false,
  light = false
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center mx-auto max-w-2xl' : ''}`}
    >
      <p className={`text-[#F4B84A] font-medium mb-2 ${light ? 'text-[#F4B84A]' : ''}`}>
        {subtitle}
      </p>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-800'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;