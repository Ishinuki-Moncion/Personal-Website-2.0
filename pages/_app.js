import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'

const Website = ({Component, pageProps, router}) => {
    return (
        
        <ChakraProvider>
            Im in Website Chakra container
            <Layout router={router}>
                Im in website layout continer
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}

export default Website