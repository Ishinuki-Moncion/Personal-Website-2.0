import { Box, Container, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import Section from '../section'
import SectionTitle from '../section-title'

const About = () => (
  <Container maxW="container.lg" py={20}>
    <Section id="about">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 14 }} alignItems="center">
        <Box>
          <Image
            src="/images/about.jpg"
            alt="Daikie Moncion"
            borderRadius="2xl"
            objectFit="cover"
            w="100%"
            maxH="460px"
            boxShadow="2xl"
          />
        </Box>
        <VStack align="stretch" spacing={5}>
          <SectionTitle mb={2}>About Me</SectionTitle>
          <Text fontSize="lg" lineHeight={1.8} opacity={0.9}>
            I&apos;m a software developer and an artist based in Dallas, TX, where I earned a
            Bachelor&apos;s in Computer Science at The University of Texas at Dallas. As a hobby I
            combine code with my interest in photography to find the right balance between
            creativity and commercial sense.
          </Text>
          <Text fontSize="lg" lineHeight={1.8} opacity={0.9}>
            My second passion lies in blockchain and understanding decentralized autonomous
            organizations, web3, NFTs, and smart contracts. This world keeps me inspired to
            contribute back as a creator. You can check out my previous work and experiences below —
            I consider photography a passion more than a profession.
          </Text>
        </VStack>
      </SimpleGrid>
    </Section>
  </Container>
)

export default About
