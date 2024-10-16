import Image from 'next/image';
import Link from 'next/link';

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <style jsx>{`
        .jumbotron {
          position: relative;
          background-image: radial-gradient(rgba(128, 128, 128, 0.2) 10%, transparent 0);
          background-size: 20px 20px;
        }

        .jumbotron::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0.95) 100%);
          pointer-events: none; /* Ensure the pseudo-element doesn't interfere with pointer events */
        }

        .jumbotron:where(.dark, .dark *)::after {
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgb(17, 17, 17, 0.95) 100%);
        }

        h1 {
          background: -webkit-linear-gradient(#666060, #a7a1a1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        h1:where(.dark, .dark *) {
          background: -webkit-linear-gradient(#f43f5f, #ff67f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <div className="max-w-4xl text-center mx-auto pt-16 pb-36 px-5">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mt-8">RESTful RPC for Next.js</h1>
        <p className="mt-4 text-secondary md:text-xl">
          Transforms Next.js App Router into a powerful REST API platform with RPC integration
        </p>
        <div className="max-w-[450px] m-auto">
          <div className="justify-center mt-8 gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center z-10 relative">
              <Link
                className="min-w-8 bg-rose-500 justify-center inline-flex items-center gap-2 rounded-full py-3 px-6 text-white font-medium hover:bg-rose-700"
                href="https://github.com/finom/vovk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Github&nbsp;Repo</span>{' '}
                <svg
                  width={15}
                  height={15}
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <Link
                className="min-w-8 bg-rose-500 justify-center inline-flex items-center gap-2 rounded-full py-3 px-6 text-white font-medium hover:bg-rose-700"
                href="getting-started"
              >
                <span>Getting Started</span>{' '}
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
          </div>
        </div>
        {/* <div className="flex flex-col gap-4 md:flex-row md:gap-8 justify-center mt-6">
        <Link href="https://vovk-examples.vercel.app/" className="link" target="_blank">
          Interactive Examples
        </Link>
        <Link href="https://github.com/finom/vovk-react-native-example" className="link" target="_blank">
          React Native Example
        </Link>
        <Link href="https://github.com/finom/vovk-zod" className="link" target="_blank">
          Vovk-Zod
        </Link>
      </div> */}
      </div>
    </div>
  );
};

export default Jumbotron;
