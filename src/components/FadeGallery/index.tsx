import React, { FC, ReactNode, useEffect, useCallback, useRef, useState, CSSProperties } from 'react';
import styles from './FadeGallery.module.css';

interface FadeGalleryProps {
  /** Array of elements to display */
  items: ReactNode[];
  /** Zero-based index of the currently active (visible) item */
  currentIndex: number;
  /** Duration of the fade transition in milliseconds */
  fadeDuration?: number;
}

const FadeGallery: FC<FadeGalleryProps> = ({
  items,
  currentIndex,
  fadeDuration = 500, // default fade: 0.5s
}) => {
  const [maxHeight, setMaxHeight] = useState<number>(0);

  // We'll store refs for each item so we can measure its height.
  const itemRefs = useRef<HTMLDivElement[]>([]);

  const setItemRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      itemRefs.current[index] = el;
    }
  };

  /**
   * Function to measure the tallest child
   */
  const measureHeights = useCallback(() => {
    if (!items || items.length === 0) return;
    const heights = itemRefs.current.map((div) => div?.clientHeight ?? 0);
    const tallest = Math.max(...heights);
    setMaxHeight(tallest);
  }, [items]);

  /**
   * When items change, measure heights immediately.
   * Also attach a window resize listener to re-measure on resize.
   */
  useEffect(() => {
    // Measure on mount/items change
    measureHeights();

    // Re-measure on window resize
    window.addEventListener('resize', measureHeights);

    return () => {
      window.removeEventListener('resize', measureHeights);
    };
    // Include `items` in the dependency array
    // so we re-run if the items array changes.
  }, [items, measureHeights]);

  return (
    <div
      className={styles.container}
      style={{
        /* Force the container to be as tall as the tallest item */
        height: maxHeight,
      }}
    >
      {items.map((child, index) => {
        const isActive = index === currentIndex;

        const itemStyle: CSSProperties = {
          transitionDuration: `${fadeDuration}ms`,
        };

        return (
          <div
            key={index}
            ref={(el) => setItemRef(el, index)}
            className={`${styles.item} ${isActive ? styles.itemActive : ''}`}
            style={itemStyle}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default FadeGallery;
