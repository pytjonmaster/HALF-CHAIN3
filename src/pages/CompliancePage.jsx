import React from 'react';
import { motion } from 'framer-motion';
import ComplianceSection from '@/components/ComplianceSection';
import CTASection from '@/components/CTASection';

const CompliancePage = () => {
  return (
    <div className="min-h-screen bg-[#0C2753]">
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden bg-[#0C2753]">
        <div className="absolute inset-0 blockchain-pattern opacity-30 -z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Regulatory <span className="text-[#EC2F55]">Compliance</span>
            </h1>
            <p className="text-xl text-gray-300">
              Lychee ensures all smart contracts meet regulatory requirements with built-in KYC/AML verification and compliance features.
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="bg-[#0C2753]">
        <ComplianceSection />
      </div>

      <CTASection />
    </div>
  );
};

export default CompliancePage;
