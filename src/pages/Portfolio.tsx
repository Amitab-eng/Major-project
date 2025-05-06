import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const portfolioProjects = [
  {
    id: 1,
    title: 'Organic Vegetable Farm',
    description: 'A 50-acre organic vegetable farm producing a diverse range of seasonal crops using sustainable farming practices.',
    image: 'src/pages/R.jpeg',
    category: 'Farming'
  },
  {
    id: 2,
    title: 'Community Garden Initiative',
    description: 'A collaborative project establishing community gardens in urban areas to promote food security and education.',
    image: 'src/community_garden.jpg',
    category: 'Community'
  },
  {
    id: 3,
    title: 'School Farming Program',
    description: 'An educational program teaching sustainable farming practices to local schools, complete with on-site garden installations.',
    image: 'src/Farming schools.webp',
    category: 'Education'
  },
  {
    id: 4,
    title: 'Water Conservation System',
    description: 'An innovative irrigation system designed to reduce water usage by 40% while maintaining optimal crop growth.',
    image: 'src/water.jpg',
    category: 'Sustainability'
  },
  {
    id: 5,
    title: 'Organic Orchard Restoration',
    description: 'The restoration of a 25-acre heritage apple orchard, converting it to certified organic production.',
    image: 'src/55d5dd_a22e20c0eed74f20aaa16a6a1410f655~mv2.jpg',
    category: 'Farming'
  },
  {
    id: 6,
    title: 'Composting Program',
    description: 'A large-scale composting operation that processes agricultural waste into high-quality organic compost.',
    image: 'src/shutterstock.webp',
    category: 'Sustainability'
  }
];

const Portfolio: React.FC = () => {
  return (
    <div>
      <Hero 
        title="Our Portfolio"
        subtitle="Our Work"
        description="Explore our diverse portfolio of agricultural projects, community initiatives, and sustainable farming solutions."
        backgroundImage="https://images.pexels.com/photos/1600139/pexels-photo-1600139.jpeg"
        showCta={false}
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Featured Projects"
            title="Our Agricultural Portfolio"
            description="Browse through our past and ongoing projects that demonstrate our commitment to sustainable agriculture and community development."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {portfolioProjects.map((project, index) => (
              <PortfolioCard 
                key={project.id}
                {...project}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Our Impact"
            title="Making a Difference"
            description="Through our work, we're creating positive change for farmers, communities, and the environment."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ImpactCard 
              title="Environmental Impact"
              stats={[
                { value: '500+', label: 'Acres of land under sustainable management' },
                { value: '40%', label: 'Reduction in water usage through efficient systems' },
                { value: '75%', label: 'Decrease in chemical inputs across partner farms' }
              ]}
              delay={0.1}
            />
            
            <ImpactCard 
              title="Community Impact"
              stats={[
                { value: '15+', label: 'Community gardens established' },
                { value: '2,500+', label: 'Students reached through educational programs' },
                { value: '30+', label: 'Local farmers supported through training' }
              ]}
              delay={0.2}
            />
            
            <ImpactCard 
              title="Economic Impact"
              stats={[
                { value: '$1.2M+', label: 'Generated for local economy annually' },
                { value: '45+', label: 'Jobs created through our initiatives' },
                { value: '35%', label: 'Average increase in farm profitability' }
              ]}
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* Case Study Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Case Study"
            title="Sustainable Farming Transformation"
            description="A detailed look at how we helped transform a conventional farm into a thriving organic operation."
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg" 
                alt="Case Study"
                className="rounded-lg shadow-xl w-full h-auto" 
              />
            </motion.div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4">Green Valley Farm Transformation</h3>
                
                <p className="text-gray-600 mb-6">
                  Green Valley Farm was a conventional 200-acre operation facing declining soil health and profitability. Working closely with the owners, we developed a comprehensive three-year transition plan to convert the farm to certified organic production.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2">The Challenge</h4>
                    <p className="text-gray-600">
                      The farm faced deteriorating soil health, increasing input costs, and price pressure from commodity markets. The owners wanted to transition to organic but were concerned about maintaining profitability during the conversion period.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-2">Our Approach</h4>
                    <p className="text-gray-600">
                      We implemented a phased transition plan, converting 50 acres each year to minimize risk. We introduced cover cropping, rotational grazing, and natural pest management systems while developing new market channels for their products.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-2">The Results</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-[#155724] mr-2">✓</span>
                        <span>Complete transition to certified organic within 3 years</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#155724] mr-2">✓</span>
                        <span>30% increase in overall farm profitability</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#155724] mr-2">✓</span>
                        <span>Significant improvement in soil organic matter and biodiversity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#155724] mr-2">✓</span>
                        <span>Development of direct-to-consumer sales channels</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <a 
                  href="/contact" 
                  className="inline-flex items-center bg-[#155724] hover:bg-[#0d3518] text-white px-6 py-3 rounded-full font-medium transition-colors"
                >
                  Read Full Case Study
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(21, 87, 36, 0.85), rgba(21, 87, 36, 0.85)), url(https://images.pexels.com/photos/2258248/pexels-photo-2258248.jpeg)' }}>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start your own project?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Whether you're looking to transition to organic farming, improve sustainability, or start a community initiative, we can help bring your vision to life.
            </p>
            
            <a 
              href="/contact" 
              className="bg-[#F4B84A] hover:bg-[#d9a43d] text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight size={18} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  delay?: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ 
  title, 
  description, 
  image, 
  category,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group overflow-hidden rounded-lg shadow-md bg-white"
    >
      <div className="relative overflow-hidden h-60">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute top-0 left-0 m-4">
          <span className="bg-[#155724] text-white px-3 py-1 rounded-full text-sm">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-[#155724] transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href="#" 
          className="inline-flex items-center text-[#155724] font-medium group-hover:text-[#0d3518] transition-colors"
        >
          View Project Details
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

interface ImpactCardProps {
  title: string;
  stats: { value: string; label: string }[];
  delay?: number;
}

const ImpactCard: React.FC<ImpactCardProps> = ({ title, stats, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h3 className="text-xl font-bold mb-6 text-center pb-4 border-b border-gray-200">
        {title}
      </h3>
      
      <div className="space-y-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-3xl font-bold text-[#155724] mb-2">{stat.value}</p>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;