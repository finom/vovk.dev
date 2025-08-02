import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Route } from 'next';

const options = [
  {
    title: 'SaaS',
    description: 'Build Software as a Service applications with modern architecture and scalable design patterns.',
    icon: '🚀',
    href: '/saas',
  },
  {
    title: 'Public API',
    description: 'Create Public APIs with powerful Controller-Service-Repository patterns.',
    icon: '⚡',
    href: '/public-api',
  },
  {
    title: 'RPC for NestJS',
    description: 'Implement Remote Procedure Call patterns with type-safe APIs and efficient communication.',
    icon: '🔗',
    href: '/nestjs',
  },
  {
    title: 'UI Jarvis',
    description: 'Build intelligent user interfaces with AI-powered components and smart automation.',
    icon: '🤖',
    href: '/ai-ui',
  },
  {
    title: 'MCP Server',
    description: 'Build a powerful MCP server from your API.',
    icon: '🖥️',
    href: '/mcp',
  },
  {
    title: 'Core Concepts',
    description: 'Learn the core concepts of Vovk.ts, including Segments, Controllers, and RPC Modules.',
    icon: '📚',
    href: '/concepts',
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
