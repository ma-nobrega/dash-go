import * as C from '@chakra-ui/react';

export default function Profile(): React.ReactElement {
  return (
    <C.Flex align="center">
      <C.Box mr="4" textAlign="right">
        <C.Text>Matheus Nobrega</C.Text>
        <C.Text color="gray.300" fontSize="small">
          matheus.nobrega@gmail.com
        </C.Text>
      </C.Box>
      <C.Avatar
        size="md"
        name="Matheus Nobrega"
        src="https://github.com/ma-nobrega.png"
      />
    </C.Flex>
  );
}
