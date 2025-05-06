import React, { useState } from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import BlogCard from '../components/BlogCard';
import { Search, Tag, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample blog categories
const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'farming', name: 'Farming Tips' },
  { id: 'sustainability', name: 'Sustainability' },
  { id: 'recipes', name: 'Seasonal Recipes' },
  { id: 'community', name: 'Community' },
  { id: 'education', name: 'Education' }
];

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: 'The Benefits of Organic Farming for the Environment',
    excerpt: 'Discover how organic farming practices help protect biodiversity, improve soil health, and reduce pollution.',
    date: 'May 15, 2025',
    author: 'Shriya Mishra ',
    image: 'https://images.pexels.com/photos/2321837/pexels-photo-2321837.jpeg',
    category: 'sustainability',
    slug: 'benefits-organic-farming-environment'
  },
  {
    id: 2,
    title: 'Seasonal Planting Guide: What to Grow This Summer',
    excerpt: 'Our comprehensive guide to the best crops to plant this summer for a bountiful harvest.',
    date: 'April 28, 2025',
    author: 'Rishav Kumar',
    image: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg',
    category: 'farming',
    slug: 'seasonal-planting-guide-summer'
  },
  {
    id: 3,
    title: 'From Farm to Table: The Journey of Our Organic Produce',
    excerpt: 'Follow the journey of our organic produce from planting to harvesting to your table.',
    date: 'April 10, 2025',
    author: 'Subham Das',
    image: 'https://images.pexels.com/photos/3629537/pexels-photo-3629537.jpeg',
    category: 'farming',
    slug: 'farm-to-table-journey'
  },
  {
    id: 4,
    title: 'Summer Recipes: Making the Most of Your CSA Box',
    excerpt: 'Delicious recipes to help you make the most of the seasonal produce in your summer CSA box.',
    date: 'March 22, 2025',
    author: 'Saransh Ray',
    image: 'https://images.pexels.com/photos/5966431/pexels-photo-5966431.jpeg',
    category: 'recipes',
    slug: 'summer-recipes-csa-box'
  },
  {
    id: 5,
    title: 'Community Gardens: Building Stronger Neighborhoods',
    excerpt: 'How community gardens are helping to build stronger, more resilient communities and improve food security.',
    date: 'March 15, 2025',
    author: 'Sumit Singh',
    image: 'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg',
    category: 'community',
    slug: 'community-gardens-stronger-neighborhoods'
  },
  {
    id: 6,
    title: 'Teaching Children About Sustainable Agriculture',
    excerpt: 'Tips and resources for teaching children about sustainable agriculture and the importance of local food systems.',
    date: 'February 28, 2025',
    author: 'snaha Kumari',
    image: 'https://images.pexels.com/photos/6157246/pexels-photo-6157246.jpeg',
    category: 'education',
    slug: 'teaching-children-sustainable-agriculture'
  }
];

// Recent posts for sidebar
const recentPosts = blogPosts.slice(0, 3);

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && (searchQuery === '' || matchesSearch);
  });
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };
  
  return (
    <div>
      <Hero 
        title="Our Blog"
        subtitle="Latest News & Articles"
        description="Stay updated with the latest news, farming tips, seasonal recipes, and stories from our farm."
        backgroundImage="https://images.pexels.com/photos/7407288/pexels-photo-7407288.jpeg"
        showCta={false}
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Farm Fresh Blog"
            title="News & Insights"
            description="Explore our collection of articles covering sustainable farming, seasonal recipes, and agricultural tips."
            centered
          />
          
          <div className="flex flex-col lg:flex-row gap-8 mt-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Category Filter - Mobile */}
              <div className="lg:hidden mb-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${
                          selectedCategory === category.id 
                            ? 'bg-[#155724] text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Search - Mobile */}
              <div className="lg:hidden mb-8">
                <form onSubmit={handleSearch} className="flex">
                  <input 
                    type="text"
                    placeholder="Search articles..."
                    className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#155724]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button 
                    type="submit"
                    className="bg-[#155724] text-white px-4 py-3 rounded-r-lg"
                  >
                    <Search size={20} />
                  </button>
                </form>
              </div>
              
              {/* Blog Posts */}
              {filteredPosts.length === 0 ? (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-bold mb-2">No Articles Found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any articles matching your search criteria. Please try a different search term or category.
                  </p>
                  <button
                    className="text-[#155724] font-medium hover:underline"
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchQuery('');
                    }}
                  >
                    View All Articles
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, index) => (
                    <BlogCard 
                      key={post.id}
                      image={post.image}
                      title={post.title}
                      excerpt={post.excerpt}
                      date={post.date}
                      author={post.author}
                      slug={post.slug}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
              )}
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="inline-flex">
                  <a 
                    href="#"
                    className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a 
                    href="#"
                    className="px-4 py-2 border-t border-b border-gray-300 bg-[#155724] text-white"
                  >
                    1
                  </a>
                  <a 
                    href="#"
                    className="px-4 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                  >
                    2
                  </a>
                  <a 
                    href="#"
                    className="px-4 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                  >
                    3
                  </a>
                  <a 
                    href="#"
                    className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                  >
                    Next
                  </a>
                </nav>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="space-y-8">
                {/* Search */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold mb-4">Search</h3>
                  <form onSubmit={handleSearch} className="flex">
                    <input 
                      type="text"
                      placeholder="Search articles..."
                      className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#155724]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button 
                      type="submit"
                      className="bg-[#155724] text-white px-4 py-2 rounded-r-lg"
                    >
                      <Search size={18} />
                    </button>
                  </form>
                </div>
                
                {/* Categories */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold mb-4 flex items-center">
                    <Tag size={18} className="mr-2" />
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {categories.map(category => (
                      <li key={category.id}>
                        <button
                          className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                            selectedCategory === category.id 
                              ? 'bg-[#155724] text-white' 
                              : 'hover:bg-gray-100 text-gray-700'
                          }`}
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          {category.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Recent Posts */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold mb-4 flex items-center">
                    <Calendar size={18} className="mr-2" />
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map(post => (
                      <div key={post.id} className="flex">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-20 h-20 object-cover rounded-md mr-4" 
                        />
                        <div>
                          <h4 className="font-medium hover:text-[#155724] transition-colors">
                            <a href={`/blog/${post.slug}`}>{post.title}</a>
                          </h4>
                          <p className="text-sm text-gray-500">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Newsletter */}
                <div className="bg-[#155724] text-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="mb-4 text-gray-200">
                    Stay updated with our latest articles, farming tips, and seasonal recipes.
                  </p>
                  <form className="space-y-4">
                    <input 
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F4B84A]"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#F4B84A] hover:bg-[#d9a43d] text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
                
                {/* Tags */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <a href="#" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">Organic</a>
                    <a href="#" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">Sustainability</a>
                    <a href="#" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">Farming</a>
                    <a href="#" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">Recipes</a>
                    <a href="#" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">Gardening</a>
                    <a href="#" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">Seasonal</a>
                    <a href="#" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">Health</a>
                    <a href="#" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">Community</a>
                  </div>
                </div>
                
                {/* Author */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold mb-4 flex items-center">
                    <User size={18} className="mr-2" />
                    Featured Author
                  </h3>
                  <div className="flex items-center">
                    <img 
                      src="src/pages/qqq.jpg" 
                      alt="Amitab Dubey"
                      className="w-16 h-16 rounded-full object-cover mr-4" 
                    />
                    <div>
                      <h4 className="font-medium">John Smith</h4>
                      <p className="text-sm text-gray-500">Lead Agronomist</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    John has over 5 years of experience in organic farming and sustainable agriculture practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;