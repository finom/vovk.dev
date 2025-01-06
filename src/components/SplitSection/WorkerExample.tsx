'use client';
import { useEffect, useState } from 'react';
import { HelloWorker } from 'vovk-examples';

export default function WorkerExample() {
  const [value, setValue] = useState('337751842839865299034216387');
  const [result, setResult] = useState<bigint[]>();
  const [isCalculating, setIsCalculating] = useState(false);
  const regExp = /^-?\d+$/;

  useEffect(() => {
    const isMobile = typeof document !== 'undefined' && 'ontouchstart' in document.documentElement;
    if (isMobile) {
      setValue('333944026345847228099687');
    }

    HelloWorker.employ(new Worker(new URL('vovk-examples/dist/HelloWorker.js', import.meta.url)));
  }, []);

  const submit = async () => {
    if (!regExp.test(value)) return;
    setIsCalculating(true);
    setResult(await HelloWorker.factorize(BigInt(value)));
    setIsCalculating(false);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <div className="input-group">
        <input
          type="text"
          placeholder="Type a large number..."
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button disabled={!regExp.test(value) || isCalculating}>
          {isCalculating ? 'Calculating...' : 'Factorize'}
        </button>
      </div>
      <div className="break-all max-h-96 overflow-auto text-center">
        {result?.map((factor, index) => <div key={index}>{factor.toString()}</div>)}
      </div>
    </form>
  );
}
