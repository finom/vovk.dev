const { webpack } = require('next/dist/compiled/webpack/webpack');

/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

const nextra = withNextra();

module.exports = {
  ...nextra,
}
