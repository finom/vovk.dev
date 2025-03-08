import { MetaRecord } from 'nextra';
import { Cards } from 'nextra/components';
import { ReactElement, ReactNode } from 'react';

interface Props {
  meta: MetaRecord;
  icons: Record<string, ReactElement>;
  hrefPrefix?: string;
}

const DocIndexCards = ({ meta, icons, hrefPrefix }: Props) => {
  return (
    <Cards>
      {Object.entries(meta).map(([key, value]) => (
        <Cards.Card
          key={key}
          title={
            typeof value === 'string' ? value : 'title' in value ? ((value.title as string) ?? 'No title') : 'No title'
          }
          href={`/${[hrefPrefix, key].filter(Boolean).join('/')}`}
          icon={icons[key]}
        />
      ))}
    </Cards>
  );
};

export default DocIndexCards;
