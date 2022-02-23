import { forwardRef, ForwardRefRenderFunction } from 'react';
import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...rest },
  ref
) => {
  return (
    <FormControl>
      {!!label && (
        <FormLabel id={name + label} htmlFor={name}>
          {label}
        </FormLabel>
      )}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{
          bg: 'gray.900',
        }}
        size="lg"
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
