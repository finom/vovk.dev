import Image from 'next/image';
import svg from '../../../excalidraw/vovk-segments.svg';
import CodeBox from '@/components/CodeBox';
import DistributeCode from './DistributeCode.mdx';

const EasyToDistribute = () => {
  return (
    <div className="">
      <CodeBox className="w-8/12 m-auto">
        <DistributeCode />
      </CodeBox>
      <div className="mt-4">xxxx</div>
    </div>
  );
};

export default EasyToDistribute;
