'use client';
import { FunctionComponent, ReactElement, PropsWithChildren } from 'react';
import React from 'react';
import styled from '@emotion/styled';

interface DropDownDataObj {
  value: string;
  name: string;
}
interface DropDownProps extends PropsWithChildren {
  data: DropDownDataObj[];
}

export function DropDown(props: DropDownProps) {
  const optionsList: ReactElement[] = props.data.map(
    (data: DropDownDataObj) => {
      return <OptionComponent value={data.value}>{data.name}</OptionComponent>;
    },
  );

  return <Component>{optionsList}</Component>;
}

const Component = styled.select``;

const OptionComponent = styled.option``;
