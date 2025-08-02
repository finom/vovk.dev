import React from 'react';
import './home.css';
import Hero from '@/components/Hero';
import WhatToBuild from './WhatToBuild';

const Home = () => {
  return (
    <div className="bg-white dark:bg-black relative">
      <Hero />
      <WhatToBuild />
    </div>
  );
};

export default Home;
