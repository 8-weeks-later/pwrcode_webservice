'use client';
import styled from '@emotion/styled';

export interface LogoGroupProps {
  children: React.ReactNode;
}

export function Component({ children }: LogoGroupProps) {
  return <LogoGroup>{children}</LogoGroup>;
}

const LogoGroup = styled.div``;
