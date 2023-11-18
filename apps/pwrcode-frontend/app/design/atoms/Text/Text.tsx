'use client';

import styled from '@emotion/styled';
import React from 'react';

export interface TextProps {
  font: string;
  children: string;
  fontStyle: string;
  fontWeight: string;
}

export function Text(props: TextProps) {
  return <Component {...props}>{props.children}</Component>;
}

const Component = styled.span<TextProps>`
  font-family: ${(props) => props.font};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
`;
