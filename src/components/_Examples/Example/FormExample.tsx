'use client';
import { useState, type FormEvent } from 'react';
import { FormController } from 'vovk-examples';
import type { VovkReturnType } from 'vovk';

export default function FormExample() {
  const [response, setResponse] = useState<VovkReturnType<typeof FormController.createUser> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [disableClientValidation, setDisableClientValidation] = useState(false);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setResponse(
        await FormController.createUser({
          body: { name, email },
          disableClientValidation,
        })
      );
      setError(null);
    } catch (e) {
      setError(e as Error);
      setResponse(null);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label className="block mb-4">
        <input
          type="checkbox"
          className="mr-2"
          checked={disableClientValidation}
          onChange={(e) => setDisableClientValidation(e.target.checked)}
        />
        Disable client-side validation
      </label>
      <button>Submit</button>

      {response && (
        <div className="text-left">
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {error && <div>❌ {String(error)}</div>}
    </form>
  );
}
