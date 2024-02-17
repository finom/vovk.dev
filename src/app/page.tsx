'use client';
import Image from 'next/image';
import React from 'react';
import { Inter } from 'next/font/google';
import Jumbotron from '@/components/Jumbotron';
import SolvedProblems from '@/components/SolvedProblems';
import Examples from '@/components/Examples';
import TopNav from '@/components/TopNav';
import { StreamController, WorkerService } from 'vovk-examples';
import CreateInitUse from '@/components/CreateInitUse';
import BonusFeatures from '@/components/BonusFeatures';

/*
TODO
Make static!
Refator example component
Use bright

Sections

# REST for Next
## + Web Worker interface

- Create - init - use - 3 sections of code

New mini sections with illustrations or icons:
- One port
- Edge runtime
- Good old REST API
- Zero dependencies
- Total TypeScript
- Easy to learn

Combined section of "Bonus features":
- Customize - 1 section of code of Client with custom arguments
- Back-end for React Native - 1 section of code
- Easy to distribute - 1 section of code


- Code
  - Service-controller pattern (2 sections of code) + example
  - Streaming with openai (compact exmaple 2 sections of code) with link to full example
  - Isomorphic validation (2 sections of code) + example
  - Workers (2 sections of code) + example

- Sponsor

---
OTHER SECTION IDEAS:
[Some illustration on how it works???]

- A note from the author
- Video
- 3 articles of documentaion (Intro, Controller, Worker) + links to secondary ones (decorators, customization, how it works, API)
---

*/

// POST https://example.com/api/posts/n6ic9e/comments

const inter = Inter({
  subsets: ['latin'],
});

// Some styles are borrowed from https://sandocs.vercel.app/ because I don't have budget
const Home = () => {
  // console.log(HelloController);
  // HelloController.getHello().then(console.log);

  const x = async () => {
    if(typeof Worker !== 'undefined') {
    console.log('xx', await WorkerService.factorize(100n));
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
      <div className="fixed inset-0 [background:radial-gradient(circle_at_15%_50%,rgb(237,233,254),rgb(255_255_255/0)25%),radial-gradient(circle_at_85%_30%,rgb(216,243,246),rgb(255_255_255/0)25%)] opacity-40 from-rose-100 -z-10" />

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
