import Title from './Title';
import CodeBlock from '../CodeBlock';
import Clipboard from '../Clipboard';

interface Props {
  className?: string;
  noClipboard?: boolean;
  children: string;
}

const CodeBox = ({ className, noClipboard, children }: Props) => {
  return (
    <div
      className={`relative bg-code h-full rounded-lg overflow-hidden border border-gray-300/20 dark:border-gray-700/20 ${className ?? ''}`}
    >
      <Title></Title>
      {!noClipboard && (
        <Clipboard
          text={children}
          className="absolute top-1.5 right-2 text-gray-400 hover:text-gray-600 dark:text-gray-700 dark:hover:text-gray-400"
        />
      )}
      <CodeBlock className="text-sm">{children}</CodeBlock>
    </div>
  );
};

export default CodeBox;
