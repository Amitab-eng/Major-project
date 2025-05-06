import React, { useState } from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { Leaf, Filter, ChevronDown, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Product categories
const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'vegetables', name: 'Vegetables' },
  { id: 'fruits', name: 'Fruits' },
  { id: 'dairy', name: 'Dairy & Eggs' },
  { id: 'herbs', name: 'Herbs & Spices' },
  { id: 'pantry', name: 'Pantry Items' }
];

// Sample products
const products = [
  {
    id: 1,
    name: 'Organic Carrots',
    price: 70,
    oldPrice: 90,
    category: 'vegetables',
    isOrganic: true,
    image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg'
  },
  {
    id: 2,
    name: 'Fresh Tomatoes',
    price: 30,
    category: 'vegetables',
    isOrganic: true,
    image: 'fresh-tomato.webp'
  },
  {
    id: 3,
    name: 'Organic Strawberries',
    price: 135,
    category: 'fruits',
    isOrganic: true,
    image: 'src/strawberries.jpg'
  },
  {
    id: 4,
    name: 'Organic Apples',
    price: 150,
    category: 'fruits',
    isOrganic: true,
    image: 'Apples-Organic.webp'
  },
  {
    id: 5,
    name: 'Farm Fresh Eggs',
    price: 70,
    category: 'dairy',
    isOrganic: true,
    image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg'
  },
  {
    id: 6,
    name: 'Fresh Basil',
    price: 60,
    category: 'herbs',
    isOrganic: true,
    image: 'basil.jpeg'
  },
  {
    id: 7,
    name: 'Organic Broccoli',
    price: 55,
    category: 'vegetables',
    isOrganic: true,
    image: 'broccoli.jpeg'
  },
  {
    id: 8,
    name: 'Organic Honey',
    price: 225,
    oldPrice: 350,
    category: 'pantry',
    isOrganic: true,
    image: 'src/honey.webp'
  }
];

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
  return (
    <div>
      <Hero 
        title="Shop Our Organic Products"
        subtitle="Farm Fresh Goodness"
        description="Browse our selection of fresh, organic produce and farm products delivered directly from our fields to your table."
        backgroundImage="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg"
        showCta={false}
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Our Products"
            title="Fresh From Our Farm"
            description="We offer a wide range of organic, fresh, and sustainably grown products directly from our farm."
            centered
          />
          
          {/* Filter Section - Mobile */}
          <div className="lg:hidden mb-8">
            <button 
              className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <div className="flex items-center">
                <Filter size={20} className="mr-2" />
                <span>Filter Products</span>
              </div>
              <ChevronDown size={20} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 bg-white p-4 rounded-lg shadow-md"
              >
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        selectedCategory === category.id 
                          ? 'bg-[#155724] text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setIsFilterOpen(false);
                      }}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar - Desktop */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Filter size={20} className="mr-2" />
                  Categories
                </h3>
                
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                        selectedCategory === category.id 
                          ? 'bg-[#155724] text-white' 
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
                
                {selectedCategory !== 'all' && (
                  <button
                    className="mt-4 w-full flex items-center justify-center text-[#155724] text-sm"
                    onClick={() => setSelectedCategory('all')}
                  >
                    <X size={16} className="mr-1" />
                    Clear Filter
                  </button>
                )}
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <Leaf size={48} className="mx-auto text-[#155724] mb-4" />
                  <h3 className="text-xl font-bold mb-2">No Products Found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any products in this category. Please try a different category or check back later.
                  </p>
                  <button
                    className="text-[#155724] font-medium hover:underline"
                    onClick={() => setSelectedCategory('all')}
                  >
                    View All Products
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product, index) => (
                    <ProductCard 
                      key={product.id}
                      image={product.image}
                      name={product.name}
                      price={product.price}
                      oldPrice={product.oldPrice}
                      isOrganic={product.isOrganic}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Farm Share Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg" 
                alt="Farm Share Program"
                className="rounded-lg shadow-xl w-full h-auto" 
              />
            </motion.div>
            
            <div>
              <SectionTitle 
                subtitle="Farm Share Program"
                title="Join Our CSA"
                description="Subscribe to receive a regular box of seasonal, farm-fresh produce delivered directly to your door."
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-gray-600 mb-6">
                  Our Community Supported Agriculture (CSA) program connects you directly with our farm. When you become a member, you receive a weekly or bi-weekly share of the freshest seasonal produce we have to offer.
                </p>
                
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h4 className="text-lg font-bold mb-4">CSA Membership Benefits:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#155724] mr-2">✓</span>
                      <span>Fresh, seasonal produce harvested at peak ripeness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#155724] mr-2">✓</span>
                      <span>Convenient delivery or pickup options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#155724] mr-2">✓</span>
                      <span>Weekly newsletter with recipes and farm updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#155724] mr-2">✓</span>
                      <span>Access to member-only farm events and u-pick opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#155724] mr-2">✓</span>
                      <span>Support local, sustainable agriculture</span>
                    </li>
                  </ul>
                </div>
                
                <a 
                  href="/contact" 
                  className="inline-flex items-center bg-[#155724] hover:bg-[#0d3518] text-white px-6 py-3 rounded-full font-medium transition-colors"
                >
                  Join Our CSA Program
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;