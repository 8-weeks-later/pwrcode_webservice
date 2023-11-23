'use client';
import styled from '@emotion/styled';

export interface MainLayoutProps {
  children?: React.ReactNode;
  display?: string;
  gap?: string;
  background?: string;
}

export function MainLayout(props: MainLayoutProps) {
  return (
    <Component display={props.display} background={props.background}>
      {props.children}
    </Component>
  );
}

const Component = styled.div<MainLayoutProps>`
  display: ${(props) => props.display};
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.gap};
  background: ${(props) => props.background};
`;
