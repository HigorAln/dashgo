import { Spinner, Checkbox, Button, Flex, Box, Heading, Icon, Table, Thead, Tbody, Th, Tr, Td, Text, useBreakpointValue, Link as ChakraLink } from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';
import Link from 'next/link'
import { api } from '../../services/axios';
import { getUSers, useUsers } from '../../services/hooks/useUsers';
import { useState } from 'react';
import { queryClient } from '../../services/queryClient';
import { GetServerSideProps } from 'next';

export default function UserList(){
  const [page,setPage] = useState(1)
  const {data, isLoading,isFetching, error, refetch} = useUsers(page) // possivel passar 2 parametro para o useUsers para renderizar via server side 
  const isWideVersion = useBreakpointValue({
    base:false,
    lg: true,
  })

  const handleRefreshInData = ()=>{
    refetch()
  }

  const handlePrefetchUser = async (userId: string) => {
    await queryClient.prefetchQuery(['user', userId], async ()=>{
      const response = await api.get(`users/${userId}`)

      return response.data
    }, {
      staleTime: 1000 * 60 * 10 // 10 minutos
    })
  }

  return(
    <Box>
      <Header />

      <Flex w='100%' my='6' maxW={1480} mx='auto' px='3'>
        <Sidebar/>

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb="8" justifyContent='space-between' align='center'>
            <Heading sz={['sm','lg']} fontWeight='normal'>
              Usuarios
              {!isLoading && isFetching && <Spinner size='sm' color='gray.500' ml="4" />}
            </Heading>
            
            <Flex>
              {isWideVersion && (

                <Button
                  as='a'size='sm'
                  fontSize='sm'
                  colorScheme='pink'
                  mr={1}
                  onClick={handleRefreshInData}
                  cursor="pointer"
                >
                  Refresh
                </Button>
              )}
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
          </Flex>

          { isLoading ? (
            <Flex justify="center"><Spinner/></Flex>
          ): error ? (
            <Flex justify='center'>
              <Text>Falha ao obter dados do usuario</Text>
            </Flex>
          ) : (
            <>
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
                {data.users.map((user)=>(
                  <Tr key={user.id}>
                    <Td px={["4","4",'6']}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <ChakraLink color="purple.400" onMouseEnter={()=>handlePrefetchUser(user.id)}>
                          <Text fontWeight="bold">{user.name}</Text>
                        </ChakraLink>
                        <Text fontSize='small' color='gray.300'>{user.email}</Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>{user.createdAt}</Td>}
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
                ))}
              </Tbody>
            </Table>

            <Pagination 
            totalCountOfRegister={data.totalCount}
            currentPage={page}
            onPageChange={setPage}
            />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

// export const getServerSideProps: GetServerSideProps= async ()=>{
//   const { users, totalCount } = await getUSers(1)

//   return{
//     props:{
//       //initialQuery: users
//     }
//   }
// }