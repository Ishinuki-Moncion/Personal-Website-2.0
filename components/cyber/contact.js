import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Text
} from '@chakra-ui/react'
import SectionLabel from './section-label'
import { profile } from '../../lib/data'
import { useLocale } from '../../lib/locale'

const Pill = ({ href, children }) => (
  <Link
    href={href}
    isExternal
    fontFamily="mono"
    fontSize="13px"
    letterSpacing="0.04em"
    color="cyan"
    border="1px solid"
    borderColor="line"
    borderRadius="75px"
    px={6}
    py={2}
    transition="all 0.25s"
    _hover={{
      bg: 'cyan',
      color: 'void',
      boxShadow: '0 0 24px rgba(57,240,255,0.5)'
    }}
  >
    {children}
  </Link>
)

const Contact = () => {
  const { t } = useLocale()
  return (
    <Box
      id="contact"
      as="section"
      position="relative"
      py={{ base: 24, md: 40 }}
      px={{ base: 5, md: 10 }}
    >
      <Container maxW="1440px" p={0}>
        <SectionLabel index={5}>{t('contact')}</SectionLabel>
        <Heading
          as="h2"
          fontWeight={300}
          letterSpacing="-0.03em"
          lineHeight="0.92"
          fontSize={{ base: '44px', md: '94px' }}
          maxW="14ch"
          color="fg"
          sx={{ textShadow: '0 0 50px rgba(57,240,255,0.2)' }}
        >
          Let&apos;s make something.
        </Heading>

        <HStack mt={{ base: 12, md: 16 }} spacing={4} flexWrap="wrap">
          {profile.socials.map(s => (
            <Pill key={s.key} href={s.href}>
              {s.label} ↗
            </Pill>
          ))}
        </HStack>

        <Flex
          mt={{ base: 20, md: 32 }}
          justify="space-between"
          align="baseline"
          direction={{ base: 'column', md: 'row' }}
          gap={3}
          fontFamily="mono"
          fontSize="10px"
          letterSpacing="0.12em"
          textTransform="uppercase"
          color="muted"
          borderTop="1px solid"
          borderColor="line"
          pt={6}
        >
          <Text>© {new Date().getFullYear()} Ishinuki Daikie — daikieOS</Text>
          <Text color="cyan">35.6762° N, 139.6503° E — 東京</Text>
        </Flex>
      </Container>
    </Box>
  )
}

export default Contact
