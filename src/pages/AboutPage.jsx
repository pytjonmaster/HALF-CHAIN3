import React from 'react';
import { motion } from 'framer-motion';
import CTASection from '@/components/CTASection';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Medea Merabishvili",
      image: "/images/team/medea.jpg?v=2"
    },
    {
      name: "Kote Shaburishvili",
      image: "/images/team/kote1.jpg?v=2"
    },
    {
      name: "Kote Tsitskishvili",
      image: "/images/team/kote.jpg?v=2"
    },
    {
      name: "Zurab Balamwarashvili",
      image: "/images/team/zura.jpg?v=2"  
    }
  ];

  return (
    <div className="min-h-screen bg-[#0C2753]">
      <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-[#0C2753]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <svg className="w-full h-full text-[#EC2F55]/10" viewBox="0 0 400 400">
              <pattern id="network-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1" fill="currentColor" />
                <line x1="25" y1="25" x2="50" y2="25" stroke="currentColor" strokeWidth="0.5" />
                <line x1="25" y1="25" x2="25" y2="50" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#network-pattern)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 md:mb-20">
            <div className="max-w-2xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                About Us
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-invert max-w-none"
              >
                <p className="text-lg text-gray-300 leading-relaxed">
                  Lychee is a blockchain-based platform that makes real estate payments safe, fast, and transparent. We connect property buyers and construction companies through secure smart contracts and automated escrow. Funds stay protected until auditors confirm project completion, removing fraud risks and cutting unnecessary costs.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  We currently operate in Georgia, Kazakhstan, and Uzbekistan—markets where digital payments and tokenization are growing quickly. With a simple 0.2% commission model and strong auditor partnerships, Lychee offers a modern, trusted way to buy and sell apartments.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-right mb-8">
              About the <span className="text-[#EC2F55]">Team</span>
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We are a team of coursemates who have worked together for years on real, high-impact projects. Through this experience, we’ve built strong communication, a shared mindset, and the ability to execute fast. Each member brings a clear role—technology, product, operations, and business—but we operate as one unit with a single goal: fixing the trust and transparency problems in real estate.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We United by the same vision and work ethic, we turn complex processes into simple, reliable solutions. Our team is driven, focused, and committed to delivering secure innovation through Lychee.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-[#EC2F55]">Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg bg-[#1a2234] p-4">
                  <div className="relative w-full pb-[120%]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                    />
                  </div>
                  <div className="mt-5">
                    <h3 className="text-2xl font-semibold text-white text-center">{member.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <CTASection />
    </div>
  );
};

export default AboutPage; 