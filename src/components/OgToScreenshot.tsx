import CodeBox from './CodeBox';
import VovkTextLogo from './VovkTextLogo';

const OgToScreenshot = () => {
  return (
    <div className="m-auto w-[630px]">
      {/* <VovkTextLogo width={250} className="m-auto" /> */}
      <h1 className="text-3xl md:text-6xl font-bold tracking-tight mt-8 text-center">
        REST for Next<span className="opacity-10">.js</span>
      </h1>
      <p className="mt-4 text-secondary text-[18px] text-center">
        Transforms Next.js into a powerful and extensible REST API platform
      </p>
      <CodeBox className="mt-5" noClipboard>{`
        import type { NextRequest } from 'next/server';
        import { prefix, put } from 'vovk';
        import { authGuard } from '../../lib/authGuard';

        @prefix('users')
        export default class UserController {
            // PUT /api/users/69?notifyOn=comment
            @put(':id') 
            @authGuard() 
            static async updateUser(req: NextRequest, { id }: { id: string }) {
                const body = await req.json();
                const notifyOn = req.nextUrl.searchParams.get('notifyOn');
                // ...
            }
        }
        `}</CodeBox>
    </div>
  );
};

export default OgToScreenshot;
