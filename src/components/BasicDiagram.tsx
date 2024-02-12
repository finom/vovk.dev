import Image from 'next/image';
import WindowAlike from './WindowAlike';
import SyntaxHighlighter from './SyntaxHighlighter';

const BasicDiagram = () => {
  return (
    <div className="mt-32 px-5">
      <div className="text-center">
        <h2 className="font-semibold text-3xl">Isomorphic Code</h2>
        <p className="max-w-3xl mx-auto mt-2 text-secondary mb-4">
          Import and use back-end code in front-end, thanks to <strong>import type</strong> and{' '}
          <strong>vovk-metadata.json</strong> that contains required data to build main-thread client-side library for
          free.
        </p>
      </div>
      <WindowAlike className="max-w-4xl mx-auto">
        <Image src="/vovk-basics.svg" width={1281} height={466.33} alt="Vovk Basics Diagram" />
      </WindowAlike>
      <details className="mx-auto text-center mt-6">
        <summary className="cursor-pointer">Show me the metadata file</summary>

        <div className="max-w-xl mx-auto mt-4 mb-4 text-secondary text-left">
          Here is an example of <strong>vovk-metadata.json</strong> file that is generated automatically from
          Controllers by the API entry point stored at <strong>/src/api/[[...]]/route.ts</strong> that implement two
          endpoints: <strong>POST hello/post-hello</strong> and <strong>GET hello/get-hello</strong> but also contains
          metadata for Workers that implement one generator function <strong>calculatePi</strong>:
        </div>
        <WindowAlike className="max-w-md mx-auto text-left">
          <SyntaxHighlighter language="json">
            {[
              `{
  "HelloController": {
    "controllerName": "HelloController",
    "_prefix": "hello",
    "_handlers": {
      "getHello": {
        "path": "get-hello",
        "httpMethod": "GET"
      },
      "postHello": {
        "path": "post-hello",
        "httpMethod": "POST"
      }
    }
  },
  "workers": {
    "HelloWorkerService": {
      "workerName": "HelloWorkerService",
      "_handlers": {
        "calculatePi": {
          "isGenerator": true
        }
      }
    }
  }
}`,
            ]}
          </SyntaxHighlighter>
        </WindowAlike>
      </details>
    </div>
  );
};

export default BasicDiagram;
