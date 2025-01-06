import Image from 'next/image';
import svg from '../../../excalidraw/vovk-segments.svg';
import Link from 'next/link';
import OpenAiExample from './OpenAiExample';
import OpenAiCode1 from './OpenAiCode1.mdx';
import CodeBlock from '@/components/_CodeBlock';
import CodeBox from '@/components/CodeBox';

const Streaming = () => {
  return (
    <div className="">
      Vovk.ts meets the contemporary demand for streaming responses in AI client libraries, leveraging modern TypeScript
      syntax. Explore how it implements OpenAI chat completion with response streaming:
      <div className="live-example my-6">
        <OpenAiExample />
      </div>
      Check the full code of this example on the{' '}
      <Link href="https://vovk-examples.vercel.app/openai" target="_blank" className="link">
        examples website
      </Link>
      . You might also find other streaming examples interesting:
      <ul className="list-disc pl-6 mt-2">
        <li>
          <Link href="https://vovk-examples.vercel.app/stream" target="_blank" className="link">
            Stream Example
          </Link>{' '}
          &ndash; a basic example of response streaming.
        </li>
        <li>
          <Link href="https://vovk-examples.vercel.app/stream" target="_blank" className="link">
            Stream using Response Object
          </Link>{' '}
          &ndash; an example that utilizes the StreamResponse class instead of generators for more control over the
          code.
        </li>
      </ul>
    </div>
  );
};

export default Streaming;
