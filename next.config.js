const { webpack } = require('next/dist/compiled/webpack/webpack');

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

const nextra = withNextra();

/** @type {import('next').NextConfig} */
const config = {
  ...nextra,
  output: 'export',
  images: { unoptimized: true },
};

// output: 'export' does not work with rewrites
delete config.rewrites;

module.exports = config;
