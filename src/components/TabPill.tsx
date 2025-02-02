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
      bg-white border border-slate-300 dark:border-slate-600 dark:bg-slate-800
      rounded-full px-3 py-0.5
      transition-colors
    `,
        isActive
          ? 'text-black bg-slate-100 dark:bg-slate-800  dark:text-white'
          : 'text-slate-500 dark:text-slate-300  dark:bg-black'
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default TabPill;
