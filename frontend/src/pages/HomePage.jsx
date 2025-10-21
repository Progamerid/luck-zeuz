import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ActionButtons from '../components/ActionButtons';
import CTACards from '../components/CTACards';
import Footer from '../components/Footer';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('SLOT');

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Dotted background pattern */}
      <div 
        className="fixed inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <HeroSection />
        <ActionButtons />
        <CTACards />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;