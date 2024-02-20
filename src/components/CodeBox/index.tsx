import Title from './Title';
import CodeBlock from '../CodeBlock';

interface Props {
  children: string;
}

const CodeBox = ({ children }: Props) => {
  return (
    <div className="bg-code h-full rounded-lg overflow-hidden border border-gray-300/20 dark:border-gray-700/20">
      <Title></Title>
      <CodeBlock className="text-sm">{children}</CodeBlock>
    </div>
  );
};

export default CodeBox;
