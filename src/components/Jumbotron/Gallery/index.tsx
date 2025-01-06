import { useState } from 'react';
import GalleryTabs, { GalleryTabType } from './GalleryTabs';
import MultiSegment from './MultiSegment';
import Customizable from './Customizable';
import EasyToDistribute from './EasyToDistribute';
import PreValidation from './PreValidation';
import CustomClient from './CustomClient';
import Streaming from './Streaming';
import FadeTransition from '@/components/_FadeTransition';
import FadeGallery from '@/components/FadeGallery';

const Gallery = () => {
  const [currentTab, setCurrentTab] = useState<GalleryTabType>(GalleryTabType.CUSTOMIZABLE);
  const items = [
    <MultiSegment key="multi-segment" />,
    <Customizable key="customizable" />,
    <EasyToDistribute key="easy-to-distribute" />,
    <PreValidation key="pre-validation" />,
    <CustomClient key="custom-client" />,
    <Streaming key="streaming" />,
  ];

  return (
    <div>
      <GalleryTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <FadeGallery items={items} currentIndex={Object.values(GalleryTabType).indexOf(currentTab)} />
    </div>
  );
};

export default Gallery;
