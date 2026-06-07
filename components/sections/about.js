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
            alt="Ishinuki Daikie"
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
            I&apos;m Ishinuki Daikie, a developer who likes turning ideas into things people
            actually use. I studied Computer Science at The University of Texas at Dallas and work
            across the stack — React, Next.js, and Node/Express on PostgreSQL and REST APIs. Today
            I&apos;m a Technical Producer at SeenThis Japan, building and converting advertising
            materials into open-web digital ad banners in HTML, CSS, and JavaScript — I&apos;ve
            shepherded 100+ campaigns from creation to execution alongside clients and internal
            teams.
          </Text>
          <Text fontSize="lg" lineHeight={1.8} opacity={0.9}>
            I&apos;m based in Tokyo by way of Dallas. After UTD I followed a deeper pull toward
            Japan and completed a Post-Graduate Program in Japan Studies at Soka University; I speak
            native English and conversational Japanese (JLPT N3). Photography is a real practice for
            me, not a side note — it&apos;s where the engineer and the artist in me meet, and
            you&apos;ll find a gallery of that work just below.
          </Text>
        </VStack>
      </SimpleGrid>
    </Section>
  </Container>
)

export default About
