import TabPill from '@/components/TabPill';
import { twMerge } from 'tailwind-merge';

export enum GalleryTabType {
  MULTI_SEGMENT = 'MULTI_SEGMENT',
  CUSTOMIZABLE = 'CUSTOMIZABLE',
  EASY_TO_DISTRIBUTE = 'EASY_TO_DISTRIBUTE',
  PRE_VALIDATION = 'PRE_VALIDATION',
  CUSTOM_CLIENT = 'CUSTOM_CLIENT',
  JSON_STREAMING = 'JSON_STREAMING',
}

interface Props {
  currentTab: GalleryTabType;
  setCurrentTab: (tab: GalleryTabType) => void;
}

const GalleryTabs = ({ currentTab, setCurrentTab }: Props) => {
  return (
    <div className="text-center">
      {Object.values(GalleryTabType).map((tab) => (
        <TabPill key={tab} isActive={currentTab === tab} onClick={() => setCurrentTab(tab)}>
          {
            {
              [GalleryTabType.MULTI_SEGMENT]: 'Multi Segment - Multi Backend',
              [GalleryTabType.CUSTOMIZABLE]: 'Customize',
              [GalleryTabType.EASY_TO_DISTRIBUTE]: 'Distribute',
              [GalleryTabType.PRE_VALIDATION]: 'Client-side Pre-validation',
              [GalleryTabType.CUSTOM_CLIENT]: 'Build Custom Clients',
              [GalleryTabType.JSON_STREAMING]: 'JSON Streaming for LLMs',
            }[tab]
          }
        </TabPill>
      ))}
    </div>
  );
};

export default GalleryTabs;
