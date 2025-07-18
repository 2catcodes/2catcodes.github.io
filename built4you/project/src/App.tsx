import React from 'react';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import DevicesShowcase from './components/DevicesShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <WhatWeDo />
      <DevicesShowcase />
      <WhyChooseUs />
      <FinalCTA />
    </div>
  );
}

export default App;