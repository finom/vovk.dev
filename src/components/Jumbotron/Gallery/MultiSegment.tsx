import Image from 'next/image';
import svg from '../../../excalidraw/vovk-segments.svg';
import Link from 'next/link';

const MultiSegment = () => {
  return (
    <div className="pt-4">
      <h2 className="font-semibold text-2xl mb-3 text-center">
        Multi-segment architecture - Distributed infrastructure
      </h2>
      <Image src={svg} alt="Multi-Segment" className="dark:invert block max-w-[60%] m-auto" />
      <p className="mt-8">
        Back-end logic implemented with Vovk.ts can be distributed between unlimited number of Next.js routes,
        implemented as{' '}
        <Link
          className="link"
          href="https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments"
        >
          Optional Catch-all Segments
        </Link>
        . Each segment is compiled as an individual serverless function making possible to host REST API with billions
        of endpoints keeping cold starts as effecient as possible.
      </p>
    </div>
  );
};

export default MultiSegment;
