'use client';

import styled from '@emotion/styled';
import React from 'react';
import Link from 'next/link';
import { Theme } from '@emotion/react';
import { useRouter } from 'next/navigation';

export interface LinkProps {
  href?: string;
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
  padding?: string;
  borderRadius?: string;
  border?: string;
}

export function CustomLink(props: LinkProps) {
  return (
    <Component
      afterIcon={props.afterIcon}
      fontFamily={props.fontFamily}
      fontStyle={props.fontStyle}
      fontWeight={props.fontWeight}
      fontSize={props.fontSize}
      margin={props.margin}
      whiteSpace={props.whiteSpace}
      textDecorationLine={props.textDecorationLine}
      color={props.color}
      padding={props.padding}
      borderRadius={props.borderRadius}
      border={props.border}
    >
      <Link href={`/${props.href}`}>{props.text}</Link>
    </Component>
  );
}

const Component = styled.div<LinkProps>`
  font-family: ${(props) => props.fontFamily};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  white-space: ${(props) => props.whiteSpace};
  text-decoration-line: ${(props) => props.textDecorationLine};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  &::after {
    content: ' ${(props) => props.afterIcon}';
    color: black;
  }
`;
