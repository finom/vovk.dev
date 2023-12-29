'use client';
import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

interface Props {
  children: string[];
  language?: 'typescript' | 'json';
}

const SyntaxHighlighter = ({ children, language = 'typescript' }: Props) => {
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.querySelectorAll('code').forEach((block) => {
        if (block.dataset.highlighted) {
          return;
        }
        hljs.highlightBlock(block);
      });
    }
  }, []);

  return (
    <pre ref={codeRef}>
      <style jsx>{`
        :global(.hljs) {
          background: transparent;
          padding: 0 !important;
        }
      `}</style>

      {children.map((section, index) => {
        const lines = section.split('\n');
        const maxSpaces = lines.reduce((max, line) => {
          if (line.trim().length === 0) {
            return max;
          }
          const spaces = line.match(/^ */)?.[0].length ?? 0;
          return Math.min(max, spaces);
        }, 100);
        const newLines = lines.map((line) => line.slice(maxSpaces));

        if (newLines[0].trim().length === 0) {
          newLines.shift();
        }

        if (newLines[newLines.length - 1].trim().length === 0) {
          newLines.pop();
        }

        const code = newLines.join('\n');
        return (
          <div
            key={index}
            className={`${
              index !== children.length - 1 ? 'border-b border-gray-200 dark:border-gray-300 mb-4 pb-4' : ''
            }`}
          >
            <code className={`language-${language}`}>{code}</code>
          </div>
        );
      })}
    </pre>
  );
};

export default SyntaxHighlighter;
