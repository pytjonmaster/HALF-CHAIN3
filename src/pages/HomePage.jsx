import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CTASection from '@/components/CTASection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0C2753]">
      <HeroSection />
      
      <div className="bg-[#0C2753]">
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
      </div>
    </div>
  );
};

export default HomePage;
