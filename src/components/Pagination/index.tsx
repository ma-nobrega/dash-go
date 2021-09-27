import * as C from '@chakra-ui/react';
import PaginationItem from './PaginationItem';

export default function Pagination(): React.ReactElement {
  return (
    <C.Stack
      direction={['column', 'row']}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <C.Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </C.Box>
      <C.HStack spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
      </C.HStack>
    </C.Stack>
  );
}
