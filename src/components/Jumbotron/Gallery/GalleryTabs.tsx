import TabPill from '@/components/TabPill';

export enum GalleryTabType {
  MULTI_SEGMENT = 'MULTI_SEGMENT',
  PRE_VALIDATION = 'PRE_VALIDATION',
  CUSTOMIZABLE = 'CUSTOMIZABLE',
  EASY_TO_DISTRIBUTE = 'EASY_TO_DISTRIBUTE',
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
              [GalleryTabType.MULTI_SEGMENT]: 'Multi-segment',
              [GalleryTabType.PRE_VALIDATION]: 'Client-side pre-validation',
              [GalleryTabType.CUSTOMIZABLE]: 'Customize your RPC',
              [GalleryTabType.EASY_TO_DISTRIBUTE]: 'Distribute the library',
              [GalleryTabType.CUSTOM_CLIENT]: 'Build custom clients',
              [GalleryTabType.JSON_STREAMING]: 'JSON Streaming for LLMs',
            }[tab]
          }
        </TabPill>
      ))}
    </div>
  );
};

export default GalleryTabs;
