'use client';
import styled from '@emotion/styled';
import {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  cloneElement,
} from 'react';
import { CardProps } from '../../molecules/Card/Card';
import {
  CardGroupSearchDataServerComponent,
  ResponseBodyProps,
} from './CardGroupDataComponent.server';

export interface CardGroupProps extends PropsWithChildren {
  children?: ReactElement;
  width?: string;
  height?: string;
  padding?: string;
  overflow?: string;
  animation?: string;
  zIndex?: string;
  justifyContent?: string;
  alignItems?: string;
  data?: ResponseBodyProps;
  gap?: string;
}

export function CardGroup(props: CardGroupProps) {
  return (
    <Component
      width={props.width}
      height={props.height}
      overflow={props.overflow}
      padding={props.padding}
      animation={props.animation}
      zIndex={props.zIndex}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      gap={props.gap}
    >
      {props.children}
    </Component>
  );
}

const Component = styled.div<CardGroupProps>`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-direction: column;
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  animation: ${(props) => props.animation};
  z-index: ${(props) => props.zIndex};
  overflow: ${(props) => props.overflow};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};

  &::-webkit-scrollbar {
    background: #f2f5f7;

    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ebe3d5;
    border: 1px solid black;
    border-radius: 10px;
  }
`;
