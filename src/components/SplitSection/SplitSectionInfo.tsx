import DocsLink from '@/components/DocsLink';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface Props {
  className?: string;
  titleClassName?: string;
  badge: string;
  title: string;
  children?: ReactNode;
  docsLink?: string;
  docsLinkText?: string;
}

const SplitSectionInfo = ({ className, titleClassName, title, badge, children, docsLink, docsLinkText }: Props) => {
  return (
    <div className={twMerge('flex items-center flex-wrap flex-1 mb-6', className)}>
      <div className="flex-1">
        <span className="text-rose-500 bg-rose-500/10 px-3 py-1 rounded-full text-xs uppercase font-medium tracking-wider">
          {badge}
        </span>
        <h2 className={twMerge('font-semibold text-2xl mt-3', titleClassName)}>{title}</h2>
        {children && <div className="mt-2 text-secondary">{children}</div>}
        {!!docsLink && <DocsLink href={docsLink}>{docsLinkText}</DocsLink>}
      </div>
    </div>
  );
};

export default SplitSectionInfo;
