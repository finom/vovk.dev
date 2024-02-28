'use client';
import { useEffect, useState } from 'react';
import { WorkerService } from 'vovk-examples';

export default function WorkerExample() {
  const isMobile = typeof document !== 'undefined' && 'ontouchstart' in document.documentElement;
  const [value, setValue] = useState(
    // use smaller number on mobile devices
    isMobile ? '333944026345847228099687' : '337751842839865299034216387'
  );
  const [result, setResult] = useState<bigint[]>();
  const [isCalculating, setIsCalculating] = useState(false);
  const regExp = /^-?\d+$/;

  useEffect(() => {
    WorkerService.use(new Worker(new URL('vovk-examples/dist/WorkerService.js', import.meta.url)));
  }, []);

  const submit = async () => {
    if (!regExp.test(value)) return;
    setIsCalculating(true);
    setResult(await WorkerService.factorize(BigInt(value)));
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
