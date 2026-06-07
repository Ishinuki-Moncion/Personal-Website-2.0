import { Box, Container, Grid, Text } from '@chakra-ui/react'
import SectionLabel from './section-label'
import { profile } from '../../lib/data'
import { useLocale } from '../../lib/locale'

const About = () => {
  const { t } = useLocale()
  return (
    <Box
      id="about"
      as="section"
      position="relative"
      py={{ base: 24, md: 40 }}
      px={{ base: 5, md: 10 }}
    >
      <Container maxW="1440px" p={0}>
        <SectionLabel index={1}>{t('about')}</SectionLabel>
        <Text
          as="p"
          fontWeight={300}
          letterSpacing="-0.02em"
          lineHeight="1.08"
          fontSize={{ base: '32px', md: '54px', lg: '68px' }}
          maxW="18ch"
          color="fg"
          sx={{ textShadow: '0 0 40px rgba(57,240,255,0.12)' }}
        >
          {t('intro')}
        </Text>
        <Grid
          mt={{ base: 12, md: 20 }}
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          gap={{ base: 8, md: 16 }}
        >
          <Text
            fontSize={{ base: 'md', md: '18px' }}
            lineHeight="1.65"
            color="fg"
          >
            {profile.bio[0]}
          </Text>
          <Text
            fontSize={{ base: 'md', md: '18px' }}
            lineHeight="1.65"
            color="muted"
          >
            {profile.bio[1]}
          </Text>
        </Grid>
      </Container>
    </Box>
  )
}

export default About
