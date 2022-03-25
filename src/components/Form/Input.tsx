import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  label: string;
  id: string;
}

export function Input({ id, label, ...rest }: InputProps) {
  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <ChakraInput
        type="text"
        id={id}
        {...rest}
        borderRadius="4px"
        borderColor="gray.200"
      />
    </FormControl>
  );
}
