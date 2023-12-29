import Image from 'next/image';
import Clipboard from './Clipboard';

const Jumbotron = () => {
  return (
    <div className="max-w-3xl text-center mx-auto py-16 px-5">
      <span className="p-4  text-white inline-flex rounded-full ">
        <Image src="/vovk-logo.png" width={180} height={240} alt="Vovk Logo" />
      </span>
      <h1 className="text-3xl md:text-6xl font-bold tracking-tight mt-2">
        Build your Next<span className="opacity-10">.js</span> app with Vovk
      </h1>
      <p className="mt-3 text-secondary md:text-2xl hidden">The Next iteration of web technology</p>
      <div className="justify-center mt-5 gap-3">
        <span className="bg-rose-100 flex max-w-[695px] gap-5 items-center justify-between py-3 px-5 rounded-full">
          <code className="text-rose-900 text-left whitespace-nowrap overflow-x-auto">
            npx create-next-app -e https://github.com/finom/vovk-hello-world
          </code>{' '}
          <Clipboard />
        </span>
        <br />
        <a
          className="bg-rose-500 justify-center inline-flex items-center gap-2 rounded-full py-3 px-6 text-white font-medium hover:bg-rose-700"
          href="https://docs.vovk.dev"
          target="_blank"
        >
          <span>Documentation</span>{' '}
          <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
