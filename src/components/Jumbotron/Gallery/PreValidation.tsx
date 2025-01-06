import Image from 'next/image';
import Link from 'next/link';
import svg from '../../../excalidraw/vovk-validate.svg';

const PreValidation = () => {
  return (
    <div>
      <h2 className="font-semibold text-2xl mb-3 text-center">How it works</h2>

      <Image src={svg} alt="Multi-Segment" className="dark:invert block max-w-[50%] m-auto" />
      <p className="mt-8">
        Back-end logic implemented with Vovk.ts can be distributed between unlimited number of routes, implemented as{' '}
        <Link
          className="link"
          href="https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments"
        >
          Optional Catch-all Segments
        </Link>
        . Each segment is compiled as an individual serverless function making possible to host REST API with billions
        of endpoints keeping cold starts as fast as possible.
      </p>
    </div>
  );
};

export default PreValidation;
