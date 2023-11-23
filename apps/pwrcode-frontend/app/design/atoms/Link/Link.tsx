'use client';

import styled from '@emotion/styled';
import React from 'react';

export interface LinkProps {
  href: string;
  text?: string;
  afterIcon?: string;
  fontFamily?: string;
  fontStyle?: string;
  fontWeight?: string;
  fontSize?: string;
  margin?: string;
  whiteSpace?: string;
  textDecorationLine?: string;
  color?: string;
}

export function Link(props: LinkProps) {
  return (
    <Component
      href={props.href}
      afterIcon={props.afterIcon}
      fontFamily={props.fontFamily}
      fontStyle={props.fontStyle}
      fontWeight={props.fontWeight}
      fontSize={props.fontSize}
      margin={props.margin}
      whiteSpace={props.whiteSpace}
      textDecorationLine={props.textDecorationLine}
      color={props.color}
    >
      {props.text}
    </Component>
  );
}

const Component = styled.a<LinkProps>`
  font-family: ${(props) => props.fontFamily};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  white-space: ${(props) => props.whiteSpace};
  text-decoration-line: ${(props) => props.textDecorationLine};
  color: ${(props) => props.color};
  &::after {
    content: ' ${(props) => props.afterIcon}';
    color: black;
  }
`;
