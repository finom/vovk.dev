import { ReactNode } from 'react';
import CodeSection from './CodeSection';
import ExampleInfo from './ExampleInfo';

export interface ExampleProps {
  code: string[];
  badge: string;
  title: string;
  reverse: boolean;
  children: ReactNode;
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

const Example = ({ code, badge, title, children, reverse }: ExampleProps) => {
  const codeArr = code.length === 3 ? code.slice(0, 2) : code;
  return (
    <div
      className={`lg:flex max-w-screen-xl mx-auto mt-40 px-5 gap-16 justify-between ${
        reverse ? 'flex-row-reverse' : ''
      }`}
    >
      <div className="flex-1 lg:w-1/2 flex flex-col">
        <ExampleInfo badge={badge} title={title}>
          {children}
        </ExampleInfo>
        {code.length === 3 && (
          <>
            <div>
              <div className="flex justify-center py-6 relative">
                <Arrow className="rotate-[270deg] absolute -right-10 top-96" />
              </div>
              <CodeSection code={[code[2]]} />
            </div>
            <div className="flex justify-center py-6 lg:hidden">
              <Arrow className="rotate-180" />
            </div>
          </>
        )}
      </div>
      <div className="min-w-0 flex-1">
        {codeArr.map((section, index) => (
          <div key={index}>
            <CodeSection code={[section]} />
            {!!codeArr[index + 1] && (
              <div className="flex justify-center py-6">
                <Arrow className="rotate-180" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Example;
