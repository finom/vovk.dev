import Link from 'next/link';
import IconWrapper from './IconWrapper';

const SolvedProblems = () => {
  return (
    <div className="mt-4">
      <h2 className="text-center text-3xl font-semibold mb-8">Features</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 max-w-screen-lg mx-auto gap-10">
        <div className="flex gap-4 items-start flex-col ">
          <IconWrapper>
            <svg
              width="20px"
              height="20px"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18.01L6.01 17.9989"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6 6.01L6.01 5.99889"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M2 9.4V2.6C2 2.26863 2.26863 2 2.6 2H21.4C21.7314 2 22 2.26863 22 2.6V9.4C22 9.73137 21.7314 10 21.4 10H2.6C2.26863 10 2 9.73137 2 9.4Z"
                stroke="currentColor"
                strokeWidth="1.5"
              ></path>
              <path
                d="M2 21.4V14.6C2 14.2686 2.26863 14 2.6 14H21.4C21.7314 14 22 14.2686 22 14.6V21.4C22 21.7314 21.7314 22 21.4 22H2.6C2.26863 22 2 21.7314 2 21.4Z"
                stroke="currentColor"
                strokeWidth="1.5"
              ></path>
            </svg>
          </IconWrapper>
          <div>
            <h3 className="font-semibold text-xl">One Port</h3>
            <p className="mt-1 text-secondary">
              {' '}
              Run your full-stack app on a single port. Vovk.ts is an addon over documented Next.js API routes.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start flex-col ">
          <span className="text-rose-600 bg-rose-500/10 justify-center flex font-extrabold items-center rounded-full text-[10px] w-[44px] h-[44px]">
            <span>GET /</span>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Good old REST API</h3>
            <p className="mt-1 text-secondary">
              {' '}
              No more workarounds and new protocols. Create RESTful API for your Next.js app with ease.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start flex-col ">
          <span className="text-rose-600 bg-rose-500/10 rounded-full w-[44px] h-[44px] items-center justify-center flex">
            <svg
              width="24px"
              height="24px"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 2L20 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M3 2L4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M21 16L20 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 16L4 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M9 18H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M10 21H14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9998 3C7.9997 3 5.95186 4.95029 5.99985 8C6.02324 9.48689 6.4997 10.5 7.49985 11.5C8.5 12.5 9 13 8.99985 15H14.9998C15 13.0001 15.5 12.5 16.4997 11.5001L16.4998 11.5C17.4997 10.5 17.9765 9.48689 17.9998 8C18.0478 4.95029 16 3 11.9998 3Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Easy to learn</h3>
            <p className="mt-1 text-secondary">
              {' '}
              To get started you need to read only 4 articles of documentation:{' '}
              <Link target="_blank" href="https://docs.vovk.dev/docs/intro" className="link">
                Into
              </Link>
              ,{' '}
              <Link target="_blank" href="https://docs.vovk.dev/docs/controller" className="link">
                Controller
              </Link>
              ,{' '}
              <Link target="_blank" href="https://docs.vovk.dev/docs/decorators" className="link">
                Decorators
              </Link>
              ,{' '}
              <Link target="_blank" href="https://docs.vovk.dev/docs/customization" className="link">
                Customization & Configuration
              </Link>
              . The rest are optional.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start flex-col ">
          <span className="text-rose-600 bg-rose-500/10 rounded-full w-[44px] h-[44px] items-center justify-center flex">
            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 172 158" fill="none">
              <path d="m96.71 0 43.999 120-50-80-50 10 56-50Z" fill="currentColor" />
              <path d="M171.083 148.881 40.209 120h100.5l14-40 16.374 68.881Z" fill="currentColor" />
              <path d="M0 129.54 90.71 40l-50 80 26.868 37.112L0 129.54Z" fill="currentColor" />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Edge runtime</h3>
            <p className="mt-1 text-secondary">
              {' '}
              Edge runtime is available out of the box. Your REST API is geographically closer to users.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start flex-col ">
          <span className="text-rose-600 bg-rose-500/10 p-3 rounded-full w-[44px] h-[44px]">
            <svg
              width={15}
              height={15}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                d="M7.28856 0.796908C7.42258 0.734364 7.57742 0.734364 7.71144 0.796908L13.7114 3.59691C13.8875 3.67906 14 3.85574 14 4.05V10.95C14 11.1443 13.8875 11.3209 13.7114 11.4031L7.71144 14.2031C7.57742 14.2656 7.42258 14.2656 7.28856 14.2031L1.28856 11.4031C1.11252 11.3209 1 11.1443 1 10.95V4.05C1 3.85574 1.11252 3.67906 1.28856 3.59691L7.28856 0.796908ZM2 4.80578L7 6.93078V12.9649L2 10.6316V4.80578ZM8 12.9649L13 10.6316V4.80578L8 6.93078V12.9649ZM7.5 6.05672L12.2719 4.02866L7.5 1.80176L2.72809 4.02866L7.5 6.05672Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">No dependencies</h3>
            <p className="mt-1 text-secondary">
              {' '}
              Vovk.ts is tiny and has{' '}
              <Link target="_blank" className="link" href="https://bundlephobia.com/package/vovk">
                zero dependencies
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start flex-col ">
          <span className="text-rose-600 bg-rose-500/10 p-3 rounded-full w-[44px] h-[44px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="22" height="22">
              <path
                fill="currentColor"
                d="M 5 4 A 1.0001 1.0001 0 0 0 4 5 L 4 45 A 1.0001 1.0001 0 0 0 5 46 L 45 46 A 1.0001 1.0001 0 0 0 46 45 L 46 5 A 1.0001 1.0001 0 0 0 45 4 L 5 4 z M 6 6 L 44 6 L 44 44 L 6 44 L 6 6 z M 15 23 L 15 26.445312 L 20 26.445312 L 20 42 L 24 42 L 24 26.445312 L 29 26.445312 L 29 23 L 15 23 z M 36.691406 23.009766 C 33.576782 22.997369 30.017578 23.941219 30.017578 28.324219 C 30.017578 34.054219 37.738281 34.055625 37.738281 36.640625 C 37.738281 36.885625 37.842187 38.666016 35.117188 38.666016 C 32.392187 38.666016 30.121094 36.953125 30.121094 36.953125 L 30.121094 41.111328 C 30.121094 41.111328 42.001953 44.954062 42.001953 36.289062 C 42.000953 30.664063 34.208984 30.945391 34.208984 28.150391 C 34.208984 27.067391 34.978375 26.054687 37.109375 26.054688 C 39.240375 26.054688 41.126953 27.3125 41.126953 27.3125 L 41.267578 23.607422 C 41.267578 23.607422 39.113892 23.019408 36.691406 23.009766 z"
              />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Total TypeScript</h3>
            <p className="mt-1 text-secondary">
              Vovk.ts is a well-typed library that also exports types for any use-case imaginable.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <div className="flex gap-4 items-start flex-col mx-auto max-w-[690px]">
          <div>
            <h3 className="font-semibold text-xl">Enjoy Mapped Types</h3>
            <p className="mt-1 text-secondary">
              {' '}
              You can jump straight from the client-side to the controller implementation, making the development
              process easier, thanks to Mapped Types in TypeScript.
            </p>
          </div>
        </div>
        <video
          className="mt-4 rounded-xl shadow-xl max-w-full w-[700px] mx-auto"
          src="/jump-to-controller.mp4"
          loop
          autoPlay
          muted
          controls
        />
      </div>
    </div>
  );
};

export default SolvedProblems;
