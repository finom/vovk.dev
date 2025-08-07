import GithubTabs from './GithubTabs';
import type { GithubFile } from '@/types';
import CodeBlock from './CodeBlock';

interface Props {
  githubFiles: GithubFile[]
  owner: string;
  repo: string;
  ghRef: string;

}

const GithubCode = ({ githubFiles, owner, repo, ghRef }: Props) => {
  return (
    <div className={`bg-code rounded-lg mt-4`}>
      <GithubTabs githubFiles={githubFiles} owner={owner} repo={repo} ghRef={ghRef} />
      {githubFiles.map(({ content }, i) => (
        <div key={i} className={`h-full github-tab-content ${i ? 'hidden' : ''}`} id={`tab${i}`}>
          <CodeBlock lineNumbers>{content.trim()}</CodeBlock>
        </div>
      ))}
    </div>
  );
};

export default GithubCode;
