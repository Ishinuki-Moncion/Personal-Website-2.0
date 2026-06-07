import { Box, Container, Divider, HStack, IconButton, Link, Stack, Text } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5'

const socials = [
  { href: 'https://www.linkedin.com/in/daikie-moncion-6a637b71/', label: 'LinkedIn', icon: <IoLogoLinkedin /> },
  { href: 'https://www.instagram.com/d.moncion/', label: 'Instagram', icon: <IoLogoInstagram /> },
  { href: 'https://github.com/Ishinuki-Moncion', label: 'GitHub', icon: <IoLogoGithub /> },
]

const Footer = () => (
  <Box as="footer" mt={20}>
    <Container maxW="container.lg" py={10}>
      <Divider mb={8} />
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        justify="space-between"
        align="center"
        spacing={4}
      >
        <Text opacity={0.7} fontSize="sm">
          &copy; {new Date().getFullYear()} Ishinuki Daikie. Built with Next.js &amp; Chakra UI.
        </Text>
        <HStack spacing={1}>
          {socials.map((s) => (
            <IconButton
              key={s.label}
              as={Link}
              href={s.href}
              isExternal
              aria-label={s.label}
              icon={s.icon}
              variant="ghost"
              fontSize="20px"
            />
          ))}
        </HStack>
      </Stack>
    </Container>
  </Box>
)

export default Footer
