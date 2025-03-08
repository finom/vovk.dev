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
        `[&_pre]:contain-none relative bg-code h-full rounded-lg overflow-hidden border border-gray-300/20 dark:border-gray-700/20 ${className ?? ''}`
      )}
    >
      <Title>{title}</Title>
      <div className="nextra-code overflow-x-auto w-full relative py-2 px-3 text-xs">{children}</div>
    </div>
  );
};

export default CodeBox;
