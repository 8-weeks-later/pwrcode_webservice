'use client';

import styled from '@emotion/styled';
import React from 'react';

export interface TextAreaProps {
  fontFamily: string;
  text?: string;
  fontStyle: string;
  fontWeight: string;
  margin: string;
  fontSize: string;
  lineHeight: string;
  textAlign: string;
  width?: string;
  height?: string;
  flexShrink?: string;
}

export function TextArea(props: TextAreaProps) {
  return (
    <Component
      fontFamily={props.fontFamily}
      fontStyle={props.fontStyle}
      fontWeight={props.fontWeight}
      fontSize={props.fontSize}
      lineHeight={props.lineHeight}
      textAlign={props.textAlign}
      margin={props.margin}
      width={props.width}
      height={props.height}
      flexShrink={props.flexShrink}
    >
      {props.text}
    </Component>
  );
}

const Component = styled.pre<TextAreaProps>`
  font-family: ${(props) => props.fontFamily};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-shrink: ${(props) => props.flexShrink};
`;
