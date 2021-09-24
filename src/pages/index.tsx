import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/input';

export default function SignIn(): React.ReactElement {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input type="email" name="email" label="E-mail" />
          <Input type="password" name="password" label="Senha" />
        </Stack>
        <Button mt="6" colorScheme="pink" type="submit" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
