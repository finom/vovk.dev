import DocsLink from '@/components/DocsLink';
import type { ReactNode } from 'react';

export interface Props {
  badge: string;
  title: string;
  children: ReactNode;
  docsLink?: string;
  docsLinkText?: string;
}

const SplitSectionInfo = ({ title, badge, children, docsLink, docsLinkText }: Props) => {
  return (
    <div className="flex items-center flex-wrap flex-1 mb-6">
      <div>
        <span className="text-rose-500 bg-rose-500/10 px-3 py-1 rounded-full text-xs uppercase font-medium tracking-wider">
          {badge}
        </span>
        <h2 className="font-semibold text-2xl mt-3">{title}</h2>
        <div className="mt-2 text-secondary">{children}</div>
        {!!docsLink && <DocsLink href={docsLink}>{docsLinkText}</DocsLink>}
      </div>
    </div>
  );
};

export default SplitSectionInfo;
