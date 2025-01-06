import { useState } from 'react';
import GalleryTabs, { GalleryTabType } from './GalleryTabs';
import MultiSegment from './MultiSegment';
import ModuleGenerator from './ModuleGenerator';
import Customizable from './Customizable';
import EasyToDistribute from './EasyToDistribute';
import PreValidation from './PreValidation';
import CustomClient from './CustomClient';
import Streaming from './Streaming';
import FadeTransition from '@/components/FadeTransition';

const Gallery = () => {
  const [currentTab, setCurrentTab] = useState<GalleryTabType>(GalleryTabType.CUSTOMIZABLE);

  const renderTabContent = (tab: GalleryTabType) => {
    switch (tab) {
      case GalleryTabType.MULTI_SEGMENT:
        return <MultiSegment />;
      case GalleryTabType.MODULE_GENERATOR:
        return <ModuleGenerator />;
      case GalleryTabType.CUSTOMIZABLE:
        return <Customizable />;
      case GalleryTabType.EASY_TO_DISTRIBUTE:
        return <EasyToDistribute />;
      case GalleryTabType.PRE_VALIDATION:
        return <PreValidation />;
      case GalleryTabType.CUSTOM_CLIENT:
        return <CustomClient />;
      case GalleryTabType.JSON_STREAMING:
        return <Streaming />;
      default:
        return null;
    }
  };

  return (
    <div>
      <GalleryTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <FadeTransition currentKey={currentTab}>
        <div className="py-4">{renderTabContent(currentTab)}</div>
      </FadeTransition>
    </div>
  );
};

export default Gallery;
