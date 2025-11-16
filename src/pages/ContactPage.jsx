import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0C2753]">
      <div className="absolute inset-0 blockchain-pattern opacity-30"></div>

      <main className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Contact us
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8 bg-[#1a2234] p-8 rounded-lg">
              <div>
                <h2 className="text-[#EC2F55] text-xl font-semibold mb-4">Contact</h2>
                <a 
                  href="mailto:info@Lychee.com" 
                  className="text-gray-300 hover:text-[#EC2F55] transition-colors"
                >
                  info@Lychee.com
                </a>
              </div>

              <div>
                <h2 className="text-[#EC2F55] text-xl font-semibold mb-4">Address</h2>
                <p className="text-gray-300"></p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#1a2234] p-8 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-[#111827] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#EC2F55]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-[#111827] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#EC2F55]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-[#111827] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#EC2F55]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#EC2F55] text-white font-semibold rounded-lg hover:bg-[#EC2F55]/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ContactPage; 