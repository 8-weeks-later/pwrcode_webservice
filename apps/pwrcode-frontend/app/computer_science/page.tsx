import { MDXRemote } from 'next-mdx-remote/rsc';
import { Suspense } from 'react';
import remarkGfm from 'remark-gfm';
import { useMDXComponents } from '@/mdx-components';
import { Code } from 'bright';

// app/page.js
export default async function RemoteMdxPage() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  try {
    const res = await fetch(
      `http://${process.env.NEXT_PUBLIC_FILE_API}/computer-science/index.mdx`,
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
  } catch (error) {
    console.log(error);
  }
}
