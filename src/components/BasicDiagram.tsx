import Image from 'next/image';
import WindowAlike from './WindowAlike';

const BasicDiagram = () => {
  return (
    <div className="mt-32">
      <div className="text-center">
        <h2 className="font-semibold text-3xl">Meta-isomorphic paradigm</h2>
        <p className="max-w-3xl mx-auto mt-2 text-secondary mb-4">
          Import and use back-end code in front-end, thanks to <code>import type</code> and{' '}
          <code>vovk-metadata.json</code> that contains required data to build main-thread client-side library for free.
        </p>
      </div>
      <WindowAlike className="max-w-4xl mx-auto">
        <Image src="/vovk-basics.svg" width={1281} height={466.33} alt="Vovk Basics Diagram" />
      </WindowAlike>
    </div>
  );
};

export default BasicDiagram;
