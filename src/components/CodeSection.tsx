import WindowAlike from '@/components/WindowAlike';
import SyntaxHighlighter from './SyntaxHighlighter';

interface Props {
  code: string[];
  className?: string;
}

const CodeSection = ({ code, className }: Props) => {
  return (
    <WindowAlike className={className}>
      <SyntaxHighlighter>{code}</SyntaxHighlighter>
    </WindowAlike>
  );
};

export default CodeSection;
