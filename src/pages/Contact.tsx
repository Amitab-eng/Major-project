import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div>
      <Hero 
        title="Contact Us"
        subtitle="Get In Touch"
        description="We'd love to hear from you. Reach out with any questions, inquiries, or to schedule a visit to our farm."
        backgroundImage="src/pages/getintouch-1.jpg"
        showCta={false}
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Contact Information"
            title="How to Reach Us"
            description="We're here to help. Contact us through any of the following methods or use the form below."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <ContactCard 
              icon={<Phone size={24} />}
              title="Phone"
              details={['+91 8582960070', 'Monday - Friday, 8am - 6pm']}
              delay={0.1}
            />
            
            <ContactCard 
              icon={<Mail size={24} />}
              title="Email"
              details={['amitabdubey33@gmail.com', 'We respond within 24 hours']}
              delay={0.2}
            />
            
            <ContactCard 
              icon={<MapPin size={24} />}
              title="Address"
              details={['123 Farm Road', 'Countryside, State 12345']}
              delay={0.3}
            />
            
            <ContactCard 
              icon={<Clock size={24} />}
              title="Business Hours"
              details={['Monday - Friday: 8am - 6pm', 'Saturday: 9am - 5pm', 'Sunday: Closed']}
              delay={0.4}
            />
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionTitle 
                subtitle="Send a Message"
                title="Get in Touch"
                description="Fill out the form below, and we'll get back to you as soon as possible."
              />
              
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#155724]"
                      placeholder="Your first name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#155724]"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#155724]"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#155724]"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select 
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#155724]"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="products">Product Information</option>
                    <option value="csa">CSA Membership</option>
                    <option value="wholesale">Wholesale Orders</option>
                    <option value="visit">Farm Visits</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#155724]"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="bg-[#155724] hover:bg-[#0d3518] text-white px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </motion.form>
            </div>
            
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full min-h-[400px] lg:min-h-0"
            >
              <div className="bg-gray-200 rounded-lg overflow-hidden h-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.3523126546!2d88.26495117488783!3d22.535406374621722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1746553709115!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{border:0, minHeight: '400px' }}
              allowFullScreen={true} 
              loading="lazy" 
              title="Farm Location"
              ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Frequently Asked Questions"
            title="Common Questions"
            description="Find answers to the most commonly asked questions about our farm and services."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <FAQ 
              question="How can I join your CSA program?"
              answer="You can join our CSA program by filling out the registration form on our website or contacting us directly. We offer flexible subscription options including weekly or bi-weekly deliveries, and various share sizes to meet your needs."
              delay={0.1}
            />
            
            <FAQ 
              question="Do you offer farm tours?"
              answer="Yes, we offer guided farm tours every Saturday from May through October. Tours last approximately 90 minutes and include a visit to our fields, greenhouse, and packing facilities. Reservations are required and can be made through our website or by phone."
              delay={0.2}
            />
            
            <FAQ 
              question="Are all your products certified organic?"
              answer="Yes, all our produce is certified organic. Our farm has been USDA Certified Organic since 2012, and we follow strict organic farming practices that prohibit the use of synthetic pesticides, herbicides, and fertilizers."
              delay={0.3}
            />
            
            <FAQ 
              question="How far do you deliver?"
              answer="We currently deliver within a 80-km radius of our farm. This includes most of the metropolitan area and surrounding suburbs. If you're unsure if we deliver to your location, please contact us with your address, and we'll let you know."
              delay={0.4}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(21, 87, 36, 0.85), rgba(21, 87, 36, 0.85)), url(https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg)' }}>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to experience the farm?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Visit our farm stand, join a tour, or sign up for our newsletter to stay updated on seasonal offerings and events.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#" 
                className="bg-[#F4B84A] hover:bg-[#d9a43d] text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center justify-center"
              >
                Schedule a Visit
              </a>
              <a 
                href="#" 
                className="bg-transparent hover:bg-white text-white hover:text-[#155724] px-8 py-3 rounded-full font-medium border-2 border-white transition-colors inline-flex items-center justify-center"
              >
                Join Our Newsletter
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
  delay?: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, details, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-lg shadow-md text-center"
    >
      <div className="bg-[#155724] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <div className="text-gray-600">
        {details.map((detail, index) => (
          <p key={index} className="mb-1">{detail}</p>
        ))}
      </div>
    </motion.div>
  );
};

interface FAQProps {
  question: string;
  answer: string;
  delay?: number;
}

const FAQ: React.FC<FAQProps> = ({ question, answer, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h3 className="text-lg font-bold mb-3 text-[#155724]">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </motion.div>
  );
};

export default Contact;