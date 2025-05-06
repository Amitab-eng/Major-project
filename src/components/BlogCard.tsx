import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  delay?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  image, 
  title, 
  excerpt, 
  date, 
  author, 
  slug,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow"
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-56 object-cover transition-transform group-hover:scale-105" 
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="flex items-center mr-4">
            <Calendar size={16} className="mr-1" />
            {date}
          </span>
          <span className="flex items-center">
            <User size={16} className="mr-1" />
            {author}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-[#155724] transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        
        <p className="text-gray-600 mb-4">{excerpt}</p>
        
        <Link 
          to={`/blog/${slug}`}
          className="inline-flex items-center text-[#155724] font-medium group-hover:text-[#F4B84A] transition-colors"
        >
          Read More
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;