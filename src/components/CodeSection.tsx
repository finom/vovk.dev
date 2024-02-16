import WindowAlike from '@/components/WindowAlike';
import SyntaxHighlighter from './SyntaxHighlighter';

interface Props {
  children: string;
  className?: string;
}

const CodeSection = ({ children, className }: Props) => {
  return (
    <WindowAlike className={className}>
      <SyntaxHighlighter>{children}</SyntaxHighlighter>
    </WindowAlike>
  );
};

export default CodeSection;
