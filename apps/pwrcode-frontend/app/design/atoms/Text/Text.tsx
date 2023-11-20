'use client';

import styled from '@emotion/styled';
import React from 'react';

export interface TextProps {
  font: string;
  text: string;
  fontStyle: string;
  fontWeight: string;
}

export function Text(props: TextProps) {
  return <Component {...props}>{props.text}</Component>;
}

const Component = styled.span<TextProps>`
  font-family: ${(props) => props.font};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
`;
