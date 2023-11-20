'use client';
import React from 'react';
import styled from '@emotion/styled';

export interface IconProps {
  data: string;
  width: string;
}

export function Icon(props: IconProps) {
  return (
    <Component data={props.data} width={props.width} type="image/svg+xml" />
  );
}
const Component = styled.object<IconProps>``;
