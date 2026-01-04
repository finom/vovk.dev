import { ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FlipWords } from '@/components/ui/flip-words';
import Link from 'next/link';
import Articles from './Articles';
import Conversion from './Conversion.mdx';
import OvervewItems from './OvervewItems.mdx';

const Hero = () => {
  const words = ['with RPC', 'with Codegen', 'for SPA', 'for SaaS', 'for MCP'];

  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden bg-background">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      <div hidden className="absolute inset-0 bg-linear-to-br from-background via-background to-muted/20"></div>

      <div className="bg-linear-to-b from-[#ffffff30] to-[#ffffffff] dark:from-background/30 dark:to-background bottom-0 left-0 right-0 h-1/6 absolute " />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto pt-8">
        <div className="md:space-y-6 space-y-4">
          <div className="inline-flex items-center rounded-full bg-background/50 px-3 font-semibold text-2xl md:text-4xl opacity-60">
            Structured API Layer for Next.js
          </div>
          <div
            className="inline-flex items-center rounded-full border border-border bg-background/50 px-3 text-sm"
            hidden
          >
            <span className="text-muted-foreground">Introducing</span>
            <span className="mx-1 h-4"></span>
            <span className="font-medium">Vovk.ts</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="">
              RESTful API Framework
              <br />
              <FlipWords words={words} />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" hidden>
            Structured API Layer for Next.js
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
            <Link href="/quick-install" className="flex items-center cursor-pointer">
              <Button size="lg" className="group cursor-pointer">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="https://github.com/finom/vovk" className="flex items-center cursor-pointer">
              <Button variant="outline" size="lg" className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                View on GitHub
              </Button>
            </Link>
          </div>
          <Conversion />
          <OvervewItems />
          <Articles />
        </div>
      </div>
    </div>
  );
};

export default Hero;
