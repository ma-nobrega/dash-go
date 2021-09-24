import * as C from '@chakra-ui/react';

export default function Pagination(): React.ReactElement {
  return (
    <C.HStack mt="8" justify="space-between" align="center" spacing="6">
      <C.Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </C.Box>
      <C.HStack spacing="2">
        <C.Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{ bgColor: 'pink.500', cursor: 'default' }}
        >
          1
        </C.Button>
        <C.Button
          size="sm"
          fontSize="xs"
          width="4"
          bgColor="gray.700"
          _hover={{ bgColor: 'gray.500' }}
        >
          2
        </C.Button>
        <C.Button
          size="sm"
          fontSize="xs"
          width="4"
          bgColor="gray.700"
          _hover={{ bgColor: 'gray.500' }}
        >
          3
        </C.Button>
        <C.Button
          size="sm"
          fontSize="xs"
          width="4"
          bgColor="gray.700"
          _hover={{ bgColor: 'gray.500' }}
        >
          4
        </C.Button>
      </C.HStack>
    </C.HStack>
  );
}
