import { MDXRemote } from 'next-mdx-remote/rsc';
import { Suspense } from 'react';
import remarkGfm from 'remark-gfm';
import { useMDXComponents } from '@/mdx-components';
import { Code } from 'bright';

// app/page.js
export default async function RemoteMdxPage() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const res = await fetch(
    'http://localhost:9000/computer-science/algorithms_and_data_structures/index.mdx',
    {
      headers: {
        'Content-Type': 'text/html',
      },
    },
  );
  const jsonData = await res.text();

  return (
    <Suspense fallback={<>Loading...</>}>
      <MDXRemote
        source={jsonData}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </Suspense>
  );
}
