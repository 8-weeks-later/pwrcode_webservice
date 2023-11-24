'use client';
import styled from '@emotion/styled';
import { ReactElement, ReactNode } from 'react';
import { CardProps } from '../../molecules/Card/Card';

export interface CardGroupProps {
  children: ReactElement<CardProps>;
  width?: string;
  padding?: string;
  overflow?: string;
  animation?: string;
  zIndex?: string;
}

export function CardGroup(props: CardGroupProps) {
  return (
    <Component
      width={props.width}
      overflow={props.overflow}
      padding={props.padding}
      animation={props.animation}
      zIndex={props.zIndex}
    >
      {props.children}
    </Component>
  );
}

const Component = styled.div<CardGroupProps>`
  display: flex;
  width: ${(props) => props.width};
  flex-direction: column;
  padding: ${(props) => props.padding};
  animation: ${(props) => props.animation};
  gap: 10px;
  z-index: ${(props) => props.zIndex};
`;
