'use client';
import { useEffect, useState } from 'react';
import GalleryTabs, { GalleryTabType } from './GalleryTabs';
import MultiSegment from './MultiSegment';
import Customizable from './Customizable';
import EasyToDistribute from './EasyToDistribute';
import PreValidation from './PreValidation';
import CustomClient from './CustomClient';
import Streaming from './Streaming';
import FadeGallery from '@/components/FadeGallery';
import RestRpc from './RestRpc';

const SWIPE_THRESHOLD = 50;

const Gallery = () => {
  const tabList = Object.values(GalleryTabType);

  // State for current tab
  const [currentTab, setCurrentTab] = useState<GalleryTabType>(GalleryTabType.REST_RPC);

  // State for whether the carousel is auto-sliding
  const [autoSlide, setAutoSlide] = useState(true);

  // Touch start position (for swiping)
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // The items corresponding to each tab
  const items = [
    <MultiSegment key="multi-segment" />,
    <RestRpc key="rest-rpc" />,
    <PreValidation key="pre-validation" />,
    <Customizable key="customizable" />,
    <EasyToDistribute key="easy-to-distribute" />,
    <CustomClient key="custom-client" />,
    <Streaming key="streaming" />,
  ];

  /**
   * Advances to the next tab every 10 seconds if autoSlide is true.
   */
  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setCurrentTab((prevTab) => {
        const currentIndex = tabList.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabList.length;
        return tabList[nextIndex];
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [autoSlide, tabList]);

  /**
   * Stops the automatic slideshow on any user interaction (click or tap).
   */
  const handleUserInteraction = () => {
    setAutoSlide(false);
  };

  /**
   * Handles touch start on mobile devices.
   */
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  /**
   * Handles touch move (swiping).
   */
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;

    const currentX = e.touches[0].clientX;
    const diff = touchStartX - currentX;

    // If swipe distance is beyond the threshold, switch tabs
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      // Stop auto-sliding as soon as user swipes
      handleUserInteraction();

      if (diff > 0) {
        // Swiped to the left -> Next tab
        setCurrentTab((prevTab) => {
          const currentIndex = tabList.indexOf(prevTab);
          const nextIndex = (currentIndex + 1) % tabList.length;
          return tabList[nextIndex];
        });
      } else {
        // Swiped to the right -> Previous tab
        setCurrentTab((prevTab) => {
          const currentIndex = tabList.indexOf(prevTab);
          const prevIndex = (currentIndex - 1 + tabList.length) % tabList.length;
          return tabList[prevIndex];
        });
      }

      setTouchStartX(null);
    }
  };

  return (
    <div
      onClick={handleUserInteraction}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="z-10 relative"
    >
      <GalleryTabs
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          handleUserInteraction(); // Stop auto-sliding if user changes tab manually
          setCurrentTab(tab);
        }}
      />
      <FadeGallery items={items} currentIndex={tabList.indexOf(currentTab)} />
    </div>
  );
};

export default Gallery;
