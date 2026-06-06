import {
  Box,
  Container,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoCheckmarkCircle } from 'react-icons/io5'
import Section from '../section'
import SectionTitle from '../section-title'

const milestones = [
  'Bachelor of Science in Computer Science',
  'UTD ACM Projects Alumni',
  'Dallas Japanese Association',
  'All Star Code Alumni',
]

const orgs = [
  { src: '/images/logo-utd.png', label: 'UT Dallas' },
  { src: '/images/logo-acm.png', label: 'ACM' },
  { src: '/images/logo-dja.jpg', label: 'DJA' },
  { src: '/images/logo-asc.jpg', label: 'All Star Code' },
]

const Education = () => {
  const cardBg = useColorModeValue('white', 'whiteAlpha.100')
  const cardBorder = useColorModeValue('blackAlpha.100', 'whiteAlpha.200')

  return (
    <Box bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.50')} py={20}>
      <Container maxW="container.lg">
        <Section id="education">
          <SectionTitle>Education</SectionTitle>

          <List spacing={3} mb={12} fontSize="lg">
            {milestones.map((m) => (
              <ListItem key={m} display="flex" alignItems="center">
                <ListIcon as={IoCheckmarkCircle} color="accent.400" fontSize="22px" />
                {m}
              </ListItem>
            ))}
          </List>

          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
            {orgs.map((org) => (
              <HStack
                key={org.label}
                bg={cardBg}
                border="1px solid"
                borderColor={cardBorder}
                borderRadius="xl"
                p={4}
                spacing={4}
                transition="transform 0.2s, box-shadow 0.2s"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg' }}
              >
                <Box
                  boxSize="48px"
                  borderRadius="md"
                  overflow="hidden"
                  bg="white"
                  flexShrink={0}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image src={org.src} alt={org.label} objectFit="contain" boxSize="48px" />
                </Box>
                <Text fontWeight="semibold">{org.label}</Text>
              </HStack>
            ))}
          </SimpleGrid>
        </Section>
      </Container>
    </Box>
  )
}

export default Education
