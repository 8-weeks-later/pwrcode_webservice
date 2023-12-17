'use client';
import styled from '@emotion/styled';

export interface MainPageProps {
  children: React.ReactNode;
}

export function MainPage({ children }: MainPageProps) {
  return <Component>{children}</Component>;
}

const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: '10px';
`;
