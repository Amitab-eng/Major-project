import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
  rating: number;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  role, 
  image, 
  rating,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      {/* Quote */}
      <p className="text-gray-600 mb-6 italic">"{quote}"</p>
      
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? "text-[#F4B84A] fill-[#F4B84A]" : "text-gray-300"} 
          />
        ))}
      </div>
      
      {/* Author */}
      <div className="flex items-center">
        <img 
          src={image} 
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-medium text-gray-800">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;