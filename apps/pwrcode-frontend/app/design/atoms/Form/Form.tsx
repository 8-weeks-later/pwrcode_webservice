'use client';
import React from 'react';
import styled from '@emotion/styled';

export interface FormProps {
  placeholder: string;
  border?: string;
  appearance?: string;
  background?: string;
  color?: string;
  width?: string;
}

export function Form(props: FormProps) {
  return <Component {...props} />;
}
const Component = styled.input<FormProps>`
  width: ${(props) => props.width};
  appearance: ${(props) => props.appearance};
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
