import Image from 'next/image';
import WindowAlike from './WindowAlike';
import DocsLink from './DocsLink';

const VovkPattern = () => {
  return (
    <div className="mt-32 px-5">
      <div className="text-center mb-4">
        <h2 className="font-semibold text-3xl">The Vovk Architecture</h2>
        <p className="max-w-3xl mx-auto mt-2 text-secondary">
          Vovk.ts represents a groundbreaking shift in full-stack development, building upon the innovative foundations
          laid by Next.js and the collective efforts of the JavaScript community. Its capabilities, nearly all of which
          are owed to the open-source movement, showcase the remarkable progress and collaboration that have defined the
          modern era of software development.
        </p>
        <DocsLink href="https://docs.vovk.dev/docs/vovk-architecture" />
      </div>
      <WindowAlike className="max-w-screen-xl mx-auto">
        <Image src="/vovk-architecture.svg" width={1281} height={466.33} alt="The Vovk Architecture" />
      </WindowAlike>
      <div className="max-w-4xl mx-auto px-5 mt-20">
        <div className="text-center">
          <h2 className="font-semibold text-3xl">Modules Orchestration</h2>
          <p className="max-w-2xl mx-auto mt-2 text-secondary mb-4">
            A Vovk.ts application is split into virtual modules (that don't have a specific export entry point) that
            gives (almost) the final answer on how to structure a full-stack application.
          </p>
        </div>
        <WindowAlike>
          <pre>
            <code className="font-bold">
              {`/src/app/api/[[...]]/route.ts
/src/app/page.tsx
/src/vovk
    /vovk-metadata.json
    /app
        /AppWorkerService.ts
        /AppState.ts
    /auth
        /AuthController.ts
        /AuthService.ts
        /AuthState.ts
    /hello
        /HelloController.ts
        /HelloService.ts
        /HelloIsomorphicService.ts
        /HelloWorkerService.ts
        /HelloState.ts
    /user
        /UserController.ts
        /UserService.ts
        /UserIsomorphicService.ts
        /UserState.ts
    /post
        /PostController.ts
        /PostService.ts
        /PostIsomorphicService.ts
        /PostState.ts
    /comment
        /CommentController.ts
        /CommentService.ts
        /CommentState.ts`}
            </code>
          </pre>
        </WindowAlike>
        <p className="max-w-2xl mx-auto mt-4 text-secondary text-center">
          A module is either a model (user, comment, etc) or something else that can't be&nbsp;considered to be a model
          (auth, app settings etc). Every module has its own folder with a controller, service, state, etc, where all
          elements are optional.
        </p>
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="flex gap-4 items-start">
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
                  d="M3 19H12M21 19H12M12 19V13M12 13H18V5H6V13H12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M9 9.01L9.01 8.99889"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 9.01L12.01 8.99889"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-xl">Back-end Service</h3>
              <p className="mt-1 text-secondary">
                {' '}
                Back-end Service (or just "Service") is a static class that implements third-party API calls or performs
                requests do the project database.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
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
              <h3 className="font-semibold text-xl">Controller</h3>
              <p className="mt-1 text-secondary">
                {' '}
                Controller is a static class that defines API endpoints with decorators.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-rose-600 bg-rose-500/10 p-3 rounded-full">
              <svg
                width="24px"
                height="24px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="7"
                  height="5"
                  rx="0.6"
                  transform="matrix(0 -1 -1 0 22 21)"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></rect>
                <rect
                  width="7"
                  height="5"
                  rx="0.6"
                  transform="matrix(0 -1 -1 0 7 15.5)"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></rect>
                <rect
                  width="7"
                  height="5"
                  rx="0.6"
                  transform="matrix(0 -1 -1 0 22 10)"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></rect>
                <path
                  d="M17 17.5H13.5C12.3954 17.5 11.5 16.6046 11.5 15.5V8.5C11.5 7.39543 12.3954 6.5 13.5 6.5H17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></path>
                <path d="M11.5 12H7" stroke="currentColor" strokeWidth="1.5"></path>
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-xl">Isomorphic Service</h3>
              <p className="mt-1 text-secondary">
                {' '}
                Isomorphic Service is a static class with methods that implement "pure function" pattern, and they can
                be used by any part of the application.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
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
                  d="M8 15.4V8.6C8 8.26863 8.26863 8 8.6 8H15.4C15.7314 8 16 8.26863 16 8.6V15.4C16 15.7314 15.7314 16 15.4 16H8.6C8.26863 16 8 15.7314 8 15.4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M20 4.6V19.4C20 19.7314 19.7314 20 19.4 20H4.6C4.26863 20 4 19.7314 4 19.4V4.6C4 4.26863 4.26863 4 4.6 4H19.4C19.7314 4 20 4.26863 20 4.6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M17 4V2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 4V2"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path d="M7 4V2" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path
                  d="M7 20V22"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 20V22"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M17 20V22"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M20 17H22"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M20 12H22"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M20 7H22"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4 17H2"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4 12H2"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path d="M4 7H2" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-xl">Worker Service</h3>
              <p className="mt-1 text-secondary">
                {' '}
                Any Isomorphic Service can be turned into a Web Worker Service where you can perform heavy data
                manipulations in another browser thread.{' '}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
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
              <h3 className="font-semibold text-xl">State</h3>
              <p className="mt-1 text-secondary">
                {' '}
                Your application state where you clientize Controllers, promisify Worker Services and provide API to
                React components.{' '}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-rose-600 bg-rose-500/10 p-3 rounded-full">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20C7.35064 20 7.68722 19.9398 8 19.8293"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4.26392 15.6046C2.9243 14.9582 2.00004 13.587 2.00004 12C2.00004 10.7883 2.53877 9.70251 3.38978 8.96898"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3.42053 8.8882C3.1549 8.49109 3 8.01363 3 7.5C3 6.11929 4.11929 5 5.5 5C6.06291 5 6.58237 5.18604 7.00024 5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M7.23769 5.56533C7.08524 5.24215 7 4.88103 7 4.5C7 3.11929 8.11929 2 9.5 2C10.8807 2 12 3.11929 12 4.5V20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M8 20C8 21.1046 8.89543 22 10 22C11.1046 22 12 21.1046 12 20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 7C12 8.65685 13.3431 10 15 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M20.6102 8.96898C21.4612 9.70251 22 10.7883 22 12C22 12.7031 21.8186 13.3638 21.5 13.9379"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M20.5795 8.8882C20.8451 8.49109 21 8.01363 21 7.5C21 6.11929 19.8807 5 18.5 5C17.9371 5 17.4176 5.18604 16.9998 5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 4.5C12 3.11929 13.1193 2 14.5 2C15.8807 2 17 3.11929 17 4.5C17 4.88103 16.9148 5.24215 16.7623 5.56533"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M14 22C12.8954 22 12 21.1046 12 20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M20.5 20.5L22 22"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M16 18.5C16 19.8807 17.1193 21 18.5 21C19.1916 21 19.8175 20.7192 20.2701 20.2654C20.7211 19.8132 21 19.1892 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-xl">Use your imagination</h3>
              <p className="mt-1 text-secondary">
                {' '}
                This idea is not limited by the elements mentioned before, you can add whatever you want to the module
                folder: types, components or something new!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VovkPattern;
