import CodeSection from '../CodeSection';

interface Props {
  code: string;
  text: string;
}

const CreateInitUseSection = ({ code, text }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="text-center font-semibold text-lg mb-2">{text}</div>
      <CodeSection code={[code]} className="flex-1"></CodeSection>
    </div>
  );
};

export default CreateInitUseSection;
