'use client';
import { FunctionComponent, ReactElement, PropsWithChildren } from 'react';
import React from 'react';
import styled from '@emotion/styled';

interface DropDownProps extends PropsWithChildren {
  children: ReactElement;
  options: {a: string}[];
}

export function DropDown(props: DropDownProps) {
  return <Component>{
        props.options.map((option)=>{
            return new Box()
        })
    }</Component>;
}

const Component = styled.select``;
