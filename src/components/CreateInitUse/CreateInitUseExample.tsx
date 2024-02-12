'use client';
import { useState } from 'react';
import { HelloController } from '@vovkts/client';
import type { VovkClientReturnType } from 'vovk';

export default function CreateInitUseExample() {
  const [serverResponse, setServerResponse] = useState<VovkClientReturnType<typeof HelloController.getHello>>();

  return (
    <div className="text-center mt-4">
      <button
        className="py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700 transition-colors"
        onClick={async () => {
          const response = await HelloController.getHello();
          setServerResponse(response);
        }}
      >
        Get Greeting from Server
      </button>
      <div className="mt-2">{serverResponse?.greeting ?? <>&nbsp;</>}</div>
    </div>
  );
}
