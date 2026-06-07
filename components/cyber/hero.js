import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const EASE = [0.16, 1, 0.3, 1]

// Content layer over the global immersive scene.
const Hero = () => (
  <Box id="home" as="section" position="relative" h="100vh">
    <Flex
      position="absolute"
      inset={0}
      direction="column"
      justify="center"
      px={{ base: 5, md: 10 }}
      pointerEvents="none"
    >
      <MotionBox
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
      >
        <Text
          fontFamily="mono"
          textTransform="uppercase"
          letterSpacing="0.35em"
          fontSize={{ base: '10px', md: '12px' }}
          color="cyan"
          mb={{ base: 5, md: 7 }}
          sx={{ textShadow: '0 0 12px rgba(57,240,255,0.6)' }}
        >
          開発者 / 写真家 — Tokyo, Japan
        </Text>
        <Heading
          as="h1"
          fontWeight={300}
          letterSpacing="-0.03em"
          lineHeight="0.84"
          fontSize={{ base: '17vw', md: '13vw' }}
          color="#f4feff"
          sx={{
            textShadow:
              '0 0 30px rgba(57,240,255,0.35), 0 0 80px rgba(57,240,255,0.15)'
          }}
        >
          Ishinuki
          <br />
          <Box
            as="span"
            sx={{ textShadow: '0 0 30px rgba(255,158,44,0.4)' }}
            color="#fff6ec"
          >
            Daikie
          </Box>
        </Heading>
      </MotionBox>
    </Flex>

    <Text
      position="absolute"
      bottom={{ base: 6, md: 10 }}
      left={{ base: 5, md: 10 }}
      fontFamily="mono"
      textTransform="uppercase"
      letterSpacing="0.25em"
      fontSize="9px"
      color="cyan"
      opacity={0.85}
    >
      ▸ Scroll to explore
    </Text>
    <Text
      position="absolute"
      bottom={{ base: 6, md: 10 }}
      right={{ base: 5, md: 10 }}
      fontFamily="mono"
      letterSpacing="0.25em"
      fontSize="9px"
      color="amber"
      sx={{
        animation: 'flick 4s steps(1) infinite',
        '@keyframes flick': {
          '0%,97%,100%': { opacity: 0.9 },
          '98%': { opacity: 0.2 }
        }
      }}
    >
      ● SYS//ONLINE
    </Text>
  </Box>
)

export default Hero
