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

const Home = () => {
  return (
    <>
      <div>
        {/* <OgToScreenshot /> */}
        <Jumbotron />
        <div className={`px-4`}>
          <WhatsInside />

          <div className="max-w-3xl mx-auto px-5 mt-28">
            <div className="flex flex-col justify-center">
              <div className="text-center">
                <h2 className="font-semibold text-3xl">Sponsors</h2>
                <p className="max-w-md mx-auto mt-2 text-secondary">
                  <Link href="https://github.com/sponsors/finom" target="_blank" className="link mb-2 inline-block">
                    Sponsor the author of this project on&nbsp;Github&nbsp;♥️
                  </Link>
                  <br />
                  You can also contact me via email from my{' '}
                  <Link href="https://github.com/finom" className="link" target="_blank" rel="noopener">
                    Github profile
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 mt-20">
            <footer>
              <div className="flex flex-col md:flex-row gap-3 items-center justify-between py-4 md:py-8 max-w-(--breakpoint-2xl) mx-auto text-sm px-5 text-secondary">
                <p>
                  Created by{' '}
                  <a href="https://github.com/finom" className="link" target="_blank" rel="noopener">
                    Andrii Gubanov
                  </a>
                </p>

                <nav className="text-center flex flex-col gap-3 sm:flex-row sm:gap-5">
                  <Link
                    href="https://github.com/finom/vovk.dev"
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    This website on Github
                  </Link>
                  <Link href="https://github.com/finom/vovk-zod" className="link" target="_blank">
                    Vovk-Zod
                  </Link>
                  <Link href="https://iconoir.com/" className="link" target="_blank" rel="noopener noreferrer">
                    Icons
                  </Link>
                </nav>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
