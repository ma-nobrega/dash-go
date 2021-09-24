import {
  Flex,
  Input,
  FormLabel,
  FormControl,
  Button,
  Stack,
} from '@chakra-ui/react';

export default function Home(): React.ReactNode {
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
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              type="email"
              id="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              size="lg"
              _hover={{
                bgColor: 'gray.900',
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Senha</FormLabel>
            <Input
              name="password"
              type="password"
              id="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              size="lg"
              _hover={{
                bgColor: 'gray.900',
              }}
            />
          </FormControl>
        </Stack>
        <Button mt="6" colorScheme="pink" type="submit" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
