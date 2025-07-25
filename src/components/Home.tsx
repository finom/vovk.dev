import React from 'react';
import './home.css';
import SplitSection from './SplitSection';
import InstallSteps from './InstallSteps.mdx';
import Hero from '@/components/Hero';
import WhatToBuild from './WhatToBuild';
import { GithubFiles } from 'vovk-examples';

const Home = () => {
  return (
    <div className="bg-white dark:bg-black relative">
      <Hero />
      <WhatToBuild />
    </div>
  );
};

export default Home;
