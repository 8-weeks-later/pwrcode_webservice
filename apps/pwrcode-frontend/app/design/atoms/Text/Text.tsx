'use client';

import styled from '@emotion/styled';
import React from 'react';

export interface TextProps {
  fontFamily: string;
  text: string;
  textAlign: string;
  fontStyle: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
}

export function Text(props: TextProps) {
  return <Component {...props}>{props.text}</Component>;
}

const Component = styled.span<TextProps>`
  text-align: ${(props) => props.textAlign};
  font-family: ${(props) => props.fontFamily};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
`;
