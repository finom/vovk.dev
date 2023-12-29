import Image from 'next/image';
import WindowAlike from './WindowAlike';

const CostDiagram = () => {
  return (
    <div className="mt-32">
      <div className="text-center">
        <h2 className="font-semibold text-3xl">The cheapest way to do things</h2>
        <p className="max-w-3xl mx-auto mt-2 text-secondary mb-4">
          Vovk decreases amount of time you spend on project implementation up to 10% because developers don't split
          their attention on front-end and back-end. Project infrastructure is 2x cheaper because you don't need to pay
          for two separate servers for each environment (staging, production, etc).
        </p>
      </div>
      <WindowAlike className="max-w-[600px] mx-auto">
        <Image src="/vovk-cost.svg" width={700} height={350} alt="Vovk Cost" />
      </WindowAlike>
    </div>
  );
};

export default CostDiagram;
