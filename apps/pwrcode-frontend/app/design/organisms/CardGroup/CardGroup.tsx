'use client';
import styled from '@emotion/styled';

export interface CardGroupProps {
  children: React.ReactNode;
}

export function Component({ children }: CardGroupProps) {
  return <CardGroup>{children}</CardGroup>;
}

const CardGroup = styled.div``;
