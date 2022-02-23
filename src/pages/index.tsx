import { Flex, Button, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Input } from '../components/Form/input';

export default function SignIn(): React.ReactElement {
  const { register, handleSubmit } = useForm();

  function handleSignIn(data): void {
    console.log(data);
  }
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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input label="E-mail" type="email" {...register('email')} />
          <Input label="Password" type="password" {...register('password')} />
        </Stack>
        <Button mt="6" colorScheme="pink" type="submit" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
