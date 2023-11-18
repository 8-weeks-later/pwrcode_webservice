'use client';

import styled from '@emotion/styled';
import React from 'react';

export interface TextProps {
  font: string;
  children: string;
}

export function Text(props: TextProps) {
  return <Component {...props}>{props.children}</Component>;
}

const Component = styled.span<TextProps>`
  font: ${(props) => props.font};
`;
