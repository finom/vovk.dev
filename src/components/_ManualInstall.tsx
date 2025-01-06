import Link from 'next/link';
import { ReactNode } from 'react';
import Script from 'next/script';
import IconWrapper from './IconWrapper';
import Clipboard from './Clipboard';

const Step = ({ children, icon }: { children: ReactNode; icon: ReactNode }) => {
  return (
    <li className="flex gap-3 items-center mb-2">
      <IconWrapper className="text-xl font-light">
        <span>{icon}</span>
      </IconWrapper>
      <span className="flex-1">{children}</span>
    </li>
  );
};

const ManualInstall = () => {
  return (
    <>
      <h1 className="flex gap-2 font-semibold text-2xl items-center justify-center mb-3 cursor-pointer">
        Quick Install
      </h1>
      <div className="m-auto  bg-rose-500/10 flex max-w-[695px] gap-5 items-center justify-between py-3 px-5 rounded-full">
        <code className="text-rose-500 text-left whitespace-nowrap overflow-x-auto">
          npx create-next-app -e https://github.com/finom/vovk-hello-world
        </code>{' '}
        <Clipboard
          text="npx create-next-app -e https://github.com/finom/vovk-hello-world"
          className="text-rose-900 hover:text-rose-500"
        />
      </div>
      <div className="text-center mt-8 mb-16">
        <Link
          className="min-w-8 bg-rose-500 justify-center inline-flex items-center gap-2 rounded-full py-3 px-6 text-white font-medium hover:bg-rose-700 self-center m-auto"
          href="getting-started"
        >
          <span>Manual Install</span>{' '}
          <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      {/*<div className="mx-auto max-w-screen-md  mb-16 mt-8">

        <h1
          className="flex gap-2 font-semibold text-2xl items-center justify-center mb-3 cursor-pointer"
          id="manual-install-title"
        >
          Manual Install
          <svg
            width="24px"
            height="24px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="manual-install-icon"
            className="transition rotate-[270deg]"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h1>
        
        <div className="overflow-hidden h-0 transition-all mb-4" id="manual-install">
          <div id="manual-install-content" className="pb-4">
            <p className="text-center mb-4">
              For detailed information on Vovk.ts installation{' '}
              <Link href="getting-started" className="link" target="_blank">
                visit the documentation
              </Link>
            </p>
            <ol>
              <Step icon={1}>
                <Link href="https://nextjs.org/docs/getting-started/installation" className="link" target="_blank">
                  Install Next.js
                </Link>{' '}
                with App router and <strong>/src</strong> folder.
              </Step>
              <Step icon={2}>
                Install Vovk.ts with <code className="code">npm i vovk-client vovk</code> or{' '}
                <code className="code">yarn add vovk-client vovk</code>.
              </Step>
              <Step icon={3}>
                Install Concurrently with <code className="code">npm i -D concurrently</code> or{' '}
                <code className="code">yarn add concurrently --dev</code>.
              </Step>
              <Step icon={4}>
                Enable decorators by setting <code className="code">compilerOptions&#8203;.experimentalDecorators</code>{' '}
                to true in your <strong>tsconfig.json</strong>.
              </Step>
              <Step icon={5}>
                Create <strong>/src/app/api/[[...vovk]]/route.ts</strong>, the controller class and the component at{' '}
                <strong>/src/page.tsx</strong> as illustrated above.
              </Step>
              <Step icon={6}>
                Create NPM script called <code className="code">"dev"</code> and define the PORT variable explicitly.{' '}
                <code className="code text-nowrap">PORT=3000 concurrently 'vovk dev' 'next dev' --kill-others</code>
              </Step>
              <Step icon={7}>
                Run <code className="code">npm run dev</code> or <code className="code">yarn dev</code> to start the
                project and open the browser at{' '}
                <Link href="http://localhost:3000" target="_blank" className="link">
                  http://localhost:3000
                </Link>
              </Step>
              <Step icon={<span className="mt-1.5 inline-block">*</span>}>
                Commit <strong>.vovk.json</strong> that just was automatically created.
              </Step>
              <Step icon={<span className="mt-1.5 inline-block">*</span>}>
                To build the project, run <code className="code">npx vovk generate</code> before{' '}
                <code className="code">npx next build</code>. Create NPM script:{' '}
                <code className="code">vovk generate && next build</code>.
              </Step>
            </ol>
          </div>
        </div>
        <Script id="manual-install-script">{`
        document.getElementById('manual-install-title').addEventListener('click', function() {
          const el = document.getElementById('manual-install');
          const inner = document.getElementById('manual-install-content');
          const icon = document.getElementById('manual-install-icon');
          el.style.height = el.style.height ? '' : inner.scrollHeight + 'px';
          icon.style.transform = icon.style.transform ? '' : 'rotate(0)';
        });

        window.addEventListener('resize', function() {
          const el = document.getElementById('manual-install');
          const inner = document.getElementById('manual-install-content');
          el.style.height = el.style.height ? inner.scrollHeight + 'px' : '';
        });
      `}</Script> 
      </div>*/}
    </>
  );
};

export default ManualInstall;
