import Title from './Title';
import CodeBlock from '../CodeBlock';
import Clipboard from '../Clipboard';

interface Props {
  children: string;
}

const CodeBox = ({ children }: Props) => {
  return (
    <div className="relative bg-code h-full rounded-lg overflow-hidden border border-gray-300/20 dark:border-gray-700/20">
      <Title></Title>
      <Clipboard
        text={children}
        className="absolute top-1.5 right-2 text-gray-400 hover:text-gray-600 dark:text-gray-700 dark:hover:text-gray-400"
      />
      <CodeBlock className="text-sm">{children}</CodeBlock>
    </div>
  );
};

export default CodeBox;
