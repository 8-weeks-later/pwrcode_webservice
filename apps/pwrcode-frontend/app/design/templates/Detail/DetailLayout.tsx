'use client';
import styled from '@emotion/styled';

export interface DetailLayoutProps {
  children?: React.ReactNode;
  display?: string;
  gap?: string;
  background?: string;
  position?: string;
  zIndex?: string;
  width?: string;
  height?: string;
  flexDirection?: string;
  padding?: string;
}

export function DetailLayout(props: DetailLayoutProps) {
  return (
    <Component
      display={props.display}
      position={props.position}
      background={props.background}
      zIndex={props.zIndex}
      width={props.width}
      height={props.height}
      flexDirection={props.flexDirection}
      padding={props.padding}
    >
      {props.children}
    </Component>
  );
}

const Component = styled.div<DetailLayoutProps>`
  display: ${(props) => props.display};
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.gap};
  background: ${(props) => props.background};
  position: ${(props) => props.position};
  z-index: ${(props) => props.zIndex};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-direction: ${(props) => props.flexDirection};
  padding: ${(props) => props.padding};
`;
