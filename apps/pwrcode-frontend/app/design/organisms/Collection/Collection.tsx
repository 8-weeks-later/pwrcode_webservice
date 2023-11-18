'use client';
import styled from '@emotion/styled';

export interface CollectionProps {
  children: React.ReactNode;
}

export function Component({ children }: CollectionProps) {
  return <Collection>{children}</Collection>;
}

const Collection = styled.div``;
