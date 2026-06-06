import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoChevronDownOutline,
} from 'react-icons/io5'
import Typewriter from '../typewriter'

const MotionDiv = motion.div

const socials = [
  { href: 'https://www.linkedin.com/in/daikie-moncion-6a637b71/', label: 'LinkedIn', icon: <IoLogoLinkedin /> },
  { href: 'https://www.instagram.com/d.moncion/', label: 'Instagram', icon: <IoLogoInstagram /> },
  { href: 'https://github.com/Ishinuki-Moncion', label: 'GitHub', icon: <IoLogoGithub /> },
]

const Hero = () => {
  const ringColor = useColorModeValue('accent.400', 'accent.300')

  return (
    <Box
      id="home"
      minH="calc(100vh - 60px)"
      display="flex"
      alignItems="center"
      position="relative"
      css={{ scrollMarginTop: '60px' }}
    >
      {/* soft glow backdrop */}
      <Box
        position="absolute"
        top="20%"
        left="50%"
        transform="translateX(-50%)"
        width={{ base: '320px', md: '520px' }}
        height={{ base: '320px', md: '520px' }}
        bg="accent.400"
        opacity={useColorModeValue(0.12, 0.18)}
        filter="blur(120px)"
        borderRadius="full"
        zIndex={0}
      />

      <Container maxW="container.lg" zIndex={1}>
        <VStack spacing={6} textAlign="center">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Image
              src="/images/about.jpg"
              alt="Daikie Moncion"
              boxSize={{ base: '140px', md: '180px' }}
              borderRadius="full"
              objectFit="cover"
              border="4px solid"
              borderColor={ringColor}
              boxShadow="xl"
            />
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Text fontSize="lg" opacity={0.7}>
              Hi, my name is
            </Text>
            <Heading as="h1" size="3xl" lineHeight={1.1} mt={1}>
              Daikie Moncion
            </Heading>
            <Flex
              justify="center"
              align="center"
              mt={4}
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="medium"
            >
              <Text as="span" opacity={0.85}>
                I&apos;m a&nbsp;
              </Text>
              <Typewriter
                words={['developer', 'photographer', 'entrepreneur']}
                color={useColorModeValue('accent.500', 'accent.300')}
                fontWeight="bold"
              />
            </Flex>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <HStack spacing={2} mt={2}>
              {socials.map((s) => (
                <IconButton
                  key={s.label}
                  as={Link}
                  href={s.href}
                  isExternal
                  aria-label={s.label}
                  icon={s.icon}
                  fontSize="24px"
                  variant="ghost"
                  size="lg"
                  _hover={{ color: ringColor, transform: 'translateY(-3px)' }}
                  transition="all 0.2s"
                />
              ))}
            </HStack>
          </MotionDiv>
        </VStack>
      </Container>

      <Box position="absolute" bottom={8} left="50%" transform="translateX(-50%)" zIndex={1}>
        <Link href="#about" aria-label="Scroll to About">
          <Box
            as={IoChevronDownOutline}
            fontSize="32px"
            opacity={0.6}
            sx={{
              animation: 'bounce 2s infinite',
              '@keyframes bounce': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(8px)' },
              },
            }}
          />
        </Link>
      </Box>
    </Box>
  )
}

export default Hero
