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
import { SearchCardGroup } from './CardGroup.stories';
import { SearchCardStory } from '../../molecules/Card/Card.stories';
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
  data?: ResponseBodyProps;
}

export interface ResponseBodyProps {
  hits: any[];
  query: string;
  processingTimeMs: number;
  limit: number;
  offset: number;
  estimatedTotalHits: number;
}

export async function CardGroupDataServerComponent(
  props: CardDataServerComponentProps,
) {
  const data: ResponseBodyProps = await getCardData();

  return <CardGroup data={data}></CardGroup>;
}

export async function CardGroupSearchDataServerComponent(
  props: CardDataServerComponentProps,
) {
  const data: ResponseBodyProps = await getCardData();

  return (
    <>
      {data?.hits?.map((item) => {
        const search = SearchCardStory?.render;

        return (
          <Card {...SearchCardStory.args} data={item}>
            <Text {...ReactText.args} text={item.title} />
            <TextArea {...SearchTextArea.args} text={item.content} />
            <Link {...MainLink.args} href={item.link} />
          </Card>
        );
      })}
    </>
  );
}

// const Component = styled.div<CardDataServerComponentProps>``;
