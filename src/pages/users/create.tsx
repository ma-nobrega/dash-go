import * as C from '@chakra-ui/react';
import { Input } from '../../components/Form/input';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

export default function CreateUser(): React.ReactElement {
  return (
    <C.Box>
      <Header />
      <C.Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <C.Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <C.Heading size="lg" fontWeight="normal">
            Criar usúario
          </C.Heading>
          <C.Divider my="6" borderColor="gray.700" />
          <C.VStack spacing="8">
            <C.SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name" label="Nome Completo" />
              <Input name="email" label="E-mail" />
            </C.SimpleGrid>
            <C.SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="password" type="password" label="Senha" />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação da senha"
              />
            </C.SimpleGrid>
          </C.VStack>
          <C.Flex mt="8" justify="flex-end">
            <C.HStack spacing="4">
              <C.Button colorScheme="whiteAlpha">Cancelar</C.Button>
              <C.Button colorScheme="pink">Salvar</C.Button>
            </C.HStack>
          </C.Flex>
        </C.Box>
      </C.Flex>
    </C.Box>
  );
}
