'use client';
import React from 'react';
import styled from '@emotion/styled';

export interface FormProps {
  placeholder: string;
}

export function Form(props: FormProps) {
  return <Component {...props} />;
}
const Component = styled.input<FormProps>`
  width: ${(props) => props.width};
`;
