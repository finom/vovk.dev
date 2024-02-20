import type { ReactNode } from 'react';
import CodeBox from '../CodeBox';
import IconWrapper from '../IconWrapper';

interface Props {
  children: string;
  title: ReactNode;
  description: ReactNode;
  icon: ReactNode;
}

const BonusFeaturesSection = ({ children, title, description, icon }: Props) => {
  return (
    <div className="flex flex-col">
      <IconWrapper className="m-auto mb-4">{icon}</IconWrapper>
      <div className="text-center font-semibold text-lg mb-4">{title}</div>
      <CodeBox>{children}</CodeBox>
      <div className="mt-4">{description}</div>
    </div>
  );
};

export default BonusFeaturesSection;
