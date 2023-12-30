import Image from 'next/image';
import WindowAlike from './WindowAlike';
import SyntaxHighlighter from './Examples/Example/SyntaxHighlighter';

const BasicDiagram = () => {
  return (
    <div className="mt-32 px-5">
      <div className="text-center">
        <h2 className="font-semibold text-3xl">Meta-Isomorphic Paradigm</h2>
        <p className="max-w-3xl mx-auto mt-2 text-secondary mb-4">
          Import and use back-end code in front-end, thanks to <strong>import type</strong> and{' '}
          <strong>vovk-metadata.json</strong> that contains required data to build main-thread client-side library for
          free.
        </p>
      </div>
      <WindowAlike className="max-w-4xl mx-auto">
        <Image src="/vovk-basics.svg" width={1281} height={466.33} alt="Vovk Basics Diagram" />
      </WindowAlike>
      <div className="max-w-md mx-auto mt-8 mb-4">
        Here is an example if <strong>vovk-metadata.json</strong> file that is generated automatically from Controllers
        and Workers:
      </div>
      <WindowAlike className="max-w-md mx-auto">
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
    </div>
  );
};

export default BasicDiagram;
