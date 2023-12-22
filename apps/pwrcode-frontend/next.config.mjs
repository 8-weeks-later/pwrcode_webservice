import remarkGfm from 'remark-gfm';
import createMDX from '@next/mdx';
import { remarkCodeHike } from '@code-hike/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      [remarkCodeHike, { theme: 'github-dark', lineNumbers: false }],
    ],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
