'use client';
import styled from '@emotion/styled';

export interface SearchLayoutProps {
  children?: React.ReactNode;
  display?: string;
  gap?: string;
  background?: string;
  position?: string;
  zIndex?: string;
  width?: string;
  height?: string;
}

export function SearchLayout(props: SearchLayoutProps) {
  return (
    <Component
      display={props.display}
      position={props.position}
      background={props.background}
      zIndex={props.zIndex}
      width={props.width}
      height={props.height}
    >
      {props.children}
    </Component>
  );
}

const Component = styled.div<SearchLayoutProps>`
  display: ${(props) => props.display};
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.gap};
  background: ${(props) => props.background};
  position: ${(props) => props.position};
  z-index: ${(props) => props.zIndex};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
