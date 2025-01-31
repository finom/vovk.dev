import { ReactNode } from 'react';

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`
      bg-linear-to-br from-[#f2f2fd] to-[#f7f7ff]
      dark:bg-gray-950 dark:text-white dark:[background-image:none]
      p-[3px] flex items-center justify-between w-full py-1`}
    >
      <div className="flex gap-[4px] ml-2 py-1">
        <div className="rounded-full h-[0.7rem] w-[0.7rem] bg-[#EB6B5E] dark:bg-white/20" />
        <div className="rounded-full h-[0.7rem] w-[0.7rem] bg-[#F3BD50] dark:bg-white/20" />
        <div className="rounded-full h-[0.7rem] w-[0.7rem] bg-[#62C454] dark:bg-white/20" />
      </div>
      <div className="pr-2 text-xs text-gray-900 dark:text-gray-400">{children}</div>
    </div>
  );
};

export default Title;
