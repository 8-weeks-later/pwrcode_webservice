'use client';
import { FunctionComponent, ReactElement, PropsWithChildren } from 'react';
import React from 'react';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import { searchKeywordAtom } from '@/app/state';

interface DropDownDataObj {
  value: string;
  name: string;
}
interface DropDownProps extends PropsWithChildren {
  data?: DropDownDataObj[];
  placeholder?: string;
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  appearance?: string;
  background?: string;
  fontFamily?: string;
  color?: string;
  fontSize?: string;
}

export function DropDown(props: DropDownProps) {
  const optionsList: ReactElement[] | undefined = props.data?.map(
    (data: DropDownDataObj) => {
      return (
        <OptionComponent value={data.value} key={data.value}>
          {data.name}
        </OptionComponent>
      );
    },
  );

  const [keyword, setKeyword] = useAtom(searchKeywordAtom);

  return (
    <Component
      width={props.width}
      height={props.height}
      appearance={props.appearance}
      background={props.background}
      border={props.border}
      borderRadius={props.borderRadius}
      color={props.color}
      fontSize={props.fontSize}
      fontFamily={props.fontFamily}
      value={keyword.skill}
      onChange={(e) => {
        setKeyword({
          ...keyword,
          skill: e.target.value,
        });
      }}
    >
      {optionsList}
    </Component>
  );
}

const Component = styled.select<DropDownProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  & select {
    appearance: ${(props) => props.appearance};
  }
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  padding: 10px 20px;
  &::placeholder {
    color: #c2d1d9;
    font-family: 'Ubuntu';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem;
  }

  &:focus {
    outline: 1px solid black;
  }
  cursor: pointer;
`;

const OptionComponent = styled.option``;
