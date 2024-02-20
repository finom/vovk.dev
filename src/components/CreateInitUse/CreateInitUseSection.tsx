import CodeBox from '../CodeBox';
import IconWrapper from '../IconWrapper';

interface Props {
  children: string;
  text: string;
  number: number;
}

const CreateInitUseSection = ({ children, text, number }: Props) => {
  return (
    <div className="flex flex-col">
      <IconWrapper className="mx-auto mb-2 text-xl font-light">
        <span>{number}</span>
      </IconWrapper>
      <div className="text-center font-semibold text-lg mb-4">{text}</div>
      <CodeBox>{children}</CodeBox>
    </div>
  );
};

export default CreateInitUseSection;
