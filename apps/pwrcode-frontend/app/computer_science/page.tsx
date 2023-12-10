import { MDXRemote } from 'next-mdx-remote/rsc';
import { Suspense } from 'react';

// app/page.js
export default async function RemoteMdxPage() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  // const res = await fetch('https://...');
  // const markdown = await res.text();
  return (
    <Suspense fallback={<>Loading...</>}>
      <MDXRemote source={'markdown'} />
    </Suspense>
  );
}
