import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  oldPrice?: number;
  isOrganic?: boolean;
  delay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  image, 
  name, 
  price, 
  oldPrice, 
  isOrganic = true,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden group-hover:shadow-xl transition-shadow">
        <div className="relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-64 object-cover transition-transform group-hover:scale-105"
          />
          
          {isOrganic && (
            <div className="absolute top-3 left-3 bg-[#155724] text-white px-3 py-1 rounded-full text-sm font-medium">
              Organic
            </div>
          )}
          
          {oldPrice && (
            <div className="absolute top-3 right-3 bg-[#F4B84A] text-white px-3 py-1 rounded-full text-sm font-medium">
              Sale
            </div>
          )}
          
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="flex space-x-2">
              <button className="bg-white p-2 rounded-full hover:bg-[#155724] hover:text-white transition-colors">
                <ShoppingCart size={20} />
              </button>
              <button className="bg-white p-2 rounded-full hover:bg-[#F4B84A] hover:text-white transition-colors">
                <Heart size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2 group-hover:text-[#155724] transition-colors">{name}</h3>
          <div className="flex items-baseline">
            <span className="text-xl font-bold text-[#155724]">₹{price.toFixed(2)}</span>
            {oldPrice && (
              <span className="ml-2 text-gray-400 line-through">₹{oldPrice.toFixed(2)}</span>
            )}
          </div>
          
          <button className="w-full mt-4 bg-[#F4B84A] hover:bg-[#155724] text-white py-2 rounded-md transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;