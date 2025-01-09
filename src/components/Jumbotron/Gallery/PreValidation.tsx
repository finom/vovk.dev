import Image from 'next/image';
import Link from 'next/link';
import svg from '../../../excalidraw/vovk-validate.svg';

const PreValidation = () => {
  return (
    <div className="pt-4">
      <h2 className="font-semibold text-2xl mb-3 text-center">Validation on client and server</h2>

      <Image src={svg} alt="Multi-Segment" className="dark:invert block max-w-[50%] m-auto" />
      <p className="mt-8">
        Vovk.ts provides a way to validate requests on the client side using the same schema as on the server. This way
        it is possible to avoid sending invalid requests to the server and get instant feedback about the request
        format.{' '}
      </p>
    </div>
  );
};

export default PreValidation;
