import { Checkbox, Button, Flex, Box, Heading, Icon, Table, Thead, Tbody, Th, Tr, Td, Text, useBreakpointValue } from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';
import Link from 'next/link'

export default function UserList(){
  const isWideVersion = useBreakpointValue({
    base:false,
    lg: true,
  })
  return(
    <Box>
      <Header />

      <Flex w='100%' my='6' maxW={1480} mx='auto' px='3'>
        <Sidebar/>

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb="8" justifyContent='space-between' align='center'>
            <Heading sz={['sm','lg']} fontWeight='normal'>Usuarios</Heading>

            <Link href="/users/create" passHref>
              <Button
                as='a'size='sm'
                fontSize='sm'
                colorScheme='pink'
                leftIcon={<Icon fontSize="20" as={RiAddLine}/>}
                >
                  {isWideVersion ? "Criar novo usuario" : "Criar novo"}
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4","4",'6']} color='gray.300' width='8'>
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuario</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                {isWideVersion && <Th width='4'>Editar</Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4","4",'6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Higor Allan</Text>
                    <Text fontSize='small' color='gray.300'>higor.allan21@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril, 2021</Td>}
                <Td>
                {isWideVersion && (
                  <Button
                  as='a'size='sm'
                  fontSize='sm'
                  colorScheme='purple'
                  leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                </Button>
                )}
                </Td>
              </Tr>
              <Tr>
                <Td px={["4","4",'6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Higor Allan</Text>
                    <Text fontSize='small' color='gray.300'>higor.allan21@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril, 2021</Td>}
                <Td>
                {isWideVersion && (
                  <Button
                  as='a'size='sm'
                  fontSize='sm'
                  colorScheme='purple'
                  leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                </Button>
                )}
                </Td>
              </Tr>
              <Tr>
                <Td px={["4","4",'6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Higor Allan</Text>
                    <Text fontSize='small' color='gray.300'>higor.allan21@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril, 2021</Td>}
                <Td>
                {isWideVersion && (
                  <Button
                  as='a'size='sm'
                  fontSize='sm'
                  colorScheme='purple'
                  leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                </Button>
                )}
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination/>
        </Box>
      </Flex>
    </Box>
  );
}