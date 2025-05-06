import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { Wheat, Leaf, Droplets, Truck, Tractor, Users, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <div>
      <Hero 
        title="Our Services"
        subtitle="What We Offer"
        description="Discover our comprehensive range of agricultural services focused on organic farming and sustainability."
        backgroundImage="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg"
        showCta={false}
      />
      
      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Our Services"
            title="Comprehensive Organic Farming Solutions"
            description="We provide a wide range of services to support sustainable agriculture and help farmers transition to organic practices."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ServiceItem 
              icon={<Wheat size={24} />}
              title="Organic Crop Production"
              description="We grow a diverse range of organic crops using sustainable farming methods that preserve soil health and biodiversity."
              delay={0.1}
            />
            
            <ServiceItem 
              icon={<Leaf size={24} />}
              title="Agricultural Consulting"
              description="Our team of experts provides guidance on transitioning to organic farming, sustainable practices, and certification requirements."
              delay={0.2}
            />
            
            <ServiceItem 
              icon={<Droplets size={24} />}
              title="Irrigation Solutions"
              description="We design and implement efficient irrigation systems that conserve water while ensuring optimal crop growth and yield."
              delay={0.3}
            />
            
            <ServiceItem 
              icon={<Truck size={24} />}
              title="Farm to Table Distribution"
              description="We offer direct delivery services to bring fresh, organic produce from our farm straight to your door."
              delay={0.4}
            />
            
            <ServiceItem 
              icon={<Tractor size={24} />}
              title="Equipment Leasing"
              description="Access to specialized organic farming equipment without the high cost of ownership through our flexible leasing programs."
              delay={0.5}
            />
            
            <ServiceItem 
              icon={<BookOpen size={24} />}
              title="Educational Programs"
              description="We offer workshops, farm tours, and training sessions to educate farmers and the community about sustainable agriculture."
              delay={0.6}
            />
          </div>
        </div>
      </section>
      
      {/* Featured Service 1 */}
      <FeaturedService 
        title="Organic Crop Production"
        description="Our organic crop production follows strict standards to ensure the highest quality produce while preserving and enhancing the natural environment."
        image="src/Harvest-Time-Farm-Fresh-FarmerDaughterStand-14.jpg"
        features={[
          "Certified organic seeds and inputs",
          "Crop rotation for soil health",
          "Natural pest management solutions",
          "Hand harvesting for quality control",
          "Minimal processing to preserve nutrients"
        ]}
        imageLeft={true}
      />
      
      {/* Featured Service 2 */}
      <FeaturedService 
        title="Agricultural Consulting"
        description="Our consulting services help farmers transition to organic practices, improve efficiency, and achieve certification while maintaining profitability."
        image="src/pages/hoovers-farm-market-header.jpg"
        features={[
          "Transition planning to organic certification",
          "Soil health assessment and improvement",
          "Integrated pest management strategies",
          "Water conservation techniques",
          "Business planning and market development"
        ]}
        imageLeft={false}
      />
      
      {/* Featured Service 3 */}
      <FeaturedService 
        title="Educational Programs"
        description="We believe in sharing knowledge and empowering the next generation of sustainable farmers through our comprehensive educational programs."
        image="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg"
        features={[
          "Hands-on workshops for all ages",
          "Farm tours and field demonstrations",
          "Internship and apprenticeship opportunities",
          "School programs and youth engagement",
          "Online resources and webinars"
        ]}
        imageLeft={true}
      />
      
      {/* Community Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Community Programs"
            title="Supporting Local Communities"
            description="We are committed to making organic food accessible to all and supporting the local food ecosystem."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-[#155724] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Supported Agriculture (CSA)</h3>
              <p className="text-gray-600 mb-4">
                Our CSA program connects you directly with our farm. Members receive a weekly share of fresh, seasonal produce throughout the growing season.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#155724] mr-2">✓</span>
                  <span>Weekly or bi-weekly delivery options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#155724] mr-2">✓</span>
                  <span>Flexible share sizes to fit your household</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#155724] mr-2">✓</span>
                  <span>Add-on options for eggs, honey, and more</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#155724] mr-2">✓</span>
                  <span>Recipes and tips included with each delivery</span>
                </li>
              </ul>
              <a 
                href="/contact" 
                className="inline-flex items-center text-[#155724] font-medium hover:text-[#0d3518] transition-colors"
              >
                Join Our CSA Program
                <ArrowRight size={16} className="ml-2" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-[#155724] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Truck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Food Donation Program</h3>
              <p className="text-gray-600 mb-4">
                We believe everyone deserves access to fresh, nutritious food. Our donation program works to address food insecurity in our community.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#155724] mr-2">✓</span>
                  <span>Regular donations to local food banks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#155724] mr-2">✓</span>
                  <span>Gleaning program to reduce food waste</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#155724] mr-2">✓</span>
                  <span>Subsidized CSA shares for low-income families</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#155724] mr-2">✓</span>
                  <span>Volunteer opportunities for community members</span>
                </li>
              </ul>
              <a 
                href="/contact" 
                className="inline-flex items-center text-[#155724] font-medium hover:text-[#0d3518] transition-colors"
              >
                Support Our Food Donation Program
                <ArrowRight size={16} className="ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(21, 87, 36, 0.85), rgba(21, 87, 36, 0.85)), url(https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg)' }}>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to get started?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Contact us today to learn more about our services and how we can help you achieve your agricultural goals.
            </p>
            
            <a 
              href="/contact" 
              className="bg-[#F4B84A] hover:bg-[#d9a43d] text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center justify-center"
            >
              Get In Touch
              <ArrowRight size={18} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="bg-[#155724] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

interface FeaturedServiceProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  imageLeft: boolean;
}

const FeaturedService: React.FC<FeaturedServiceProps> = ({ 
  title, 
  description, 
  image, 
  features,
  imageLeft
}) => {
  return (
    <section className={`py-20 ${!imageLeft ? 'bg-gray-50' : ''}`}>
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!imageLeft ? 'lg:grid-flow-dense' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: imageLeft ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={!imageLeft ? 'lg:col-start-2' : ''}
          >
            <img 
              src={image} 
              alt={title}
              className="rounded-lg shadow-xl w-full h-auto" 
            />
          </motion.div>
          
          <div>
            <SectionTitle 
              subtitle="Featured Service"
              title={title}
              description={description}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-[#155724] text-white p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="/contact" 
                className="inline-flex items-center bg-[#155724] hover:bg-[#0d3518] text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Learn More
                <ArrowRight size={18} className="ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;