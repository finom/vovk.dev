import Image from 'next/image';
import svg from '../../../excalidraw/vovk-segments.svg';
import CodeBox from '@/components/CodeBox';
import CustomizeCode from './CustomizeCode.mdx';

const Customizable = () => {
  return (
    <div className="">
      <CodeBox className="w-8/12 m-auto">
        <CustomizeCode />
      </CodeBox>
      <div className="mt-4">xxxx</div>
    </div>
  );
};

export default Customizable;
