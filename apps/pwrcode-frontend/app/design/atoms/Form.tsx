'use client'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'
import React from 'react';
import { SetStateAction, useState } from 'react';

export interface FormType {

}

export function Form({  }) {

    const [input, setInput] = useState('');
  
    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => setInput(e.target.value)

    const isError = input === '';

    return (
        <FormControl isInvalid={isError}>
          <FormLabel>Email</FormLabel>
          <Input type='email' value={input} onChange={handleInputChange} />
          {!isError ? (
            <FormHelperText>
              Enter the email you'd like to receive the newsletter on.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>
      )
    
}
