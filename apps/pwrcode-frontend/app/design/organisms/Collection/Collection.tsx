'use client';
import styled from '@emotion/styled';

export interface CollectionProps {
  children: React.ReactNode;
  flexDirection: string;
  gap?: string;
}

export function Component(props: CollectionProps) {
  return (
    <Collection flexDirection={props.flexDirection}>
      {props.children}
    </Collection>
  );
}

const Collection = styled.div<CollectionProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
`;
