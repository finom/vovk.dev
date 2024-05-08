import Title from './Title';
import { ReactNode } from 'react';

interface Props {
  className?: string;
  noClipboard?: boolean;
  children: ReactNode;
}

const CodeBox = ({ className, noClipboard, children }: Props) => {
  return (
    <div
      className={`jsx-code-block relative bg-code h-full rounded-lg overflow-hidden border border-gray-300/20 dark:border-gray-700/20 ${className ?? ''}`}
    >
      <style jsx>{`
        .jsx-code-block :global(pre) {
          contain: none;
        }
      `}</style>
      <Title></Title>
      <div className="overflow-x-auto w-full relative py-2">{children}</div>
    </div>
  );
};

export default CodeBox;
