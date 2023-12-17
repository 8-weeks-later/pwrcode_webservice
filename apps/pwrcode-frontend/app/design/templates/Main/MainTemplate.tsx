'use client';
import styled from '@emotion/styled';
import { LogoGroup } from '../../organisms/LogoGroup/LogoGroup';

export interface MainTemplateProps {
  children?: React.ReactNode;
  height?: string;
  display?: string;
  gap?: string;
  background?: string;
  component1?: React.ReactNode;
}

export function MainTemplate(props: MainTemplateProps) {
  return (
    <Component
      display={props.display}
      height={props.height}
      background={props.background}
    >
      {props.children}
    </Component>
  );
}

const Component = styled.div<MainTemplateProps>`
  display: ${(props) => props.display};
  gap: ${(props) => props.gap};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
`;
