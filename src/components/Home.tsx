import React from 'react';
import Jumbotron from '@/components/Jumbotron';
import Features from '@/components/Features';
// import Examples from '@/components/_Examples';
import TopNav from '@/components/_TopNav';
import CreateInitUse from '@/components/_CreateInitUse';
import BonusFeatures from '@/components/_BonusFeatures';
import VovkLogo from '@/components/VovkLogo';
import ManualInstall from '@/components/_ManualInstall';
import Link from 'next/link';
import OgToScreenshot from '@/components/OgToScreenshot';
import './home.css';
import WhatsInside from './WhatsInside';
import SplitSection from './SplitSection';
import InstallSteps from './InstallSteps.mdx';

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <Features />
      <div className="mdx-with-style max-w-(--breakpoint-md) mx-auto mt-20">
        <SplitSection.SplitSectionInfo
          badge="Back-end in 60 seconds"
          title={`Quick install`}
          titleClassName="text-4xl"
        />

        <InstallSteps />
      </div>
      {/*<div className={`px-4 mb-28`}>
        <WhatsInside />
      </div> */}
    </div>
  );
};

export default Home;
