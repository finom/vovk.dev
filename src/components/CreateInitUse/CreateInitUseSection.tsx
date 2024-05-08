import { ReactNode } from 'react';
import CodeBox from '../CodeBox';
import IconWrapper from '../IconWrapper';

interface Props {
  children: ReactNode;
  title: string;
  description: string;
  number: number;
}

const CreateInitUseSection = ({ children, title, description, number }: Props) => {
  return (
    <div className="flex flex-col">
      <IconWrapper className="mx-auto mb-2 text-xl font-light">
        <span>{number}</span>
      </IconWrapper>
      <div className="text-center font-semibold text-lg mb-4">{title}</div>
      <div className="text-center mb-4">{description}</div>
      <CodeBox>{children}</CodeBox>
    </div>
  );
};

export default CreateInitUseSection;
