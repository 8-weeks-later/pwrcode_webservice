'use client';

import styled from '@emotion/styled';
import React from 'react';

export interface LinkProps {
  href: string;
  text: string;
  afterIcon?: string;
  font: string;
  fontStyle: string;
  fontWeight: string;
}

export function Link(props: LinkProps) {
  return <Component {...props}>{props.text}</Component>;
}

const Component = styled.a<LinkProps>`
  /* font-family: ${(props) => props.font}; */
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};

  &::after {
    content: ' ${(props) => props.afterIcon}';
    color: black;
  }
`;
