'use client';

import styled from '@emotion/styled';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import { searchKeywordAtom } from '@/app/state';

export interface ButtonProps {
  fontFamily?: string;
  text: string;
  textAlign?: string;
  fontStyle?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  color?: string;
  path?: string;
  background?: string;
}

export function Button(props: ButtonProps) {
  const router = useRouter();

  return (
    <Component onClick={() => router.push(`/${props.path}`)} {...props}>
      {props.text}
    </Component>
  );
}

export function SearchButton(props: ButtonProps) {
  const router = useRouter();

  // const [keyword, setKeyword] = useAtom(searchKeywordAtom);

  return (
    <Component
      onClick={() => {
        // setKeyword({ keyword: e.target.value });

        router.push(`/${props.path}`);
      }}
      {...props}
    >
      {props.text}
    </Component>
  );
}

const Component = styled.button<ButtonProps>`
  text-align: ${(props) => props.textAlign};
  font-family: ${(props) => props.fontFamily};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
`;
