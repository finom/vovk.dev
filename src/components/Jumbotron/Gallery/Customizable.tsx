import Image from 'next/image';
import svg from '../../../excalidraw/vovk-segments.svg';
import CodeBox from '@/components/CodeBox';
import CustomizeCode from './CustomizeCode.mdx';
import DocsLink from '@/components/DocsLink';

const Customizable = () => {
  return (
    <div className="pt-8">
      <h2 className="font-semibold text-2xl mb-3 text-center">How it works</h2>
      <CodeBox className="w-8/12 m-auto">
        <CustomizeCode />
      </CodeBox>
      <div className="mt-8">
        You can completely redefine the behavior of the generated library by implementing your own fetching function.
        This allows tight integration with your application's state logic or the addition of extra options.
      </div>

      <DocsLink href="https://github.com/finom/vovk-react-native-example">See example</DocsLink>
    </div>
  );
};

export default Customizable;
