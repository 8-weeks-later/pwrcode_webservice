'use client';
import styled from '@emotion/styled';
import { FunctionComponent, ReactElement, PropsWithChildren } from 'react';
import React from 'react';

interface BoxProps extends PropsWithChildren {
  children: ReactElement;
  flexDirection: string;
  gap?: string;
  width?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  flexShrink?: string;
  background?: string;
}

export function Box(props: BoxProps) {
  return (
    <Component
      flexDirection={props.flexDirection}
      gap={props.gap}
      width={props.width}
      height={props.height}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      flexShrink={props.flexShrink}
      background={props.background}
    >
      {props.children}
    </Component>
  );
}

const Component = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-shrink: ${(props) => props.flexShrink};
  background: ${(props) => props.background};
`;
