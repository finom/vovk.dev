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
import Arrow from '../Arrow';
import TabPill from '../TabPill';

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
      <div className="mb-12 p-8 rounded-xl bg-gradient-to-b from-blue-200/10 to-blue-200/5 dark:from-blue-900/10 dark:to-blue-900/5">
        {pills.map((pill) => (
          <TabPill
            key={pill.name}
            isActive={validationLibrary === pill.name}
            onClick={() => setValidationLibrary(pill.name)}
          >
            {pill.title}
          </TabPill>
        ))}
        <h2 className="text-center mb-4 text-3xl">On server-side</h2>
        <p className="text-center mb-8 text-lg">Just a wrapper around Next.js API routes</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <CodeBox title="UserService.ts" className="transform -rotate-3 translate-y-3 [&_code]:text-xs">
            <SourceService />
          </CodeBox>
          <CodeBox title="UserController.ts" className="[&_code]:text-xs">
            {validationLibrary === 'none' && <SourceControllerNoValidation />}
            {validationLibrary === 'vovk-yup' && <SourceControllerYup />}
            {validationLibrary === 'vovk-dto' && <SourceControllerDto />}
            {validationLibrary === 'vovk-zod' && <SourceControllerZod />}
          </CodeBox>
          <CodeBox title="route.ts" className="transform rotate-3 translate-y-3 [&_code]:text-xs">
            <SourceSegment />
          </CodeBox>
        </div>
        <Arrow direction="down" className="m-auto my-4" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div />
          <CodeBox title="route.ts" className="[&_code]:text-xs">
            <ResultSegment />
          </CodeBox>
          <div />
        </div>
      </div>
      <div className="mb-12 p-8 rounded-xl bg-gradient-to-b from-blue-200/10 to-blue-200/5 dark:from-blue-900/10 dark:to-blue-900/5">
        <h2 className="text-center mb-4 text-3xl">On client-side</h2>
        <p className="text-center mb-8 text-lg">
          Just a wrapper around <code>fetch</code>
        </p>
        <div className="flex items-stretch justify-center">
          <div className="w-1/3">
            <div />
            <CodeBox title="UserService.ts">
              <SourceClient />
            </CodeBox>
            <div />
          </div>
          <div className="w-28 flex flex-col">
            <Arrow direction="right" className="m-auto" />
          </div>
          <div className="w-1/3">
            <div />
            <CodeBox title="UserService.ts">
              <ResultClient />
            </CodeBox>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsInside;
