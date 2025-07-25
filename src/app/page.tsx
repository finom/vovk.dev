import type { Meta } from 'nextra';
import Home from '../components/Home';

export const metadata: Meta = {
  title: {
    default: 'Nextra – Next.js Static Site Generator',
    template: '%s | Nextra',
  },
  openGraph: {
    url: 'https://nextra.site',
    siteName: 'Nextra',
    locale: 'en_US',
    type: 'website',
  },
};

export default Home;
