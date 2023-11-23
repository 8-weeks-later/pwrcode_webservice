'use client';
import styled from '@emotion/styled';

export interface CollectionProps {
  children: React.ReactNode;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  gap?: string;
  width?: string;
  height?: string;
}

export function Collection(props: CollectionProps) {
  return (
    <Component
      width={props.width}
      height={props.height}
      display={props.display}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      flexDirection={props.flexDirection}
      gap={props.gap}
    >
      {props.children}
    </Component>
  );
}

const Component = styled.div<CollectionProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
`;
