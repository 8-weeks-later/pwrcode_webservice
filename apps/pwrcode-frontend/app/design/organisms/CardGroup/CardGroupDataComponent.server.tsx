'use client';
import styled from '@emotion/styled';

import { PropsWithChildren, useState } from 'react';
import { Text } from '../../atoms/Text/Text';
import { CustomLink } from '../../atoms/Link/Link';

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

import { motion } from 'framer-motion';

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

  if (data?.hits?.length === 0) {
    return (
      <>
        <Card {...MainCard.args}>
          <Text {...ReactText.args} text={'NO DATA'} />
        </Card>
      </>
    );
  }

  return (
    <>
      {data?.hits?.map((item) => {
        return (
          <Card {...MainCard.args} data={item}>
            <Text {...ReactText.args} text={item.title} />
            <TextArea {...SearchTextArea.args} text={item.content} />
            <CustomLink {...MainLink.args} href={item.link} />
          </Card>
        );
      })}
    </>
  );
}

const StyledMainComponent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  /* animation: 30s fadein 1s infinite running slideintest; */
  /* &:hover {
    animation-play-state: paused;
  } */
  & > div {
    /* transform: translate(100vmin, 0px); */
    /* animation: 5s ease-in infinite normal forwards slidein; */
    position: absolute;
    height: 75vmin;
  }
`;

const variants = {
  open: { x: 0, y: 0, zIndex: 3 },
  closed: { x: '1vmax', y: '1vmax', zIndex: 2 },
  boxed: { x: '0vw', y: '70vh', zIndex: 1 },
};

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

  const [cardsState, setCardsState] = useState([1, 0, -1]);

  return (
    <StyledMainComponent>
      {data?.hits?.map((item, index) => {
        return (
          <motion.div
            variants={variants}
            transition={{ type: 'spring', stiffness: 100 }}
            onClick={() => {
              const copyArr = new Array(3).fill(-1);
              copyArr[index] = 1;
              copyArr[(index + 1) % copyArr.length] = 0;
              setCardsState(copyArr);
            }}
            animate={
              cardsState[index] === 1
                ? 'open'
                : cardsState[index] === 0
                ? 'closed'
                : 'boxed'
            }
          >
            <Card {...MainCard.args} data={item}>
              <Text {...ReactText.args} text={item.title} />
              <TextArea {...SearchTextArea.args} text={item.content} />
              <CustomLink {...MainLink.args} href={item.link} />
            </Card>
          </motion.div>
        );
      })}
    </StyledMainComponent>
  );
}

// const reusedAtom = atom((get) => get(searchKeywordAtom);

export function CardGroupSearchDataServerComponent(
  props: CardDataServerComponentProps,
) {
  const [data] = useAtom(testAtom);

  if (data?.hits?.length === 0) {
    return (
      <>
        <Card {...SearchCardStory.args}>
          <Text {...ReactText.args} text={'NO DATA'} />
        </Card>
      </>
    );
  }

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
            <CustomLink {...MainLink.args} href={item.link} key={index} />
          </Card>
        );
      })}
    </>
  );
}

// const Component = styled.div<CardDataServerComponentProps>``;
