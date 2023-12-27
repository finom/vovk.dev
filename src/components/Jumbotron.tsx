import Image from 'next/image';

const Jumbotron = () => {
  return (
    <div className="max-w-2xl text-center mx-auto py-16 px-5">
      <span className="p-4  text-white inline-flex rounded-full ">
        <Image src="/vovk-logo.png" width={180} height={240} alt="Vovk Logo" />
      </span>
      <h1 className="text-3xl md:text-6xl font-bold tracking-tight mt-2">
        Build your Next<span className="opacity-10">.js</span> app with Vovk
      </h1>
      <p className="mt-3 text-secondary md:text-lg">Join the Next iteration of web technology</p>
      <div className="flex justify-center flex-col md:flex-row mt-5 gap-3">
        <span className="bg-rose-100 flex gap-5 items-center justify-between py-3 px-5 rounded-full">
          <code className="text-rose-900 text-left whitespace-nowrap overflow-hidden overflow-ellipsis">
            npm i vovk
          </code>{' '}
          <span className="text-rose-900">
            <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </span>
        <a
          className="bg-rose-500 justify-center inline-flex items-center gap-2 rounded-full py-3 px-6 text-white font-medium hover:bg-rose-700"
          href="/docs"
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
