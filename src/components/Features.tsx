import Link from 'next/link';
import IconWrapper from './IconWrapper';

/*
With Vovk.ts you get most of the features available at well-known RPC frameworks such as tRPC also:
<br />
- RESTful API making it easy to use with any HTTP client (e.g., curl, Postman, or libraries in any language)
- Multi-segment architecture that allows to split back-end into smaller edge functions
- Client-side validation
- Full OpenAPI support and integration with Scalar to build RESTful API documentation with minimal effort
- Type-safe cross-language RPC, supporting TypeScript, Python/mypy and other languages in the future
- Service-controller architecture inspired by NestJS
- Server-side generated endpoints to serve static JSON responses
- Customizable RPC client
- Ability to pack and distribute the RPC library
*/

const SolvedProblems = () => {
  return (
    <div className="mt-4 max-w-(--breakpoint-lg) mx-auto">
      <h2 className="text-center text-3xl font-semibold mb-4">Features</h2>
      <p className="text-center text-secondary mb-8 max-w-[900px] mx-auto">
        With Vovk.ts you get most of the features available at well-known RPC frameworks such as tRPC, including
        server-side validation, type-safety, React Query support, and more. It uses different approaches that extend
        beyond traditional RPC frameworks to provide a more flexible and powerful development experience.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 text-secondary gap-10">
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
            <h3 className="font-semibold text-xl">RESTful API</h3>
            <p className="mt-1 text-secondary">
              The server-side code implements well-known RESTful API conventions, making it easy to use with any HTTP
              client (e.g., curl, Postman, or libraries in any language).{' '}
            </p>
          </div>
        </div>
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
            <h3 className="font-semibold text-xl">Multi-segment architecture</h3>
            <p className="mt-1 text-secondary">
              {' '}
              The multi-segment architecture allows you to split your back-end into smaller edge functions for faster
              cold starts, performant execution and effecient code splitting.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start flex-col ">
          <span className="text-rose-600 bg-rose-500/10 justify-center flex font-extrabold items-center rounded-full text-[10px] w-[44px] h-[44px]">
            <svg
              width="24px"
              height="24px"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="currentColor"
            >
              <path
                d="M8.5 11.5L11.5 14.5L16.5 9.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 18L3.13036 4.91253C3.05646 4.39524 3.39389 3.91247 3.90398 3.79912L11.5661 2.09641C11.8519 2.03291 12.1481 2.03291 12.4339 2.09641L20.096 3.79912C20.6061 3.91247 20.9435 4.39524 20.8696 4.91252L19 18C18.9293 18.495 18.5 21.5 12 21.5C5.5 21.5 5.07071 18.495 5 18Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Client-side validation</h3>
            <p className="mt-1 text-secondary">
              {' '}
              The RPC client validates the request before sending it to the server. This allows you to catch errors
              early and avoid unnecessary network requests.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start flex-col ">
          <span className="text-rose-600 bg-rose-500/10 rounded-full w-[44px] h-[44px] items-center justify-center flex">
            <svg width="42px" height="42px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.66,15.983a.938.938,0,0,1,.977-.976.976.976,0,1,1-.977.976Z" fill="currentColor" />
              <path d="M15.031,15.983a.938.938,0,0,1,.977-.976.976.976,0,1,1-.977.976Z" fill="currentColor" />
              <path d="M18.4,15.983a.938.938,0,0,1,.977-.976.976.976,0,1,1-.977.976Z" fill="currentColor" />
              <path
                d="M7.619,16.89V15.142A2.824,2.824,0,0,0,8.5,15a1.126,1.126,0,0,0,.439-.441,2.1,2.1,0,0,0,.254-.776,9.08,9.08,0,0,0,.055-1.216,10.547,10.547,0,0,1,.123-1.97,1.847,1.847,0,0,1,.446-.9,1.72,1.72,0,0,1,.81-.552,4.788,4.788,0,0,1,1.316-.131h.363v1.437a3.177,3.177,0,0,0-.977.091.63.63,0,0,0-.319.277,3.372,3.372,0,0,0-.1.941q0,.459-.062,1.741a4.639,4.639,0,0,1-.178,1.169,2.435,2.435,0,0,1-.367.739,2.939,2.939,0,0,1-.682.6,2.432,2.432,0,0,1,.662.579,2.377,2.377,0,0,1,.394.8,5.8,5.8,0,0,1,.178,1.267q.048,1.209.048,1.544a3.034,3.034,0,0,0,.11.932.694.694,0,0,0,.333.288,2.927,2.927,0,0,0,.963.1v1.486h-.363a3.843,3.843,0,0,1-1.292-.192A1.905,1.905,0,0,1,9.82,22.3a1.875,1.875,0,0,1-.456-.9,8.724,8.724,0,0,1-.117-1.686,8.414,8.414,0,0,0-.11-1.741,1.553,1.553,0,0,0-.456-.834A2.106,2.106,0,0,0,7.619,16.89Z"
                fill="currentColor"
              />
              <path
                d="M23.285,17.143a1.553,1.553,0,0,0-.456.834,8.414,8.414,0,0,0-.11,1.741A8.724,8.724,0,0,1,22.6,21.4a1.875,1.875,0,0,1-.456.9,1.905,1.905,0,0,1-.833.521,3.843,3.843,0,0,1-1.292.192h-.363V21.53a2.927,2.927,0,0,0,.963-.1.694.694,0,0,0,.333-.288,3.034,3.034,0,0,0,.11-.932q0-.335.048-1.544A5.8,5.8,0,0,1,21.29,17.4a2.377,2.377,0,0,1,.394-.8,2.432,2.432,0,0,1,.662-.579,2.939,2.939,0,0,1-.682-.6,2.435,2.435,0,0,1-.367-.739,4.639,4.639,0,0,1-.178-1.169q-.062-1.282-.062-1.741a3.372,3.372,0,0,0-.1-.941.63.63,0,0,0-.319-.277,3.177,3.177,0,0,0-.977-.091V9.016h.363a4.788,4.788,0,0,1,1.316.131,1.72,1.72,0,0,1,.81.552,1.847,1.847,0,0,1,.446.9,10.547,10.547,0,0,1,.123,1.97,9.08,9.08,0,0,0,.055,1.216,2.1,2.1,0,0,0,.254.776,1.126,1.126,0,0,0,.439.441,2.824,2.824,0,0,0,.883.144V16.89A2.106,2.106,0,0,0,23.285,17.143Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">OpenAPI support</h3>
            <p className="mt-1 text-secondary">
              The framework provides support for OpenAPI, allowing you to generate API documentation automatically using
              Scalar or any other OpenAPI doc generator.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start flex-col ">
          <span className="text-rose-600 bg-rose-500/10 rounded-full w-[44px] h-[44px] items-center justify-center flex">
            <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 2.5H7M4.5 4V1.5C4.5 0.947715 4.94772 0.5 5.5 0.5H9.5C10.0523 0.5 10.5 0.947715 10.5 1.5V6.5C10.5 7.05228 10.0523 7.5 9.5 7.5H5.5C4.94772 7.5 4.5 7.94772 4.5 8.5V13.5C4.5 14.0523 4.94772 14.5 5.5 14.5H9.5C10.0523 14.5 10.5 14.0523 10.5 13.5V11M8 4.5H1.5C0.947715 4.5 0.5 4.94772 0.5 5.5V10.5C0.5 11.0523 0.947715 11.5 1.5 11.5H4.5M7 10.5H13.5C14.0523 10.5 14.5 10.0523 14.5 9.5V4.5C14.5 3.94772 14.0523 3.5 13.5 3.5H10.5M8 12.5H9"
                stroke="currentColor"
                strokeWidth="0.8"
              />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Cross-language type-safe RPC</h3>
            <p className="mt-1 text-secondary">
              {' '}
              The framework automatically builds type-safe RPC library for TypeScript and Python/mypy. Other languages
              are coming soon.
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
            <h3 className="font-semibold text-xl">Code splitting</h3>
            <p className="mt-1 text-secondary">
              Back-end apps built with Vovk.ts utilise service-controller-repository pattern to split the code into
              business logic and REST API definition.
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
                d="M3 7L6.5 9M21 17L17.5 15M12 12L6.5 9M12 12L6.5 15M12 12V5M12 12V18.5M12 12L17.5 15M12 12L17.5 9M12 2V5M12 22V18.5M21 7L17.5 9M3 17L6.5 15M6.5 9L3 10M6.5 9L6 5.5M6.5 15L3 14M6.5 15L6 18.5M12 5L9.5 4M12 5L14.5 4M12 18.5L14.5 20M12 18.5L9.5 20M17.5 15L18 18.5M17.5 15L21 14M17.5 9L21 10M17.5 9L18 5.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Statically generated endpoints</h3>
            <p className="mt-1 text-secondary">
              Each segment can be turned into a static segment that serves static JSON responses that are generated at
              build time for the lowest latency.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start flex-col ">
          <span className="text-rose-600 bg-rose-500/10 rounded-full w-[44px] h-[44px] flex items-center justify-center">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0503 10.6066L2.97923 17.6777C2.19818 18.4587 2.19818 19.725 2.97923 20.5061V20.5061C3.76027 21.2871 5.0266 21.2871 5.80765 20.5061L12.8787 13.435"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.0502 10.6066C9.20638 8.45358 9.37134 5.6286 11.1109 3.88909C12.8504 2.14957 16.0606 1.76777 17.8284 2.82843L14.7877 5.8691L14.5051 8.98014L17.6161 8.69753L20.6568 5.65685C21.7175 7.42462 21.3357 10.6349 19.5961 12.3744C17.8566 14.1139 15.0316 14.2789 12.8786 13.435"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Customizable RPC client</h3>
            <p className="mt-1 text-secondary">
              The generated TypeScript library can be customized to suit your needs. You can change the way the data is
              requested, add custom options to the RPC methods, and more.
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
                d="M2.6954 7.18536L11.6954 11.1854L12.3046 9.81464L3.3046 5.81464L2.6954 7.18536ZM12.75 21.5V10.5H11.25V21.5H12.75ZM12.3046 11.1854L21.3046 7.18536L20.6954 5.81464L11.6954 9.81464L12.3046 11.1854Z"
                fill="currentColor"
              />
              <path
                d="M3 17.1101V6.88992C3 6.65281 3.13964 6.43794 3.35632 6.34164L11.7563 2.6083C11.9115 2.53935 12.0885 2.53935 12.2437 2.6083L20.6437 6.34164C20.8604 6.43794 21 6.65281 21 6.88992V17.1101C21 17.3472 20.8604 17.5621 20.6437 17.6584L12.2437 21.3917C12.0885 21.4606 11.9115 21.4606 11.7563 21.3917L3.35632 17.6584C3.13964 17.5621 3 17.3472 3 17.1101Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 4.5L16.1437 8.34164C16.3604 8.43794 16.5 8.65281 16.5 8.88992V12.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Pack and distribute</h3>
            <p className="mt-1 text-secondary">
              The client can be packed and distributed as a standalone NPM or PyPI package, allowing you to share your
              RPC library with other projects or teams easily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolvedProblems;
