import Image from 'next/image';
import svg from '../../../excalidraw/vovk-segments.svg';
import CodeBox from '@/components/CodeBox';
import DocsLink from '@/components/DocsLink';
import DistributeCode from './DistributeCode.mdx';

const EasyToDistribute = () => {
  return (
    <div className="pt-8">
      <h2 className="font-semibold text-2xl mb-3 text-center">How it works</h2>
      <CodeBox className="w-8/12 m-auto">
        <DistributeCode />
      </CodeBox>
      <div className="mt-8">
        Bundle and distribute your REST API client library with ease. Examples at this documentation utilize the
        vovk-examples package, bundled with Webpack, which accesses REST endpoints from the Examples Website API.
      </div>
      <DocsLink href="https://github.com/finom/vovk-react-native-example">See example</DocsLink>
    </div>
  );
};

export default EasyToDistribute;
