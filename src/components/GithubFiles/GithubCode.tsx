import GithubTabs from './GithubTabs';
import type { GithubFile } from '@/types';
import CodeBlock from './CodeBlock';
import { useId } from 'react';

interface Props {
  githubFiles: GithubFile[]
  owner: string;
  repo: string;
  ghRef: string;

}

const GithubCode = ({ githubFiles, owner, repo, ghRef }: Props) => {
  const id = useId(); // Ensure unique IDs for tabs
  return (
    <div className={`bg-code rounded-lg mt-4`} id={id}>
      <GithubTabs githubFiles={githubFiles} owner={owner} repo={repo} ghRef={ghRef} id={id} />
      {githubFiles.map(({ content }, i) => (
        <div key={i} className={`h-full github-tab-content ${i ? 'hidden' : ''}`} id={`tab-${id}-${i}`}>
          <CodeBlock lineNumbers>{content.trim()}</CodeBlock>
        </div>
      ))}
    </div>
  );
};

export default GithubCode;
