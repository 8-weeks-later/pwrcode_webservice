'use client';
import styled from '@emotion/styled';

export interface NavbarProps {
  children: React.ReactNode;
}

export function Component({ children }: NavbarProps) {
  return <Navbar>{children}</Navbar>;
}

const Navbar = styled.div``;
