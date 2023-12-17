'use client';
import styled from '@emotion/styled';

export interface DetailPageProps {
  children: React.ReactNode;
}

export function DetailPage({ children }: DetailPageProps) {
  return <Component>{children}</Component>;
}

const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: '10px';
`;
