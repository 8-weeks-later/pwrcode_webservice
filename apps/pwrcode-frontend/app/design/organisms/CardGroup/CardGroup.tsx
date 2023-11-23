'use client';
import styled from '@emotion/styled';
import { ReactElement, ReactNode } from 'react';
import { CardProps } from '../../molecules/Card/Card';

export interface CardGroupProps {
  children: ReactElement<CardProps>;
  width?: string;
  padding?: string;
}

export function CardGroup(props: CardGroupProps) {
  return (
    <Component width={props.width} padding={props.padding}>
      {props.children}
    </Component>
  );
}

const Component = styled.div<CardGroupProps>`
  display: flex;
  width: ${(props) => props.width};
  flex-direction: column;
  padding: ${(props) => props.padding};
  gap: 10px;
`;
