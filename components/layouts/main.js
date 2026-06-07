import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({ children }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Ishinuki Daikie — software developer, photographer, and artist based in Tokyo, Japan."
        />
        <title>Ishinuki Daikie — Software Developer &amp; Photographer</title>
      </Head>

      <Navbar />
      <Box pt="60px">{children}</Box>
      <Footer />
    </Box>
  )
}

export default Main
