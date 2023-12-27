import Image from 'next/image';
import WindowAlike from './WindowAlike';

const BasicDiagram = () => {
  return (
    <div className="mt-32">
      <div className="text-center">
        <h2 className="font-semibold text-3xl">The cheapest way to do things</h2>
        <p className="max-w-lg mx-auto mt-2 text-secondary mb-4">
          No more back-end or front-end development separation. Vovk imports specific metadata and typesusing "import
          type" from one environment to use in another seamlessly. Go full-stack with Vovk!
        </p>
      </div>
      <WindowAlike className="max-w-4xl mx-auto">
        <Image src="/vovk-basics.svg" width={1281} height={466.33} alt="Vovk Basics Diagram" />
      </WindowAlike>
    </div>
  );
};

export default BasicDiagram;
