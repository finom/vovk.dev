import { twMerge } from 'tailwind-merge';
import Title from './Title';
import { ReactNode } from 'react';

interface Props {
  title?: string;
  className?: string;
  noClipboard?: boolean;
  children: ReactNode;
}

const CodeBox = ({ title, className, noClipboard, children }: Props) => {
  return (
    <div
      className={twMerge(
        `jsx-code-block relative bg-code h-full rounded-lg overflow-hidden border border-gray-300/20 dark:border-gray-700/20 ${className ?? ''}`
      )}
    >
      <style jsx>{`
        .jsx-code-block :global(pre) {
          contain: none;
        }
      `}</style>
      <Title>{title}</Title>
      <div className="nextra-code overflow-x-auto w-full relative py-2 px-3 text-xs">{children}</div>
    </div>
  );
};

export default CodeBox;
