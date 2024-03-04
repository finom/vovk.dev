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

      <div className="mx-auto max-w-screen-lg border-b border-gray-200 dark:border-gray-800  mb-16 mt-8">
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
              <Link href="https://docs.vovk.dev/docs/intro/" className="link" target="_blank">
                visit the official documentation
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
                Enable decorators by setting <code className="code">compilerOptions&#8203;.experimentalDecorators</code>{' '}
                to true in your <strong>tsconfig.json</strong>.
              </Step>
              <Step icon={4}>
                Create <strong>/src/app/api/[[...vovk]]/route.ts</strong>, the controller class and the component at{' '}
                <strong>/src/page.tsx</strong> as illustrated above.
              </Step>
              <Step icon={5}>
                Run <code className="code">npx vovk dev</code> that wraps the original{' '}
                <code className="code">npx next dev</code> to set required ports and open{' '}
                <Link href="http://localhost:3000" target="_blank" className="link">
                  http://localhost:3000
                </Link>
                .
              </Step>
              <Step icon={<span className="mt-1.5 inline-block">*</span>}>
                Alternatively, you can use{' '}
                <Link className="link" target="_blank" href="https://www.npmjs.com/package/concurrently">
                  concurrently
                </Link>{' '}
                to avoid using the wrapper. Use <code className="code">--no-next-dev</code> in order to avoid running{' '}
                <code className="code">next dev</code> internally and provide port variables explicitly:{' '}
                <code className="code text-nowrap">
                  PORT=3000 VOVK_PORT=6969 concurrently 'vovk dev --no-next-dev' 'next dev' --kill-others
                </code>
              </Step>
              <Step icon={<span className="mt-1.5 inline-block">*</span>}>
                Commit <strong>.vovk.json</strong> that just was automatically created.
              </Step>
              <Step icon={<span className="mt-1.5 inline-block">*</span>}>
                To build o deployment run <code className="code">npx vovk generate</code> before{' '}
                <code className="code">npx next build</code>. Create NPM script:{' '}
                <code className="code">"vovk generate && next build"</code>.
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
      </div>
    </>
  );
};

export default ManualInstall;
