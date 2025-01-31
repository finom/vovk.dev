import Nextra from 'nextra';

const withNextra = Nextra({});

const nextra = withNextra({});

/** @type {import('next').NextConfig} */
const config = {
  ...nextra,
  output: 'export',
  images: { unoptimized: true },
};

// output: 'export' does not work with rewrites
delete config.rewrites;

export default config;
