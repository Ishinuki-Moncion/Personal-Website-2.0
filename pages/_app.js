import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import { LocaleProvider } from '../lib/locale'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <LocaleProvider>
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </LocaleProvider>
    </ChakraProvider>
  )
}

export default Website
