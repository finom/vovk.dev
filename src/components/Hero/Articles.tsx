import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Route } from 'next';

const options = [
  {
    title: 'About Vovk.ts',
    icon: '📖',
    href: '/about',
  },
  {
    title: 'Why Vovk.ts?',
    icon: '❓',
    href: '/why',
  },
  {
    title: 'Quick Install',
    icon: '🚀',
    href: '/quick-install',
  },
  {
    title: '"Hello World" Example',
    icon: '👋',
    href: '/hello-world',
  },
  {
    title: 'Overhead Performance',
    icon: '⚡',
    href: '/performance',
  },
  {
    title: 'Server-Side Validation',
    icon: '✅',
    href: '/validation/introduction',
  },
  {
    title: 'Client-Side Validation',
    icon: '🛡️',
    href: '/validation/client',
  },
  {
    title: 'Schema',
    icon: '📋',
    href: '/schema',
  },
  {
    title: 'Segment',
    icon: '📊',
    href: '/segment',
  },
  {
    title: 'Controller',
    icon: '🎛️',
    href: '/controller',
  },
  {
    title: 'TypeScript RPC',
    icon: '📡',
    href: '/typescript',
  },
  {
    title: 'Codegen',
    icon: '⚙️',
    href: '/mixins',
  },
  {
    title: 'RESTful API with OpenAPI',
    icon: '🌐',
    href: '/openapi',
  },
  {
    title: 'TypeScript Bundle',
    icon: '📦',
    href: '/bundle',
  },
  {
    title: 'Multitenancy',
    icon: '🏘️',
    href: '/multitenant',
  },
  {
    title: 'CLI',
    icon: '🛠️',
    href: '/cli',
  },
  {
    title: 'Config',
    icon: '⚙️',
    href: '/config',
  },
  {
    title: 'MCP Server',
    icon: '🖥️',
    href: '/mcp',
  },
  {
    title: 'LLM Function Calling',
    icon: '🤖',
    href: '/function-calling',
  },
  {
    title: 'JARVIS-Grade Realtime UI',
    icon: '✨',
    href: '/realtime-ui',
  },
];

const Articles = () => {
  return (
    <div className="pt-6 md:pt-8 px-4 pb-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4 space-y-4">
          <h2 className="text-xl md:text-3xl font-semibold tracking-tight text-muted-foreground">
            Explore Vovk.ts Documentation
          </h2>
        </div>

        <div>
          {options.map((option) => (
            <Card
              className="group hover:shadow-md transition-all duration-200 cursor-pointer border-border/50 hover:border-border bg-card/50 backdrop-blur-sm inline-block p-2 m-2"
              key={option.title}
            >
              <Link key={option.title} href={option.href as Route} className="h-full">
                <CardTitle className="font-semibold">
                  <div className="group-hover:scale-110 transition-transform duration-200 inline-block pr-2">
                    {option.icon}
                  </div>
                  {option.title}
                </CardTitle>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
