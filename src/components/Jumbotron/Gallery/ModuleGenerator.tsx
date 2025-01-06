import Image from 'next/image';
import svg from '../../../excalidraw/vovk-generate.svg';

const ModuleGenerator = () => {
  return (
    <div className="dark:invert flex justify-center">
      <Image src={svg} alt="Multi-Segment" className="dark:invert block w-8/12 m-auto" />
    </div>
  );
};

export default ModuleGenerator;
