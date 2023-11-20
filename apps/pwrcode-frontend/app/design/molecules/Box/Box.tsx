'use client';
import styled from '@emotion/styled';
import { FunctionComponent, ReactElement, PropsWithChildren } from 'react';
import React from 'react';

interface BoxProps extends PropsWithChildren {
  children: ReactElement;
  flexDirection: string;
  gap?: string;
}

export function Box(props: BoxProps) {
  return (
    <Component flexDirection={props.flexDirection} gap={props.gap}>
      {props.children}
    </Component>
  );
}

const Component = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
`;
