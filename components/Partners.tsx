// pages/index.tsx
import Head from 'next/head';
import Scroller from './Slider';

export default function BrandCarouselPage() {
  return (
    <div>
      

      <Scroller speed="fast">
        <ul className="tag-list scroller__inner">
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>SSG</li>
          <li>webdev</li>
          <li>animation</li>
          <li>UI/UX</li>
        </ul>
      </Scroller>

      <Scroller direction="right" speed="slow">
        <div className="scroller__inner">
          <img src="https://i.pravatar.cc/150?img=1" alt="" />
          <img src="https://i.pravatar.cc/150?img=2" alt="" />
          <img src="https://i.pravatar.cc/150?img=3" alt="" />
          <img src="https://i.pravatar.cc/150?img=4" alt="" />
          <img src="https://i.pravatar.cc/150?img=5" alt="" />
          <img src="https://i.pravatar.cc/150?img=6" alt="" />
        </div>
      </Scroller>

      <a className="yt" href="https://youtu.be/pKHKQwAsZLI">
        Watch the tutorial
      </a>
    </div>
  );
}
