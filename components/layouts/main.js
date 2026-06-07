import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box } from '@chakra-ui/react'
import Nav from '../cyber/nav'
import Overlay from '../cyber/overlay'

// WebGL background is client-only and lazy.
const Background = dynamic(() => import('../cyber/background'), { ssr: false })

const Main = ({ children }) => {
  return (
    <Box as="main" position="relative" minH="100vh">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Ishinuki Daikie — software developer and photographer based in Tokyo, Japan."
        />
        <title>Ishinuki Daikie — Developer &amp; Photographer</title>
      </Head>

      <Background />
      <Overlay />
      <Nav />

      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  )
}

export default Main
