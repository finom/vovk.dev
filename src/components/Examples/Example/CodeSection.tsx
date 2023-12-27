import WindowAlike from '@/components/WindowAlike';
import SyntaxHighlighter from './SyntaxHighlighter';

interface Props {
  code: string[];
}

const CodeSection = ({ code }: Props) => {
  return (
    <WindowAlike>
      <SyntaxHighlighter>{code}</SyntaxHighlighter>
    </WindowAlike>
  );
};

export default CodeSection;
