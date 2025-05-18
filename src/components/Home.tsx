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
    <div className="bg-white dark:bg-black relative">
      <div className="overflow-hidden max-w-screen">
        <div className="bg-[url(/mountains-orig.jpg)] dark:bg-[url(/space-orig.jpg)] bg-contain bg-no-repeat bg-top w-full min-w-[700px] max-w-full aspect-[5472/3648] dark:aspect-[2000/1333] absolute hue-rotate-170 dark:hue-rotate-0 opacity-40 dark:opacity-80">
          <div className="bg-gradient-to-b from-[#ffffff30] to-[#ffffffff] dark:from-[#00000030] dark:to-[#000000ff] w-full h-full absolute" />
        </div>
      </div>
      <Jumbotron />
      <Features />
      <div className="mdx-with-style max-w-(--breakpoint-md) mx-auto mt-20 z-0 relative">
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
