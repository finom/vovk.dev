import Link from 'next/link';
import IconWrapper from './IconWrapper';

const SolvedProblems = () => {
  return (
    <div className="mt-4">
      <h2 className="text-center text-3xl font-semibold mb-8">Features</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 max-w-(--breakpoint-lg) mx-auto gap-10">
        {/* <div className="flex gap-4 items-start flex-col ">
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
              Run your full-stack app on a single port with easy deployment. Vovk.ts is an addon over documented Next.js
              API routes.
            </p>
          </div>
        </div> */}
        <div className="flex gap-4 items-start flex-col ">
          <span className="text-rose-600 bg-rose-500/10 rounded-full w-[44px] h-[44px] flex items-center justify-center">
            <svg
              width="24px"
              height="24px"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 19H12M21 19H12M12 19V13M12 13H18V5H6V13H12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 9.01L9.01 8.99889"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 9.01L12.01 8.99889"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Good old REST with RPC</h3>
            <p className="mt-1 text-secondary">
              {' '}
              World first REST API library with RPC support. You can call your API methods directly from the
              client-side.
            </p>
          </div>
        </div>
        {/*<div className="flex gap-4 items-start flex-col ">
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
        </div> */}
        {/*<div className="flex gap-4 items-start flex-col ">
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
        </div>*/}
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
            <h3 className="font-semibold text-xl">Easy to Learn</h3>
            <p className="mt-1 text-secondary">
              Specially designed for Next.js App Router, Vovk doesn't introduce complex abstractions by being just a
              wrapper over{' '}
              <Link
                target="_blank"
                href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers"
                className="link"
              >
                route handlers
              </Link>{' '}
              making it easy to learn.
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
            <h3 className="font-semibold text-xl">Edge Runtime</h3>
            <p className="mt-1 text-secondary">
              {' '}
              Edge runtime is available out of the box. Your REST API is geographically closer to users.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start flex-col ">
          <span className="text-rose-600 bg-rose-500/10 rounded-full w-[44px] h-[44px] flex items-center justify-center">
            <svg
              width="22px"
              height="22px"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V9.4C21 9.73137 20.7314 10 20.4 10H3.6C3.26863 10 3 9.73137 3 9.4Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M14 20.4V14.6C14 14.2686 14.2686 14 14.6 14H20.4C20.7314 14 21 14.2686 21 14.6V20.4C21 20.7314 20.7314 21 20.4 21H14.6C14.2686 21 14 20.7314 14 20.4Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M3 20.4V14.6C3 14.2686 3.26863 14 3.6 14H9.4C9.73137 14 10 14.2686 10 14.6V20.4C10 20.7314 9.73137 21 9.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Code Splitting</h3>
            <p className="mt-1 text-secondary">
              Apps built with Vovk.ts utilise service-controller pattern that inspired by the beauty of NestJS.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start flex-col ">
          <span className="text-rose-600 bg-rose-500/10 rounded-full w-[44px] h-[44px] flex items-center justify-center">
            <svg
              width="24px"
              height="24px"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 12L17 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 8L13 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 20.2895V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H7.96125C7.35368 17 6.77906 17.2762 6.39951 17.7506L4.06852 20.6643C3.71421 21.1072 3 20.8567 3 20.2895Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Text streaming for LLMs</h3>
            <p className="mt-1 text-secondary">
              Create AI apps powered by the modern TypeScript syntax with disposable objects and async generators.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start flex-col ">
          <span className="text-rose-600 bg-rose-500/10 rounded-full w-[44px] h-[44px] flex items-center justify-center">
            <svg
              width="24px"
              height="24px"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 15.4V8.6C8 8.26863 8.26863 8 8.6 8H15.4C15.7314 8 16 8.26863 16 8.6V15.4C16 15.7314 15.7314 16 15.4 16H8.6C8.26863 16 8 15.7314 8 15.4Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 4.6V19.4C20 19.7314 19.7314 20 19.4 20H4.6C4.26863 20 4 19.7314 4 19.4V4.6C4 4.26863 4.26863 4 4.6 4H19.4C19.7314 4 20 4.26863 20 4.6Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M17 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M12 20V22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 20V22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 17H22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 12H22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M20 7H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 17H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 7H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
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
