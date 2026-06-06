import { Button, Container, Flex, Image, SimpleGrid, Link, Spacer } from '@chakra-ui/react'
import { IoLogoInstagram } from 'react-icons/io5'
import Section from '../section'
import SectionTitle from '../section-title'

const posts = ['insta-01.jpg', 'insta-02.jpg', 'insta-03.jpg', 'insta-04.jpg'].map(
  (f) => `/images/${f}`
)

const INSTAGRAM_URL = 'https://www.instagram.com/d.moncion/'

const Instagram = () => (
  <Container maxW="container.lg" py={20}>
    <Section id="instagram">
      <Flex align="center" mb={8} wrap="wrap" gap={4}>
        <SectionTitle mb={0}>Instagram</SectionTitle>
        <Spacer />
        <Button
          as={Link}
          href={INSTAGRAM_URL}
          isExternal
          leftIcon={<IoLogoInstagram />}
          colorScheme="orange"
          variant="solid"
          _hover={{ textDecoration: 'none' }}
        >
          @d.moncion
        </Button>
      </Flex>

      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
        {posts.map((src, i) => (
          <Link
            key={src}
            href={INSTAGRAM_URL}
            isExternal
            role="group"
            position="relative"
            borderRadius="lg"
            overflow="hidden"
            _hover={{ textDecoration: 'none' }}
          >
            <Image
              src={src}
              alt={`Instagram post ${i + 1}`}
              w="100%"
              sx={{ aspectRatio: '1 / 1' }}
              objectFit="cover"
              loading="lazy"
              transition="transform 0.4s ease"
              _groupHover={{ transform: 'scale(1.08)' }}
            />
            <Flex
              position="absolute"
              inset={0}
              align="center"
              justify="center"
              bg="blackAlpha.500"
              opacity={0}
              transition="opacity 0.3s"
              _groupHover={{ opacity: 1 }}
              fontSize="32px"
              color="white"
            >
              <IoLogoInstagram />
            </Flex>
          </Link>
        ))}
      </SimpleGrid>
    </Section>
  </Container>
)

export default Instagram
