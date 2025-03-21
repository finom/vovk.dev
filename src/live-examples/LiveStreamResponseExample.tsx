'use client';
import { useState } from 'react';
import { StreamResponseObjectController as JSONLinesResponseObjectController } from 'vovk-examples';
import type { VovkYieldType } from 'vovk';

export default function StreamExample() {
  const [tokens, setTokens] = useState<VovkYieldType<typeof JSONLinesResponseObjectController.streamTokens>[]>([]);

  return (
    <>
      <button
        onClick={async () => {
          setTokens([]);
          using stream = await JSONLinesResponseObjectController.streamTokens();
          for await (const token of stream) {
            setTokens((tokens) => [...tokens, token]);
          }
        }}
      >
        Get a streamed greeting from the server
      </button>
      <div>
        {tokens.map(({ message }, i) => (
          <span key={i}>{message}</span>
        ))}
      </div>
    </>
  );
}
