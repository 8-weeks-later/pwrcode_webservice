'use client';
import { FunctionComponent, ReactElement, PropsWithChildren } from 'react';
import React from 'react';
import styled from '@emotion/styled';

interface CardProps extends PropsWithChildren {
  children: ReactElement;
}

export function Card(props: CardProps) {
  return <Component>{props.children}</Component>;
}

const Component = styled.div``;
