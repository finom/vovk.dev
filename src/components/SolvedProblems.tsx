const SolvedProblems = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 max-w-screen-xl mx-auto gap-10 mt-10 px-5">
      <div className="flex gap-4 items-start flex-col ">
        <span className="text-rose-600 bg-rose-500/10 p-3 rounded-full">
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
        </span>
        <div>
          <h3 className="font-semibold text-xl">One app on one port</h3>
          <p className="mt-1 text-secondary">
            {' '}
            Thanks to Next.js App Router you get great React framework. Vovk.ts adds structure for back-end code and
            something more and simplifies deployment.
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-start flex-col ">
        <span className="text-rose-600 bg-rose-500/10 p-3 rounded-full">
          <svg
            width="24px"
            height="24px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" y="2" width="7" height="5" rx="0.6" stroke="currentColor" strokeWidth="1.5"></rect>
            <rect x="8.5" y="17" width="7" height="5" rx="0.6" stroke="currentColor" strokeWidth="1.5"></rect>
            <rect x="14" y="2" width="7" height="5" rx="0.6" stroke="currentColor" strokeWidth="1.5"></rect>
            <path
              d="M6.5 7V10.5C6.5 11.6046 7.39543 12.5 8.5 12.5H15.5C16.6046 12.5 17.5 11.6046 17.5 10.5V7"
              stroke="currentColor"
              strokeWidth="1.5"
            ></path>
            <path d="M12 12.5V17" stroke="currentColor" strokeWidth="1.5"></path>
          </svg>
        </span>
        <div>
          <h3 className="font-semibold text-xl">Meta-isomorphism</h3>
          <p className="mt-1 text-secondary">
            {' '}
            "Run" back-end code on the front-end thanks to the new idea to read controller metadata from a JSON file and
            read types using `import type`
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-start flex-col ">
        <span className="text-rose-600 bg-rose-500/10 p-3 rounded-full">
          <svg
            width="24px"
            height="24px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path d="M15.5 6.5L8.5 10.5" stroke="currentColor" strokeWidth="1.5"></path>
            <path d="M8.5 13.5L15.5 17.5" stroke="currentColor" strokeWidth="1.5"></path>
          </svg>
        </span>
        <div>
          <h3 className="font-semibold text-xl">Shared code</h3>
          <p className="mt-1 text-secondary">
            {' '}
            Vovk.ts answers The Ultimate Question of Full-Stack development: "Where to store JS used by back-end and
            front-end?" introducing so-called Isomorphic Services
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-start flex-col ">
        <span className="text-rose-600 bg-rose-500/10 p-3 rounded-full">
          <svg
            width="24px"
            height="24px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 6L10 18.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M6.5 8.5L3 12L6.5 15.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M17.5 8.5L21 12L17.5 15.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
        <div>
          <h3 className="font-semibold text-xl">Any state library</h3>
          <p className="mt-1 text-secondary">
            {' '}
            Use your favourite state library like Redux, Zustand, Recoil, Jotai, etc. Vovk.ts does not require any
            specific library.
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-start flex-col ">
        <span className="text-rose-600 bg-rose-500/10 p-3 rounded-full">
          <svg
            width="24px"
            height="24px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5714 15.0036L15.4286 16.8486C15.4286 16.8486 19.2857 17.6678 19.2857 19.6162C19.2857 21 17.5714 21 17.5714 21H13L10.75 19.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M9.42864 15.0036L8.5715 16.8486C8.5715 16.8486 4.71436 17.6678 4.71436 19.6162C4.71436 21 6.42864 21 6.42864 21H8.50007L10.7501 19.75L13.5001 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 15.9261C3 15.9261 5.14286 15.4649 6.42857 15.0036C7.71429 8.54595 11.5714 9.00721 12 9.00721C12.4286 9.00721 16.2857 8.54595 17.5714 15.0036C18.8571 15.4649 21 15.9261 21 15.9261"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
        <div>
          <h3 className="font-semibold text-xl">The New Architecture</h3>
          <p className="mt-1 text-secondary">
            {' '}
            Vovk introduces "The Vovk Architecture" that gives recommendation on how to structure your Back-end
            Services, Controllers, Client State etc.
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-start flex-col ">
        <span className="text-rose-600 bg-rose-500/10 p-3 rounded-full">
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
          <h3 className="font-semibold text-xl">No dependencies </h3>
          <p className="mt-1 text-secondary">
            {' '}
            Vovk does not depend on any other library besides some types from Next.js. It's just a wrapper around the
            documented Next.js API.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolvedProblems;
