import * as C from '@chakra-ui/react';

export default function Logo(): React.ReactElement {
  return (
    <C.Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
      dashgo
      <C.Text as="span" ml="1" color="pink.500">
        .
      </C.Text>
    </C.Text>
  );
}
