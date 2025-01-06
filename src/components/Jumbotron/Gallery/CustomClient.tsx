import Image from 'next/image';
import svg from '../../../excalidraw/vovk-schema.svg';

const CustomClient = () => {
  return (
    <div className="pt-8">
      <h2 className="font-semibold text-2xl mb-3 text-center">How it works</h2>

      <Image src={svg} alt="Multi-Segment" className="w-8/12 dark:invert m-auto" />
    </div>
  );
};

export default CustomClient;
