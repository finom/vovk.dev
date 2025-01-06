import { ReactNode } from 'react';
import CodeBox from '../CodeBox';
import SplitSectionInfo from './SplitSectionInfo';

interface Props {
  left: ReactNode;
  right: ReactNode;
  reverse?: boolean;
}

const Arrow = ({ className }: { className: string }) => (
  <svg
    className={`text-current opacity-50 ${className} dark:text-white`}
    xmlns="http://www.w3.org/2000/svg"
    height="28"
    width="21"
    viewBox="0 0 384 512"
  >
    <path
      fill="currentColor"
      d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"
    />
  </svg>
);

const SplitSection = ({ left, right, reverse }: Props) => {
  return (
    <div
      className={`lg:flex max-w-screen-2xl mx-auto mt-40 gap-16 justify-between ${reverse ? 'flex-row-reverse' : ''}`}
    >
      <div className="flex-1 lg:w-1/2 flex flex-col">{left}</div>
      <div className="min-w-0 flex-1 flex flex-col self-center">{right}</div>
    </div>
  );
};

SplitSection.SplitSectionInfo = SplitSectionInfo;

export default SplitSection;
