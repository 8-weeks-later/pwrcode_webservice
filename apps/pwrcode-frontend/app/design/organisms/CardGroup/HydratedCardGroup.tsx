import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import getQueryClient from '@/app/getQueryClient';
import {
  CardGroupSearchDataServerComponent,
  ResponseBodyProps,
} from './CardGroupDataComponent.server';

export default async function HydratedCardGroup() {
  const queryClient = getQueryClient();
  // await queryClient.prefetchQuery({
  //   queryKey: ['repoData'],
  //   queryFn: (): Promise<ResponseBodyProps> =>
  //     fetch('http://localhost:4000/search', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         text: '',
  //       }),
  //     }).then((res) => res.json()),
  // });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      {/* <CardGroupSearchDataServerComponent /> */}
    </HydrationBoundary>
  );
}
