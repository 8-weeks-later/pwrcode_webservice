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
import { useAtomValue } from 'jotai';
import { searchKeywordAtom } from '@/app/state';

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
  padding: ${(props) => props.padding};
  animation: ${(props) => props.animation};
  gap: 10px;
  z-index: ${(props) => props.zIndex};
  overflow: ${(props) => props.overflow};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;
