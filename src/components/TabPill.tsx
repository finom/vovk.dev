import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  isActive: boolean;
  onClick: () => void;
  children: ReactNode;
}

const TabPill = ({ isActive, onClick, children }: Props) => {
  return (
    <div
      className={twMerge(
        `
      inline-block cursor-pointer text-sm mx-1 mb-2 
      bg-slate-800 dark:bg-indigo-700
      rounded-full px-3 py-0.5
      transition-colors
    `,
        isActive ? 'text-white' : 'text-slate-400'
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default TabPill;
