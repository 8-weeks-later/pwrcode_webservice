'use client';
import { FunctionComponent, ReactElement, PropsWithChildren } from 'react';
import React from 'react';
import styled from '@emotion/styled';

export interface CardProps extends PropsWithChildren {
  children: ReactElement;
  flexDirection: string;
  border: string;
  width?: string;
  height?: string;
  flexShrink: string;
  padding: string;
}

export function Card(props: CardProps) {
  return (
    <Component
      width={props.width}
      height={props.height}
      flexShrink={props.flexShrink}
      flexDirection={props.flexDirection}
      border={props.border}
      padding={props.padding}
    >
      {props.children}
    </Component>
  );
}

const Component = styled.div<CardProps>`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-shrink: ${(props) => props.flexShrink};
  flex-direction: ${(props) => props.flexDirection};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
`;
