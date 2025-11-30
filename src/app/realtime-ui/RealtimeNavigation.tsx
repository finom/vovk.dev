import Link from 'next/link';
import { omitBy } from 'lodash';
import meta, { icons } from './_meta';

interface Props {
  thisArticle: string;
}

const RealtimeNavigation = ({ thisArticle }: Props) => {
  return (
    <nav>
      <ul className="x:[:is(ol,ul)_&]:my-[.75em] x:not-first:mt-[1.25em] x:list-disc x:ms-[1.5em]">
        {Object.entries(omitBy(meta, (_, k) => k.startsWith('#'))).map(([k, t]) => {
          const key = k as Exclude<keyof typeof meta, `#${string}`>;
          const title = t as string;
          let content;
          if (key === thisArticle) {
            content = <strong>{title} (this article)</strong>;
          } else {
            content = (
              <Link
                href={`/realtime-ui/${key}`}
                className="x:focus-visible:nextra-focus x:text-primary-600 x:underline x:hover:no-underline x:decoration-from-font x:[text-underline-position:from-font]"
              >
                {title}
              </Link>
            );
          }
          return (
            <li key={key} className="mb-2">
              {icons[key]} {content}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default RealtimeNavigation;
