import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { Leaf, Award, Users, ThumbsUp, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div>
      <Hero 
        title="About FarmFresh"
        subtitle="Our Story"
        description="Learn about our mission, values, and commitment to sustainable and organic farming practices."
        backgroundImage="https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg"
        showCta={false}
      />
      
      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                subtitle="Our Story"
                title="From Code to Cultivation"
                description="FarmFresh began with a simple mission: to grow healthy food in harmony with nature."
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-gray-600 mb-6">
                  FarmFresh began not just as a web project, but as a mission to support real farmers and promote healthier food habits. As final-year BCA students passionate about technology and sustainability, we wanted to solve a real-world problem using our skills — and that's how FarmFresh was born.
                </p>
                
                <p className="text-gray-600 mb-6">
                  While researching rural development and agriculture, we saw a gap: local farmers grow high-quality produce, but often struggle to reach the right customers. At the same time, urban consumers are looking for fresh, trustworthy, and organic food sources. So we decided to build a platform that connects the two.
                </p>
                
                <p className="text-gray-600 mb-6">
                  We’re more than just a grocery site — FarmFresh stands for transparency, fair trade, and healthier choices. By cutting out middlemen and working directly with small farmers, we ensure fresh produce, fair prices, and zero compromises on quality.

                  This isn’t just our final project — it’s our small step toward a better food system.
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg" 
                alt="Our Story"
                className="rounded-lg shadow-xl w-full h-auto" 
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Mission & Values"
            title="What Drives Us"
            description="Our core values guide everything we do at FarmFresh."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-[#155724] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Leaf size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We farm in harmony with nature, using practices that preserve and enhance the environment for future generations. Our commitment to sustainability extends beyond our fields to every aspect of our operation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-[#155724] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. From seed selection to harvest, we maintain the highest standards to ensure that every product that bears our name is nutritious, flavorful, and grown with care.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-[#155724] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in building strong communities through food. We support local farmers, provide educational opportunities, and work to ensure that healthy, organic food is accessible to everyone.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-[#155724] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <ThumbsUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with transparency and honesty in all our dealings. When we say organic, we mean it. Our customers can trust that we stand behind every product we sell.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-[#155724] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Passion</h3>
              <p className="text-gray-600">
                We love what we do. Our passion for organic farming drives us to constantly improve our practices and share our knowledge with others who share our commitment to sustainable agriculture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Our Team"
            title="Meet the People Behind FarmFresh"
            description="Our dedicated team of farmers, agronomists, and staff work together to bring you the best organic produce."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="relative overflow-hidden rounded-full mb-4 mx-auto w-48 h-48">
                <img 
                  src="src/pages/qqq.jpg" 
                  alt="Amitab Dubey"
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Amitab Dubey</h3>
              <p className="text-[#155724] font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600 mb-4">
                With over 10 years of farming experience, Amitab leads our team with passion and expertise.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative overflow-hidden rounded-full mb-4 mx-auto w-48 h-48">
                <img 
                  src="src/pages/ANSHUMAN.jpeg.jpg" 
                  alt="Anshuman Kumar"
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Anshuman Kumar</h3>
              <p className="text-[#155724] font-medium mb-3">Head Agronomist</p>
              <p className="text-gray-600 mb-4">
                Anshuman oversees our crop planning and ensures we implement the best organic farming practices.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="relative overflow-hidden rounded-full mb-4 mx-auto w-48 h-48">
                <img 
                  src="src/pages/WhatsApp Image 2025-02-03 at 14.33.48_9ce550db.jpg" 
                  alt="Poulami Das"
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Poulami Das</h3>
              <p className="text-[#155724] font-medium mb-3">Operations Manager</p>
              <p className="text-gray-600 mb-4">
                Poulami manages our day-to-day operations, ensuring efficiency from field to distribution.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="relative overflow-hidden rounded-full mb-4 mx-auto w-48 h-48">
                <img 
                  src="src/WhatsApp Image 2025-02-02 at 23.06.50_60448635.jpg" 
                  alt="Sumit Kumar"
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Sumit Kumar</h3>
              <p className="text-[#155724] font-medium mb-3">Community Outreach</p>
              <p className="text-gray-600 mb-4">
                Sumit leads our community programs, education initiatives, and farmers market presence.
              </p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/contact" 
              className="inline-flex items-center bg-[#155724] hover:bg-[#0d3518] text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Join Our Team
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(21, 87, 36, 0.85), rgba(21, 87, 36, 0.85)), url(https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg)' }}>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to experience the FarmFresh difference?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Visit our farm, join our CSA program, or shop our products online. We're excited to welcome you to the FarmFresh family.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/shop" 
                className="bg-[#F4B84A] hover:bg-[#d9a43d] text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center justify-center"
              >
                Shop Our Products
              </a>
              <a 
                href="/contact" 
                className="bg-transparent hover:bg-white text-white hover:text-[#155724] px-8 py-3 rounded-full font-medium border-2 border-white transition-colors inline-flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;