'use client';
import styled from '@emotion/styled';

export interface LogoGroupProps {
  children: React.ReactNode;
  width?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
}

export function LogoGroup(props: LogoGroupProps) {
  return (
    <Component
      width={props.width}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      gap={props.gap}
    >
      {props.children}
    </Component>
  );
}

const Component = styled.div<LogoGroupProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
`;
