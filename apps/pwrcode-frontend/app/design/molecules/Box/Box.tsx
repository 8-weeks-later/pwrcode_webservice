'use client';
import styled from '@emotion/styled';
import { FunctionComponent, ReactElement, PropsWithChildren } from 'react';
import React from 'react';

interface BoxProps extends PropsWithChildren {
  children: ReactElement;
}

export function Box(props: BoxProps) {
  return <Component>{props.children}</Component>;
}

const Component = styled.div``;
