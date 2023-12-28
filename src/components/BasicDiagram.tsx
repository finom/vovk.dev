import Image from 'next/image';
import WindowAlike from './WindowAlike';

const BasicDiagram = () => {
  return (
    <div className="mt-32">
      <div className="text-center">
        <h2 className="font-semibold text-3xl">The cheapest way to do things</h2>
        <p className="max-w-lg mx-auto mt-2 text-secondary mb-4">
          Vovk decreases amount of time you spend on project implementation up to 10% because developers don't split
          their attention on front-end and back-end. Project infrastructure is 2x cheaper because you don't need to pay
          for separate two servers.
        </p>
      </div>
      <WindowAlike className="max-w-4xl mx-auto">
        <Image src="/vovk-basics.svg" width={1281} height={466.33} alt="Vovk Basics Diagram" />
      </WindowAlike>
    </div>
  );
};

export default BasicDiagram;
