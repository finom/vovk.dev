import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Inter } from 'next/font/google';
import Jumbotron from '@/components/Jumbotron';
import SolvedProblems from '@/components/SolvedProblems';
import Examples from '@/components/Examples';
import WindowAlike from '@/components/WindowAlike';
import BasicDiagram from '@/components/BasicDiagram';
import VovkPattern from '@/components/VovkPattern';
import CostDiagram from '@/components/CostDiagram';
import TopNav from '@/components/TopNav';

const inter = Inter({
  subsets: ['latin'],
});

// Some styles are borrowed from https://sandocs.vercel.app/ because I don't have budget on a designer :)
const Home = () => {
  return (
    <div className={`dark:bg-slate-900 dark:text-white bg-white ${inter.className} transition-colors`}>
      <header className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-2">
          <a className="flex" href="/">
            <Image className="dark:invert" src="/vovk-text-logo.png" width={150} height={30} alt="Vovk.ts" />
          </a>
        </div>
        <TopNav />
      </header>
      <div className="fixed inset-0 [background:radial-gradient(circle_at_15%_50%,rgb(237,233,254),rgb(255_255_255/0)25%),radial-gradient(circle_at_85%_30%,rgb(216,243,246),rgb(255_255_255/0)25%)] opacity-40 from-rose-100 -z-10" />

      <Jumbotron />
      <SolvedProblems />
      <CostDiagram />
      <BasicDiagram />
      <Examples />
      <VovkPattern />

      <div className="max-w-3xl mx-auto px-5 mt-28">
        <div className="flex flex-col justify-center">
          <div className="text-center">
            <h2 className="font-semibold text-3xl">Sponsors</h2>
            <p className="max-w-md mx-auto mt-2 text-secondary">
              <a href="https://github.com/sponsors/finom" className="link mb-2 inline-block">
                Sponsor the project author on Github ♥️
              </a>
              <br />
              You can also contact me via email from my{' '}
              <a href="https://github.com/finom" className="link" target="_blank" rel="noopener">
                Github profile
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 mt-20">
        <footer>
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between py-10 max-w-screen-xl mx-auto text-sm px-5 text-secondary">
            <p>
              Created by{' '}
              <a href="https://github.com/finom" className="link" target="_blank" rel="noopener">
                Andrii Gubanov
              </a>
            </p>

            <nav className="flex gap-5">
              <a href="https://www.cutercounter.com/" target="_blank" className="dark:invert flex items-center">
                <Image
                  width={30}
                  height={20}
                  alt="Visitor count"
                  src="https://www.cutercounter.com/hits.php?id=hxoqqpq&nd=4&style=1"
                />
              </a>
              <a href="https://docs.vovk.dev" className="link" target="_blank" rel="noopener noreferrer">
                Vovk.ts Docs
              </a>
              <a href="https://github.com/finom/vovk" className="link" target="_blank" rel="noopener noreferrer">
                Vovk.ts on Github
              </a>
              <a href="https://github.com/finom/vovk.dev" className="link" target="_blank" rel="noopener noreferrer">
                This website on Github
              </a>
              <a href="https://iconoir.com/" className="link" target="_blank" rel="noopener noreferrer">
                Icons
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
