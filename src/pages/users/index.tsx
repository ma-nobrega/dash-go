/* eslint-disable no-shadow */
import * as C from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { useQuery } from 'react-query';
import Link from 'next/link';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import Sidebar from '../../components/Sidebar';
import { api } from '../../services/api';

export default function UserList(): React.ReactElement {
  const { data, isLoading, isFetching, error } = useQuery(
    'users',
    async () => {
      const { data } = await api.get('/users');
      const users = data.users.map(user => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          }),
        };
      });
      return users;
    },
    {
      staleTime: 1000 * 5,
    }
  );

  const isWideVersion = C.useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <C.Box>
      <Header />
      <C.Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <C.Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <C.Flex mb="8" justify="space-between" align="center">
            <C.Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && (
                <C.Spinner size="sm" color="gray.500" ml="4" />
              )}
            </C.Heading>
            <Link href="/users/create" passHref>
              <C.Button
                as="a"
                size="sm"
                colorScheme="green"
                leftIcon={<C.Icon as={RiAddLine} />}
                fontSize="20"
              >
                Criar novo
              </C.Button>
            </Link>
          </C.Flex>
          {isLoading ? (
            <C.Flex justify="center">
              <C.Spinner />
            </C.Flex>
          ) : error ? (
            <C.Flex justify="center">
              <C.Text>Falha ao obter dados do usuários</C.Text>
            </C.Flex>
          ) : (
            <>
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
                  {data.map(user => {
                    return (
                      <C.Tr key={user.id}>
                        <C.Td px={['4', '4', '6']}>
                          <C.Checkbox colorScheme="green" />
                        </C.Td>
                        <C.Td>
                          <C.Box>
                            <C.Text fontWeight="bold">{user.name}</C.Text>
                            <C.Text fontSize="sm" color="gray.300">
                              {user.email}
                            </C.Text>
                          </C.Box>
                        </C.Td>
                        {isWideVersion && <C.Td>{user.createdAt}</C.Td>}
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
                    );
                  })}
                </C.Tbody>
              </C.Table>
              <Pagination />
            </>
          )}
        </C.Box>
      </C.Flex>
    </C.Box>
  );
}
