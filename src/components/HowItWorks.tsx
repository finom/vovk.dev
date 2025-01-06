import Image from 'next/image';
import devSvg from '../excalidraw/vovk-dev.svg';
import SplitSection from './SplitSection';

const HowItWorks = () => {
  return (
    <SplitSection
      reverse
      left={
        <div className="flex items-stretch justify-center">
          <Image src={devSvg} alt="vovk dev" className="w-10/12 dark:invert" />
        </div>
      }
      right={
        <div className="flex items-stretch justify-center">
          <SplitSection.SplitSectionInfo badge="vovk dev" title="How it works">
            NPM script <code>dev</code> starts the Next.js development server with and Vovk.ts watcher in parallel with{' '}
            <code>concurrently</code>. When the watcher detects changes in route.ts or a controller, it makes an HTTP
            request to the corresponding schema endpoint to update the schema that is stored at{' '}
            <code>project-root/.vovk-schema</code> folder that needs to be committed. Schema is updated every time when
            controller list is updated or a method is added, removed or modified. Client is updated only when the list
            of controllers is updated.
          </SplitSection.SplitSectionInfo>
        </div>
      }
    />
  );
};

export default HowItWorks;
