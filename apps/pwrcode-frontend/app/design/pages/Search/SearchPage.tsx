'use client';
import styled from '@emotion/styled';

export interface SearchPageProps {
  children: React.ReactNode;
}

export function SearchPage({ children }: SearchPageProps) {
  return <Component>{children}</Component>;
}

const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: '10px';
`;
