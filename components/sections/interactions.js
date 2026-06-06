import { useState } from 'react'
import {
  Box,
  Container,
  HStack,
  IconButton,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { IoClose, IoHeart } from 'react-icons/io5'
import Section from '../section'
import SectionTitle from '../section-title'

const cards = [
  '/images/gallery-04.jpg',
  '/images/gallery-06.jpg',
  '/images/gallery-03.jpg',
  '/images/gallery-08.jpg',
  '/images/gallery-01.jpg',
  '/images/gallery-13.jpg',
]

const MotionBox = motion(Box)

const Interactions = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const len = cards.length
  const current = cards[index % len]
  const behind = cards[(index + 1) % len]

  const cardBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')
  const sectionBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')

  const swipe = (dir) => {
    setDirection(dir)
    setIndex((i) => i + 1)
  }

  return (
    <Box bg={sectionBg} py={20}>
      <Container maxW="container.lg">
        <Section id="interactions">
          <SectionTitle>Interactions</SectionTitle>
          <Text opacity={0.7} mb={10} maxW="2xl">
            A little interactive demo — drag the photo cards left or right, or use the buttons below.
          </Text>

          <Box
            position="relative"
            w={{ base: '280px', sm: '320px' }}
            h={{ base: '380px', sm: '440px' }}
            mx="auto"
          >
            {/* card behind, for depth */}
            <Box
              position="absolute"
              inset={0}
              transform="scale(0.94) translateY(16px)"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="lg"
              opacity={0.5}
            >
              <Image src={behind} alt="" w="100%" h="100%" objectFit="cover" />
            </Box>

            <AnimatePresence custom={direction} initial={false}>
              <MotionBox
                key={index}
                custom={direction}
                position="absolute"
                inset={0}
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="2xl"
                border="1px solid"
                borderColor={cardBorder}
                bg="gray.800"
                cursor="grab"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragSnapToOrigin
                dragElastic={0.7}
                whileTap={{ cursor: 'grabbing' }}
                onDragEnd={(_e, info) => {
                  if (info.offset.x > 110) swipe(1)
                  else if (info.offset.x < -110) swipe(-1)
                }}
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, x: 0, rotate: 0 }}
                exit={(dir) => ({
                  x: dir * 700,
                  opacity: 0,
                  rotate: dir * 18,
                  transition: { duration: 0.35 },
                })}
              >
                <Image
                  src={current}
                  alt="Swipeable photo"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  draggable={false}
                  pointerEvents="none"
                />
              </MotionBox>
            </AnimatePresence>
          </Box>

          <HStack justify="center" spacing={8} mt={10}>
            <IconButton
              aria-label="Skip"
              icon={<IoClose />}
              onClick={() => swipe(-1)}
              isRound
              size="lg"
              fontSize="30px"
              colorScheme="red"
              variant="outline"
              _hover={{ transform: 'scale(1.1)' }}
            />
            <IconButton
              aria-label="Like"
              icon={<IoHeart />}
              onClick={() => swipe(1)}
              isRound
              size="lg"
              fontSize="26px"
              colorScheme="pink"
              variant="outline"
              _hover={{ transform: 'scale(1.1)' }}
            />
          </HStack>
        </Section>
      </Container>
    </Box>
  )
}

export default Interactions
