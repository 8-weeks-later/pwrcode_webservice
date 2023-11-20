'use client';

import styled from '@emotion/styled';
import React from 'react';

export interface TextAreaProps {
  font: string;
  text: string;
  fontStyle: string;
  fontWeight: string;
}

export function TextArea(props: TextAreaProps) {
  return <Component {...props}>{props.text}</Component>;
}

const Component = styled.pre<TextAreaProps>`
  font-family: ${(props) => props.font};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
`;
