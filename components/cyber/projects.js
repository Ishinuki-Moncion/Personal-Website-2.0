import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Link,
  Text
} from '@chakra-ui/react'
import SectionLabel from './section-label'
import { projects } from '../../lib/data'
import { useLocale } from '../../lib/locale'

const Row = ({ p, n }) => (
  <Link
    href={p.github}
    isExternal
    display="block"
    borderTop="1px solid"
    borderColor="line"
    py={{ base: 8, md: 12 }}
    role="group"
  >
    <Grid
      templateColumns={{ base: '1fr', md: '1fr 7fr 4fr' }}
      gap={{ base: 3, md: 10 }}
      alignItems="baseline"
    >
      <GridItem>
        <Text
          fontFamily="mono"
          fontSize="11px"
          color="amber"
          letterSpacing="0.1em"
        >
          {String(n).padStart(2, '0')}
        </Text>
      </GridItem>
      <GridItem>
        <Text
          fontWeight={300}
          letterSpacing="-0.02em"
          lineHeight="1.04"
          fontSize={{ base: '28px', md: '46px' }}
          color="fg"
          _groupHover={{
            color: 'cyan',
            textShadow: '0 0 24px rgba(57,240,255,0.4)'
          }}
          transition="color 0.3s, text-shadow 0.3s"
        >
          {p.name}
        </Text>
        <Text
          mt={2}
          fontSize={{ base: 'md', md: '18px' }}
          color="muted"
          maxW="46ch"
        >
          {p.pitch}
        </Text>
      </GridItem>
      <GridItem>
        <Flex
          justify={{ md: 'space-between' }}
          direction={{ base: 'column', md: 'row' }}
          gap={2}
        >
          <Text fontFamily="mono" fontSize="11px" color="cyan" maxW="22ch">
            {p.tech.slice(0, 3).join(' · ')}
          </Text>
          <Text fontFamily="mono" fontSize="11px" color="muted">
            {p.year} ↗
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  </Link>
)

const Projects = () => {
  const { t } = useLocale()
  return (
    <Box
      id="projects"
      as="section"
      position="relative"
      py={{ base: 20, md: 32 }}
      px={{ base: 5, md: 10 }}
    >
      <Container maxW="1440px" p={0}>
        <SectionLabel index={4}>{t('projects')} / Selected</SectionLabel>
        <Flex mb={{ base: 8, md: 12 }}>
          <Text
            as="h2"
            fontWeight={300}
            letterSpacing="-0.02em"
            fontSize={{ base: '44px', md: '88px' }}
            lineHeight="0.95"
            color="fg"
          >
            Selected Work
          </Text>
        </Flex>
        {projects.map((p, i) => (
          <Row key={p.id} p={p} n={i + 1} />
        ))}
        <Box borderTop="1px solid" borderColor="line" />
      </Container>
    </Box>
  )
}

export default Projects
