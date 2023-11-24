'use client';
import { FunctionComponent, ReactElement, PropsWithChildren } from 'react';
import React from 'react';
import styled from '@emotion/styled';

interface DropDownDataObj {
  value: string;
  name: string;
}
interface DropDownProps extends PropsWithChildren {
  data?: DropDownDataObj[];
  placeholder?: string;
  width?: string;
  border?: string;
  appearance?: string;
  background?: string;
  color?: string;
}

export function DropDown(props: DropDownProps) {
  const optionsList: ReactElement[] | undefined = props.data?.map(
    (data: DropDownDataObj) => {
      return <OptionComponent value={data.value}>{data.name}</OptionComponent>;
    },
  );

  return (
    <Component
      width={props.width}
      appearance={props.appearance}
      background={props.background}
      border={props.border}
      color={props.color}
    >
      {optionsList}
    </Component>
  );
}

const Component = styled.select<DropDownProps>`
  width: ${(props) => props.width};

  & select {
    appearance: ${(props) => props.appearance};
  }
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
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
`;

const OptionComponent = styled.option``;
