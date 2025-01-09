import React, { useState } from 'react';
import CodeBox from '../CodeBox';
import SourceService from './SourceService.mdx';
import SourceSegment from './SourceSegment.mdx';
import SourceClient from './SourceClient.mdx';
import ResultSegment from './ResultSegment.mdx';
import ResultClient from './ResultClient.mdx';
import SourceControllerNoValidation from './SourceControllerNoValidation.mdx';
import SourceControllerYup from './SourceControllerYup.mdx';
import SourceControllerDto from './SourceControllerDto.mdx';
import SourceControllerZod from './SourceControllerZod.mdx';
import SplitSection from '../SplitSection';
import Arrow from '../Arrow';
import TabPill from '../TabPill';
import DocsLink from '../DocsLink';

const pills = [
  {
    name: 'none',
    title: 'No validation',
  },
  {
    name: 'vovk-zod',
    title: 'Zod',
  },
  {
    name: 'vovk-yup',
    title: 'Yup',
  },
  {
    name: 'vovk-dto',
    title: 'DTO (class-validator)',
  },
];

const WhatsInside = () => {
  const [validationLibrary, setValidationLibrary] = useState(pills[0].name);
  return (
    <div className="max-w-screen-2xl mx-auto">
      <SplitSection
        reverse
        left={
          <div>
            <div className="p-6 rounded-lg border border-gray-300/30 dark:border-gray-700/30 bg-gray-200/30 dark:bg-gray-800/30">
              {pills.map((pill) => (
                <TabPill
                  key={pill.name}
                  isActive={validationLibrary === pill.name}
                  onClick={() => setValidationLibrary(pill.name)}
                >
                  {pill.title}
                </TabPill>
              ))}
              <CodeBox title="UserService.ts" className="[&_code]:text-xs h-auto mb-2 mt-4">
                <SourceService />
              </CodeBox>
              <CodeBox title="UserController.ts" className="[&_code]:text-xs h-auto mb-2">
                {validationLibrary === 'none' && <SourceControllerNoValidation />}
                {validationLibrary === 'vovk-yup' && <SourceControllerYup />}
                {validationLibrary === 'vovk-dto' && <SourceControllerDto />}
                {validationLibrary === 'vovk-zod' && <SourceControllerZod />}
              </CodeBox>
              <CodeBox title="route.ts" className="[&_code]:text-xs h-auto mb-2">
                <SourceSegment />
              </CodeBox>
            </div>
            <svg
              className={`text-current opacity-80 dark:text-white mx-auto my-4`}
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              width="21"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"
              />
            </svg>
            <CodeBox title="route.ts (resulting pseudo-code)" className="[&_code]:text-xs h-auto mb-2">
              <ResultSegment />
            </CodeBox>
          </div>
        }
        right={
          <div className="">
            <SplitSection.SplitSectionInfo badge="On server-side" title="Just a wrapper around API routes">
              Being a meta-framework on top of Next.js App Router, Vovk.ts by itself doesn't include any network logic.
              What it does is it provides a way to define API routes in a more structured way, being just a wrapper
              around Next.js API handlers.
              <br />
              <br />
              Vovk.ts supports multiple validation libraries such as Zod, Yup, and class-validator (DTO) that nicely
              define types that can be used both on back-end (services) and on the client side (another server can also be a client if it supports fetch function).
              <br />
              <DocsLink href="/docs/api-routes" className="mt-4">
                Learn more about API routes TODO
              </DocsLink>
            </SplitSection.SplitSectionInfo>
          </div>
        }
      />
      <SplitSection
        left={
          <div className="">
            <div>
              <div />
              <CodeBox title="page.tsx">
                <SourceClient />
              </CodeBox>
              <div />
            </div>
            <div>
              <svg
                className={`text-current opacity-80 dark:text-white mx-auto my-4`}
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                width="21"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"
                />
              </svg>
            </div>
            <div>
              <div />
              <CodeBox title="page.tsx (resulting pseudo-code)">
                <ResultClient />
              </CodeBox>
              <div />
            </div>
          </div>
        }
        right={
          <div className="">
            <SplitSection.SplitSectionInfo badge="On client-side" title={`Just a wrapper around "fetch"`}>
              Vovk.ts generates a client-side library that matches methods defined in a controller and each such method
              is not more than just a wrapper around the native fetch API. Vovk.ts doesn't introduce custom protocols
              for communication between client and server, utilizing well-known REST principles.
              <br />
              <DocsLink href="/docs/api-routes" className="mt-4">
                Learn more about API routes TODO
              </DocsLink>
            </SplitSection.SplitSectionInfo>
          </div>
        }
      />
    </div>
  );
};

export default WhatsInside;
