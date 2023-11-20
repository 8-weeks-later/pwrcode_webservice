'use client';
import styled from '@emotion/styled';
import { ReactElement, ReactNode } from 'react';
import { CardProps } from '../../molecules/Card/Card';

export interface CardGroupProps {
  children: ReactElement<CardProps>;
}

export function Component(props: CardGroupProps) {
  return <CardGroup>{props.children}</CardGroup>;
}

const CardGroup = styled.div`

  display: flex;
  flex-direction: column;
  gap: 10px;

`;
