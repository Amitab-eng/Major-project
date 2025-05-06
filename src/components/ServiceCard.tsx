import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  link,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-lg shadow-md group hover:shadow-xl transition-shadow"
    >
      <div className="bg-[#155724] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#F4B84A] transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-[#155724] transition-colors">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link} className="inline-flex items-center text-[#155724] font-medium group-hover:text-[#F4B84A] transition-colors">
        Learn More
        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;