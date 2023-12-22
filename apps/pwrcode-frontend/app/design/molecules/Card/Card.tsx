'use client';
import { FunctionComponent, ReactElement, PropsWithChildren } from 'react';
import React from 'react';
import styled from '@emotion/styled';

export interface CardProps extends PropsWithChildren {
  children?: ReactElement[] | ReactElement;
  flexDirection?: string;
  background?: string;
  border?: string;
  width?: string;
  height?: string;
  flexShrink?: string;
  padding?: string;
  animation?: string;
  justifyContent?: string;
  alignItems?: string;
  zIndex?: string;
  gridTemplateColumns?: string;
  display?: string;
  gap?: string;
  data?: any;
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
      animation={props.animation}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      zIndex={props.zIndex}
      background={props.background}
      gridTemplateColumns={props.gridTemplateColumns}
      display={props.display}
      gap={props.gap}
      data={props.data}
    >
      {props.children}
    </Component>
  );
}

const Component = styled.div<CardProps>`
  display: ${(props) => props.display};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-shrink: ${(props) => props.flexShrink};
  flex-direction: ${(props) => props.flexDirection};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  animation: ${(props) => props.animation};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  z-index: ${(props) => props.zIndex};
  background: ${(props) => props.background};
  grid-template-columns: ${(props) => props.gridTemplateColumns};
  gap: ${(props) => props.gap};
`;
