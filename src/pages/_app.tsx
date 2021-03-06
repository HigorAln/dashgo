import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import { SideBarDrawerProvider } from '../context/SideBarDrawerContext'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { theme } from '../styles/theme'
import { makeServer } from '../services/mirage/index';
import { queryClient } from '../services/queryClient'

if(process.env.NODE_ENV === 'development'){
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS theme={theme}>
          <SideBarDrawerProvider>
            <Component {...pageProps} />
          </SideBarDrawerProvider>
        </ChakraProvider>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
