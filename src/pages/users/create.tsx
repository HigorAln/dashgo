import { SimpleGrid, VStack, Divider, Flex, Box, Heading, HStack, Button } from '@chakra-ui/react'
import { Input } from '../../components/form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import Link from 'next/link'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { SubmitHandler, useForm } from 'react-hook-form'

interface CreateUserFormData {
  name:string;
  email:string;
  password: string;
  password_confirmation:string;
}

const CreateUserFormShema = yup.object().shape({
  name: yup.string().required("Nome obrigatorio"),
  email: yup.string().required("E-mail obrigatorio").email("E-mail invalido"),
  password: yup.string().required("Senha obrigatoria").min(6, 'No minimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas precisam ser iguais')
})


export default function UserList(){
  const { register, handleSubmit, formState, formState: {errors} } = useForm({
    resolver: yupResolver(CreateUserFormShema)
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values)=>{
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

  return(
    <Box>
      <Header />

      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar/>

        <Box
          as='form'
          flex='1'
          borderRadius={8}
          bg='gray.800'
          p={['6','8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading sz='lg'fontWeight="normal">Criar usuario</Heading>
          
          <Divider my='6' borderColor="gray.700" />

          <VStack spacing='8'>
            <SimpleGrid minChildWidth="240px" spacing={['6','8']} w="100%">
              <Input
                name='name'
                label='Nome
                completo'
                type='text'
                {...register('name')} 
                error={errors.name}
              />
              <Input
                name='email'
                label='E-mail'
                type='email'
                error={errors.email}
                {...register('email')} 
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6','8']} w="100%">
             <Input
                name='password'
                label='Password'
                type='password'
                error={errors.password}
                {...register('password')} 
              />
              <Input
                name='password_confirmation'
                label='Confirmação
                da
                senha'
                type='password'
                error={errors.password_confirmation}
                {...register('password_confirmation')} 
              />
            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify="flex-end">
            <HStack spacing='4'>
              <Link href="/users" passHref>
                <Button as="a"colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button type='submit' colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}