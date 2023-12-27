import { ReactNode } from 'react';

export interface Props {
  badge: string;
  title: string;
  reverse: boolean;
  children: ReactNode;
}

const ExampleInfo = ({ reverse, title, badge, children }: Props) => {
  return (
    <div className="flex items-center flex-wrap flex-1">
      <div>
        <span className="text-rose-500 bg-rose-500/10 px-3 py-1 rounded-full text-xs uppercase font-medium tracking-wider">
          {badge}
        </span>
        <h2 className="font-semibold text-2xl mt-3">{title}</h2>
        <div className="mt-2 text-secondary">{children}</div>
        <a
          className="inline-flex items-center gap-2 border-b text-rose-500 text-sm mt-3 hover:border-rose-500"
          href="/docs"
        >
          <span>Read Docs</span>{' '}
          <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ExampleInfo;
