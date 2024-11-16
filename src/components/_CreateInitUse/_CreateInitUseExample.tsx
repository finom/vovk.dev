'use client';
import { useState } from 'react';
import { HelloController } from 'vovk-client';
import type { VovkReturnType } from 'vovk';
import Link from 'next/link';

export default function CreateInitUseExample() {
  const [serverResponse, setServerResponse] = useState<VovkReturnType<typeof HelloController.getHello>>();

  return (
    <div className="text-center mt-4">
      <button
        className="py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700 transition-colors"
        onClick={async () => {
          const response = await HelloController.getHello();
          setServerResponse(response);
        }}
      >
        Get Greeting from the Server
      </button>
      <div className="mt-2">{serverResponse?.greeting ?? <>&nbsp;</>}</div>
      <div
        className={`max-w-3xl mx-auto text-xs mt-2 delay-1000 transition-opacity duration-1000 ${serverResponse ? 'opacity-100' : 'opacity-0'}`}
      >
        Hint: the endpoint for this example is implemented with{' '}
        <Link target="_blank" className="link" href="https://docs.vovk.dev/docs/api/#generatestaticapi">
          generateStaticAPI
        </Link>{' '}
        and statically hosted on GitHub Pages. Rest of the examples below are served from the{' '}
        <Link href="https://vovk-examples.vercel.app/" className="link" target="_blank">
          Examples Website API
        </Link>{' '}
        by using pre-built{' '}
        <Link href="https://npmjs.com/package/vovk-examples" className="link" target="_blank">
          vovk-examples
        </Link>{' '}
        NPM package.
      </div>
    </div>
  );
}
