import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text
} from '@chakra-ui/react'
import SectionLabel from './section-label'
import { work } from '../../lib/data'
import { useLocale } from '../../lib/locale'

const Row = ({ job }) => (
  <Box
    as="article"
    borderTop="1px solid"
    borderColor="line"
    py={{ base: 8, md: 12 }}
    role="group"
  >
    <Grid
      templateColumns={{ base: '1fr', md: '7fr 5fr' }}
      gap={{ base: 4, md: 10 }}
      alignItems="baseline"
    >
      <GridItem>
        <HStack spacing={3} mb={2}>
          <Text
            fontFamily="mono"
            fontSize="11px"
            color="muted"
            letterSpacing="0.1em"
          >
            {job.start} — {job.end}
          </Text>
          {job.live && (
            <Text
              fontFamily="mono"
              fontSize="10px"
              color="amber"
              sx={{
                textShadow: '0 0 10px rgba(255,158,44,0.7)',
                animation: 'p 2s ease-in-out infinite',
                '@keyframes p': {
                  '0%,100%': { opacity: 1 },
                  '50%': { opacity: 0.4 }
                }
              }}
            >
              ● LIVE
            </Text>
          )}
        </HStack>
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
          {job.title}
        </Text>
        <Text mt={2} fontSize={{ base: 'md', md: '18px' }} color="muted">
          {job.company} — {job.location}
        </Text>
      </GridItem>
      <GridItem>
        <Text fontSize="18px" lineHeight="1.5" color="fg" maxW="40ch">
          {job.highlights[0]}
        </Text>
        <HStack mt={4} spacing={2} flexWrap="wrap">
          {job.tech.map(tag => (
            <Text
              key={tag}
              fontFamily="mono"
              fontSize="10px"
              color="cyan"
              border="1px solid"
              borderColor="line"
              px={2}
              py="2px"
            >
              {tag}
            </Text>
          ))}
        </HStack>
      </GridItem>
    </Grid>
  </Box>
)

const Work = () => {
  const { t } = useLocale()
  return (
    <Box
      id="work"
      as="section"
      position="relative"
      py={{ base: 20, md: 32 }}
      px={{ base: 5, md: 10 }}
    >
      <Container maxW="1440px" p={0}>
        <SectionLabel index={2}>{t('work')} / Experience</SectionLabel>
        <Flex mb={{ base: 8, md: 12 }}>
          <Text
            as="h2"
            fontWeight={300}
            letterSpacing="-0.02em"
            fontSize={{ base: '44px', md: '88px' }}
            lineHeight="0.95"
            color="fg"
          >
            Work
          </Text>
        </Flex>
        {work.map(job => (
          <Row key={job.id} job={job} />
        ))}
        <Box borderTop="1px solid" borderColor="line" />
      </Container>
    </Box>
  )
}

export default Work
