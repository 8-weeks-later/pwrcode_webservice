'use client';
import { FunctionComponent, ReactElement, PropsWithChildren } from 'react';
import React from 'react';
import styled from '@emotion/styled';

export interface CardProps extends PropsWithChildren {
  children: ReactElement;
  flexDirection: string;
}

export function Card(props: CardProps) {
  return (
    <Component flexDirection={props.flexDirection}>{props.children}</Component>
  );
}

const Component = styled.div<CardProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
`;
