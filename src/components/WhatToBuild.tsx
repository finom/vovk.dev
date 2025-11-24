import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Route } from 'next';

const options = [
  {
    title: 'Public API',
    description: 'Generate APIs with OpenAPI docs and code scaffolding.',
    icon: '⚡',
    href: '/openapi',
  },
  {
    title: 'RPC for NestJS',
    description: 'Generate RPC libraries for NestJS applications.',
    icon: '🔗',
    href: '/nestjs',
  },
  {
    title: 'Realtime UI',
    description: 'Build Realtime, intelligent UIs — like Tony Stark’s JARVIS.',
    icon: '🤖',
    href: '/realtime-ui',
  },
  {
    title: 'MCP Server',
    description: 'Turn your API into a powerful MCP server.',
    icon: '🖥️',
    href: '/mcp',
  },
  {
    title: 'Bundle',
    description: 'Bundle your API and deploy it anywhere fetch is supported.',
    icon: '📦',
    href: '/bundle',
  },
];

const WhatToBuild = () => {
  return (
    <div className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What do you want to build?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your path and start building amazing applications with Vovk.ts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {options.map((option) => (
            <Card
              className="group hover:shadow-md transition-all duration-200 cursor-pointer border-border/50 hover:border-border bg-card/50 backdrop-blur-sm"
              key={option.title}
            >
              <Link key={option.title} href={option.href as Route} className="h-full">
                <CardHeader className="pb-4">
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-200">
                    {option.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {option.description}
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            <Link href="/about">Explore Documentation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhatToBuild;
