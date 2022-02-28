import * as C from '@chakra-ui/react';

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}

export default function PaginationItem({
  isCurrent = false,
  number,
  onPageChange,
}: PaginationItemProps): React.ReactElement {
  if (isCurrent) {
    return (
      <C.Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="green"
        disabled
        _disabled={{ bgColor: 'green.500', cursor: 'default' }}
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
      onClick={() => onPageChange(number)}
    >
      {number}
    </C.Button>
  );
}
