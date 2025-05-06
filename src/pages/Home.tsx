import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import Counter from '../components/Counter';
import BlogCard from '../components/BlogCard';
import { Wheat, Leaf, Droplets, Truck, ShieldCheck, TreePine, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';


const Home: React.FC = () => {
  return (
    <div>
      <Hero 
        title="Every Crop Counts, Every Farmer Matters."
        subtitle="Better Agriculture for Better Future"
        description="We are dedicated to providing the highest quality organic produce while using sustainable farming practices that protect our environment and support local communities."
        backgroundImage="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg"
      />
      
      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="src/Farm-fresh-produce.webp" 
                alt="About FarmFresh"
                className="rounded-lg shadow-xl w-full h-auto" 
              />
            </motion.div>
            
            <div>
              <SectionTitle 
                subtitle="About FarmFresh"
                title="Growing Naturally, Harvesting Responsibly"
                description="Our mission is to cultivate and provide healthy, sustainably grown produce while nurturing the land for future generations."
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-gray-600 mb-6">
                  Founded in 2010, FarmFresh has grown from a small family farm to a leading provider of organic produce in the region. We believe in sustainable agriculture practices that protect our environment, support biodiversity, and produce the healthiest food possible.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-[#155724] text-white p-2 rounded-full mr-3 mt-1">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Certified Organic</h4>
                      <p className="text-gray-600 text-sm">All our products are certified organic and non-GMO.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#155724] text-white p-2 rounded-full mr-3 mt-1">
                      <Leaf size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Sustainable Practices</h4>
                      <p className="text-gray-600 text-sm">We use farming methods that preserve and enhance the environment.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#155724] text-white p-2 rounded-full mr-3 mt-1">
                      <TreePine size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Local Community</h4>
                      <p className="text-gray-600 text-sm">Supporting local farmers and strengthening our community.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#155724] text-white p-2 rounded-full mr-3 mt-1">
                      <Truck size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Farm to Table</h4>
                      <p className="text-gray-600 text-sm">Fresh produce delivered directly from our farm to your table.</p>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="/about" 
                  className="inline-flex items-center bg-[#155724] hover:bg-[#0d3518] text-white px-6 py-3 rounded-full font-medium transition-colors"
                >
                  Learn More About Us
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Our Services"
            title="What We Offer"
            description="We provide comprehensive agricultural services with a focus on sustainability and organic farming practices."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Wheat size={24} />}
              title="Organic Farming"
              description="We grow a wide variety of crops using organic and sustainable farming methods that protect the environment and produce healthier food."
              link="/services/organic-farming"
              delay={0.1}
            />
            
            <ServiceCard 
              icon={<Leaf size={24} />}
              title="Agricultural Consulting"
              description="Our team of experts provides consulting services to help farmers transition to organic farming and implement sustainable practices."
              link="/services/agricultural-consulting"
              delay={0.2}
            />
            
            <ServiceCard 
              icon={<Droplets size={24} />}
              title="Irrigation Solutions"
              description="We design and implement efficient irrigation systems that conserve water while ensuring optimal crop growth and yield."
              link="/services/irrigation-solutions"
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* Counter Section */}
      <section className="py-16 bg-[#155724] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Counter end={15} suffix="+" title="Years of Experience" delay={0} />
            <Counter end={5000} suffix="+" title="Acres of Farmland" delay={200} />
            <Counter end={120} suffix="+" title="Organic Products" delay={400} />
            <Counter end={8500} suffix="+" title="Happy Customers" delay={600} />
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Our Products"
            title="Fresh From Our Farm"
            description="We offer a wide range of organic, fresh, and sustainably grown products directly from our farm."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard 
              image="https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg"
              name="Organic Carrots"
              price={70}
              oldPrice={90}
              delay={0.1}
            />
            
            <ProductCard 
              image="fresh-tomato.webp"
              name="Fresh Tomatoes"
              price={30}
              delay={0.2}
            />
            
            <ProductCard 
              image="src/strawberries.jpg"
              name="Organic Strawberries"
              price={125}
              delay={0.3}
            />
            
            <ProductCard 
              image="Apples-Organic.webp"
              name="Organic Apples"
              price={150}
              delay={0.4}
            />
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/shop" 
              className="inline-flex items-center bg-[#F4B84A] hover:bg-[#155724] text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              View All Products
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(21, 87, 36, 0.85), rgba(21, 87, 36, 0.85)), url(https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg)' }}>
        <div className="container mx-auto px-4 text-center">
          <SectionTitle 
            subtitle="Join Our Community"
            title="Subscribe to Our Farm Share Program"
            description="Get fresh organic produce delivered directly to your doorstep every week."
            centered
            light
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto"
          >
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="flex-grow px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#F4B84A]"
              />
              <button 
                type="submit"
                className="bg-[#F4B84A] hover:bg-[#d9a43d] text-white px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
            <p className="text-gray-300 mt-4 text-sm">
              Join over 5,000 subscribers. We respect your privacy and will never share your information.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Testimonials"
            title="What Our Customers Say"
            description="Don't just take our word for it. Here's what our happy customers have to say about our products and services."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="The organic vegetables from FarmFresh are the best I've ever tasted. You can really taste the difference in quality compared to supermarket produce."
              author="Radha Dubey"
              role="Regular Customer"
              image="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg"
              rating={5}
              delay={0.1}
            />
            
            <TestimonialCard 
              quote="I've been a subscriber to their weekly delivery service for over 2 years now. The produce is always fresh, and their customer service is exceptional."
              author="Rishab Kumar"
              role="Weekly Subscriber"
              image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              rating={5}
              delay={0.2}
            />
            
            <TestimonialCard 
              quote="Their farm tours are educational and fun for the whole family. My kids love visiting and learning about sustainable farming practices."
              author="Riya Mishra"
              role="Farm Tour Participant"
              image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
              rating={4}
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Latest News"
            title="From Our Blog"
            description="Stay updated with the latest news, farming tips, and stories from our farm."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard 
              image="https://images.pexels.com/photos/2321837/pexels-photo-2321837.jpeg"
              title="The Benefits of Organic Farming for the Environment"
              excerpt="Discover how organic farming practices help protect biodiversity, improve soil health, and reduce pollution."
              date="May 15, 2025"
              author="Amitabh Kumar"
              slug="benefits-organic-farming-environment"
              delay={0.1}
            />
            
            <BlogCard 
              image="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg"
              title="Seasonal Planting Guide: What to Grow This Summer"
              excerpt="Our comprehensive guide to the best crops to plant this summer for a bountiful harvest."
              date="April 28, 2025"
              author="Kanti Dubey"
              slug="seasonal-planting-guide-summer"
              delay={0.2}
            />
            
            <BlogCard 
              image="https://images.pexels.com/photos/3629537/pexels-photo-3629537.jpeg"
              title="From Farm to Table: The Journey of Our Organic Produce"
              excerpt="Follow the journey of our organic produce from planting to harvesting to your table."
              date="April 10, 2025"
              author="Anshuman Singh"
              slug="farm-to-table-journey"
              delay={0.3}
            />
          </div>

          <div className="text-center mt-12">
            <a 
              href="/blog" 
              className="inline-flex items-center bg-[#155724] hover:bg-[#0d3518] text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              View All Posts
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;