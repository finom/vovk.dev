export enum GalleryTabType {
  MULTI_SEGMENT = 'MULTI_SEGMENT',
  MODULE_GENERATOR = 'MODULE_GENERATOR',
  CUSTOMIZABLE = 'CUSTOMIZABLE',
  EASY_TO_DISTRIBUTE = 'EASY_TO_DISTRIBUTE',
  PRE_VALIDATION = 'PRE_VALIDATION',
  CUSTOM_CLIENT = 'CUSTOM_CLIENT',
  JSON_STREAMING = 'JSON_STREAMING',
}

interface Props {
  currentTab: GalleryTabType;
}

const GalleryTabs = () => {
  return (
    <div>
      {Object.values(GalleryTabType).map((tab) => (
        <div key={tab}>
          {
            {
              [GalleryTabType.MULTI_SEGMENT]: 'Multi Segment - Multi Backend',
              [GalleryTabType.MODULE_GENERATOR]: 'Module Generator',
              [GalleryTabType.CUSTOMIZABLE]: 'Customize',
              [GalleryTabType.EASY_TO_DISTRIBUTE]: 'Distribute',
              [GalleryTabType.PRE_VALIDATION]: 'Client-side Pre-validation',
              [GalleryTabType.CUSTOM_CLIENT]: 'Build Custom Clients',
              [GalleryTabType.JSON_STREAMING]: 'JSON Streaming for LLMs',
            }[tab]
          }
        </div>
      ))}
    </div>
  );
};

export default GalleryTabs;
