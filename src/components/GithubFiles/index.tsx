import { getGithubFiles } from 'vovk-examples';
import GithubCode from './GithubCode';

interface Props {
  paths: string[];
  owner?: string;
  repo?: string;
  ghRef?: string;
}

export default async function GithubFiles({ paths, owner = 'finom', repo = 'vovk-examples', ghRef = 'main' }: Props) {
  const githubFiles = await getGithubFiles(paths, {  owner,  repo, ref: ghRef, });
  return <GithubCode githubFiles={githubFiles} owner={owner} repo={repo} ghRef={ghRef} />;
}
