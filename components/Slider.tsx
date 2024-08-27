// components/Scroller.tsx
'use client'
import { useEffect, useRef } from 'react';

type ScrollerProps = {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: 'fast' | 'slow';
};

const Scroller: React.FC<ScrollerProps> = ({
  children,
  direction = 'left',
  speed,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (scroller && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    function addAnimation() {
      if (scroller) {
        scroller.setAttribute('data-animated', 'true');
        const scrollerInner = scroller.querySelector('.scroller__inner');
        if (scrollerInner) {
          const scrollerContent = Array.from(scrollerInner.children);
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true) as HTMLElement;
            duplicatedItem.setAttribute('aria-hidden', 'true');
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      }
    }
  }, []);

  return (
    <div
      ref={scrollerRef}
      className="scroller"
      data-direction={direction}
      data-speed={speed}
    >
      <div className="scroller__inner">{children}</div>
    </div>
  );
};

export default Scroller;
