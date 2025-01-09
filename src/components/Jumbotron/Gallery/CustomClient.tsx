import Image from 'next/image';
import lightSvg from '../../../excalidraw/vovk-languages-light.svg';
import darkSvg from '../../../excalidraw/vovk-languages-dark.svg';
import DocsLink from '@/components/DocsLink';

const CustomClient = () => {
  return (
    <div className="pt-4">
      <h2 className="font-semibold text-2xl mb-8 text-center">Build RPC library for any language</h2>

      <div className="max-w-[80%] m-auto">
        <Image src={lightSvg} alt="Multi-Segment" className="dark:hidden" />
        <Image src={darkSvg} alt="Multi-Segment" className="hidden dark:block" />
      </div>
      <p className="mt-8">
        The <code>dev</code> script generates JSON files with the API schema. These files can be used to generate
        libraries for the backend in any language.
      </p>
      <DocsLink href="https://github.com/finom/vovk-react-native-example">Read more (TODO)</DocsLink>
    </div>
  );
};

export default CustomClient;
