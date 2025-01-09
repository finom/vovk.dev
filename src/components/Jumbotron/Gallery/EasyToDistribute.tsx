import Image from 'next/image';
import CodeBox from '@/components/CodeBox';
import DocsLink from '@/components/DocsLink';
import DistributeCode from './DistributeCode.mdx';

const EasyToDistribute = () => {
  return (
    <div className="pt-4">
      <h2 className="font-semibold text-2xl mb-4 text-center">Distribute the client library</h2>
      <CodeBox className="w-8/12 m-auto mb-4">
        <code>npm install my-client-library</code>
      </CodeBox>
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
