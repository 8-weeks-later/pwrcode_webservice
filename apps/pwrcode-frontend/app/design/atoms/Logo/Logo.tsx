'use client';

import styled from '@emotion/styled';
import React from 'react';

export interface ImageProps {
  width: string;
  src: string;
}

export function Logo(props: ImageProps) {
  return <Component {...props} />;
}

const Component = styled.img<ImageProps>`
  width: ${(props) => props.width};
  background: url(${(props) => props.src}) center center;
  background-size: contain;
`;
