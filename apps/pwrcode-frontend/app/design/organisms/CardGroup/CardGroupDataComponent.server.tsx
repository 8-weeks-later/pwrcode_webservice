'use client';

import { PropsWithChildren } from 'react';
import { Text } from '../../atoms/Text/Text';
import { Link } from '../../atoms/Link/Link';

import { TextArea } from '../../atoms/TextArea/TextArea';
import {
  MainTextArea,
  SearchTextArea,
} from '../../atoms/TextArea/TextArea.stories';
import { ReactText } from '../../atoms/Text/Text.stories';
import { MainLink } from '../../atoms/Link/Link.stories';
// import { SearchCard } from '../../molecules/Card/Card.stories';
import { Card } from '../../molecules/Card/Card';
import { CardGroup } from './CardGroup';
import { MainCard, SearchCardStory } from '../../molecules/Card/Card.stories';
import { atom, useAtom, useAtomValue } from 'jotai';
import {
  SearchKeywordProps,
  readAndWriteSearchKeywordAtom,
  searchKeywordAtom,
  testAtom,
} from '@/app/state';
import { useHydrateAtoms } from 'jotai/utils';
import {
  QueryClient,
  QueryClientProvider,
  QueryKey,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { atomsWithQuery } from 'jotai-tanstack-query';

// import styled from '@emotion/styled';

async function getCardData() {
  const response = await fetch('http://localhost:4000/search', {
    method: 'POST',
    body: JSON.stringify({
      text: '상태',
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch');
  }

  return response.json();
}

export interface CardDataServerComponentProps extends PropsWithChildren {
  children?: React.ReactNode;
  data?: string;
}

export interface ResponseBodyProps {
  hits: any[];
  query: string;
  processingTimeMs: number;
  limit: number;
  offset: number;
  estimatedTotalHits: number;
}

export function CardGroupDataServerComponent(
  props: CardDataServerComponentProps,
) {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: (): Promise<ResponseBodyProps> =>
      fetch('http://localhost:4000/search', {
        method: 'POST',
        body: JSON.stringify({
          text: '상태',
        }),
      }).then((res) => res.json()),
  });

  if (error) {
    throw new Error('Failed to fetch');
  }

  return (
    <>
      {data?.hits?.map((item) => {
        return (
          <Card {...MainCard.args} data={item}>
            <Text {...ReactText.args} text={item.title} />
            <TextArea {...SearchTextArea.args} text={item.content} />
            <Link {...MainLink.args} href={item.link} />
          </Card>
        );
      })}
    </>
  );
}

export function CardGroupMainDataServerComponent(
  props: CardDataServerComponentProps,
) {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: (): Promise<ResponseBodyProps> =>
      fetch('http://localhost:4000/search', {
        method: 'POST',
        body: JSON.stringify({
          text: '상태',
        }),
      }).then((res) => res.json()),
  });

  if (error) {
    throw new Error('Failed to fetch');
  }

  return (
    <>
      {data?.hits?.map((item) => {
        return (
          <Card {...MainCard.args} data={item}>
            <Text {...ReactText.args} text={item.title} />
            <TextArea {...SearchTextArea.args} text={item.content} />
            <Link {...MainLink.args} href={item.link} />
          </Card>
        );
      })}
    </>
  );
}

// const reusedAtom = atom((get) => get(searchKeywordAtom);

export function CardGroupSearchDataServerComponent(
  props: CardDataServerComponentProps,
) {
  const [data] = useAtom(testAtom);

  console.log(data);

  return (
    <>
      {data?.hits?.map((item, index) => {
        return (
          <Card {...SearchCardStory.args} data={item} key={index}>
            <Text {...ReactText.args} text={item.title} key={index} />
            <TextArea
              {...SearchTextArea.args}
              text={item.content}
              key={index}
            />
            <Link {...MainLink.args} href={item.link} key={index} />
          </Card>
        );
      })}
    </>
  );
}

// const Component = styled.div<CardDataServerComponentProps>``;
