import Image from 'next/image';
import svg from '../../../excalidraw/vovk-schema.svg';

const CustomClient = () => {
  return (
    <div className="dark:invert flex justify-center">
      <Image src={svg} alt="Multi-Segment" className="w-8/12" />
    </div>
  );
};

export default CustomClient;
