'use client';
import styled from '@emotion/styled';
import { FunctionComponent, ReactElement, PropsWithChildren } from 'react';
import React from 'react';

interface BoxProps extends PropsWithChildren {
  children: ReactElement;
  flexDirection: string;
  padding?: string;
  gap?: string;
  width?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  flexShrink?: string;
  background?: string;
  zIndex?: string;
  position?: string;
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
      zIndex={props.zIndex}
      position={props.position}
      padding={props.padding}
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
  z-index: ${(props) => props.zIndex};
  position: ${(props) => props.position};
  padding: ${(props) => props.padding};
`;
