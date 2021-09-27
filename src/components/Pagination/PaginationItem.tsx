import * as C from '@chakra-ui/react';

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
}

export default function PaginationItem({
  isCurrent = false,
  number,
}: PaginationItemProps): React.ReactElement {
  if (isCurrent) {
    return (
      <C.Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bgColor: 'pink.500', cursor: 'default' }}
      >
        {number}
      </C.Button>
    );
  }
  return (
    <C.Button
      size="sm"
      fontSize="xs"
      width="4"
      bgColor="gray.700"
      _hover={{ bgColor: 'gray.500' }}
    >
      {number}
    </C.Button>
  );
}
