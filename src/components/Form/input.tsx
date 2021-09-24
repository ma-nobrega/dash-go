import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import React from 'react';

interface Input extends ChakraInputProps {
  name: string;
  label?: string;
}
export function Input({ name, label, ...rest }: Input): React.ReactElement {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        type="email"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: 'gray.900',
        }}
        {...rest}
      />
    </FormControl>
  );
}

export default Input;
