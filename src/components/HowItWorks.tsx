import Image from 'next/image';
import devSvg from '../excalidraw/vovk-dev.svg';
import generateSvg from '../excalidraw/vovk-generate.svg';
import SplitSection from './SplitSection';

const HowItWorks = () => {
  return (
    <div>
      <SplitSection
        left={
          <div className="flex items-stretch justify-center">
            <Image src={devSvg} alt="vovk dev" className="w-10/12 dark:invert" />
          </div>
        }
        right={
          <div className="flex items-stretch justify-center">
            <SplitSection.SplitSectionInfo badge="vovk dev" title="How it works">
              xxxxxx
            </SplitSection.SplitSectionInfo>
          </div>
        }
      />
      <SplitSection
        reverse
        left={
          <div className="flex items-stretch justify-center">
            <Image src={generateSvg} alt="vovk generate" className="w-10/12 dark:invert" />
          </div>
        }
        right={
          <div className="flex items-stretch justify-center">
            <SplitSection.SplitSectionInfo badge="vovk dev" title="How it works">
              xxxxxx
            </SplitSection.SplitSectionInfo>
          </div>
        }
      />
    </div>
  );
};

export default HowItWorks;
