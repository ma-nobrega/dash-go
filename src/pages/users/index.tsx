import * as C from '@chakra-ui/react';
import { useEffect } from 'react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import Sidebar from '../../components/Sidebar';

export default function UserList(): React.ReactElement {
  const isWideVersion = C.useBreakpointValue({
    base: false,
    lg: true,
  });

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);
  return (
    <C.Box>
      <Header />
      <C.Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <C.Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <C.Flex mb="8" justify="space-between" align="center">
            <C.Heading size="lg" fontWeight="normal">
              Usuários
            </C.Heading>
            <C.Button
              as="a"
              size="sm"
              colorScheme="green"
              leftIcon={<C.Icon as={RiAddLine} />}
              fontSize="20"
            >
              Criar novo
            </C.Button>
          </C.Flex>
          <C.Table colorScheme="whiteAlpha">
            <C.Thead>
              <C.Tr>
                <C.Th px={['4', '4', '6']} color="gray.300" widht="8">
                  <C.Checkbox colorScheme="green" />
                </C.Th>
                <C.Th>Usuário</C.Th>
                {isWideVersion && <C.Th>Data de cadastro</C.Th>}
                {isWideVersion && <C.Th width="8" />}
              </C.Tr>
            </C.Thead>
            <C.Tbody>
              <C.Tr>
                <C.Td px={['4', '4', '6']}>
                  <C.Checkbox colorScheme="green" />
                </C.Td>
                <C.Td>
                  <C.Box>
                    <C.Text fontWeight="bold">Matheus Nobrega</C.Text>
                    <C.Text fontSize="sm" color="gray.300">
                      matheus.nobrega@gmail.com
                    </C.Text>
                  </C.Box>
                </C.Td>
                {isWideVersion && <C.Td>04 de Dez, 2021</C.Td>}
                {isWideVersion && (
                  <C.Td>
                    <C.Button
                      as="a"
                      size="sm"
                      colorScheme="green"
                      leftIcon={<C.Icon as={RiPencilLine} />}
                      fontSize="16"
                    >
                      Editar
                    </C.Button>
                  </C.Td>
                )}
              </C.Tr>
            </C.Tbody>
          </C.Table>
          <Pagination />
        </C.Box>
      </C.Flex>
    </C.Box>
  );
}
