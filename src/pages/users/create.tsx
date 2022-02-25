import * as C from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { Input } from '../../components/Form/input';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};
const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'No minimo 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
});

export default function CreateUser(): React.ReactElement {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async data => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <C.Box>
      <Header />
      <C.Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <C.Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <C.Heading size="lg" fontWeight="normal">
            Criar usúario
          </C.Heading>
          <C.Divider my="6" borderColor="gray.700" />
          <C.VStack spacing={['6', '8']}>
            <C.SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                error={errors.name}
                {...register('name')}
                name="name"
                label="Nome Completo"
              />
              <Input
                error={errors.email}
                {...register('email')}
                name="email"
                label="E-mail"
              />
            </C.SimpleGrid>
            <C.SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                error={errors.password}
                {...register('password')}
                name="password"
                type="password"
                label="Senha"
              />
              <Input
                error={errors.password_confirmation}
                {...register('password_confirmation')}
                name="password_confirmation"
                type="password"
                label="Confirmação da senha"
              />
            </C.SimpleGrid>
          </C.VStack>
          <C.Flex mt="8" justify="flex-end">
            <C.HStack spacing="4">
              <Link href="/users" passHref>
                <C.Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </C.Button>
              </Link>
              <C.Button
                type="submit"
                colorScheme="green"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </C.Button>
            </C.HStack>
          </C.Flex>
        </C.Box>
      </C.Flex>
    </C.Box>
  );
}
