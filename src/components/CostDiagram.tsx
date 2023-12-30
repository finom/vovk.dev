import Image from 'next/image';
import WindowAlike from './WindowAlike';

const CostDiagram = () => {
  return (
    <div className="mt-32 px-5">
      <div className="text-center">
        <h2 className="font-semibold text-3xl">The cheapest way to do things</h2>
        <p className="max-w-5xl mx-auto mt-2 text-secondary mb-4">
          Vovk.ts offers a more cost-effective approach to project execution, reducing the time spent on implementation
          by up to 10%. This efficiency is achieved as developers focus on a unified code base, rather than dividing
          their attention between front-end and back-end tasks. Additionally, the project infrastructure becomes more
          economical, halving costs by eliminating the need for maintaining separate Node.js servers for different
          environments like staging and production. Furthermore, Vovk.ts eleminates monorepo hell in most cases.
        </p>
      </div>
      <WindowAlike className="max-w-[600px] mx-auto">
        <Image src="/vovk-cost.svg" width={700} height={350} alt="Vovk Cost" />
      </WindowAlike>
    </div>
  );
};

export default CostDiagram;
