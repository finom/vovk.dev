'use client';
import Image from 'next/image';
import React from 'react';
import { Inter } from 'next/font/google';
import Jumbotron from '@/components/Jumbotron';
import SolvedProblems from '@/components/SolvedProblems';
import Examples from '@/components/Examples';
import TopNav from '@/components/TopNav';
import { StreamController, WorkerService, WorkerYieldService } from 'vovk-examples';
import CreateInitUse from '@/components/CreateInitUse';
import BonusFeatures from '@/components/BonusFeatures';

const inter = Inter({
  subsets: ['latin'],
});

// Some styles are borrowed from https://sandocs.vercel.app/ because I don't have budget
const Home = () => {
  // console.log(HelloController);
  // HelloController.getHello().then(console.log);

  const x = async () => {
    if (typeof Worker !== 'undefined') {
      WorkerService.use(new Worker(new URL('vovk-examples/dist/WorkerService.js', import.meta.url)));
      WorkerYieldService.use(new Worker(new URL('vovk-examples/dist/WorkerYieldService.js', import.meta.url)));
      console.log('xx', await WorkerService.factorize(100n));

      for await (const y of WorkerYieldService.approximatePi(100n, 10)) {
        console.log('yy', y);
      }
    }

    for await (const x of await StreamController.streamTokens()) {
      console.log(x);
    }
  };

  x();
  return (
    <div className={`dark:bg-slate-900 dark:text-white bg-white ${inter.className} transition-colors px-4`}>
      <header className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-2">
          <a className="flex" href="/">
            <Image className="dark:invert" src="/vovk-text-logo.png" width={150} height={30} alt="Vovk.ts" />
          </a>
        </div>
        <TopNav />
      </header>
      <Jumbotron />
      <CreateInitUse />
      <SolvedProblems />
      <BonusFeatures />
      <Examples />

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
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between py-10 max-w-screen-2xl mx-auto text-sm px-5 text-secondary">
            <p>
              Created by{' '}
              <a href="https://github.com/finom" className="link" target="_blank" rel="noopener">
                Andrii Gubanov
              </a>
            </p>

            <nav className="flex gap-5">
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
