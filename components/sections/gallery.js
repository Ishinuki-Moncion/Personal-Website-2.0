import { useState } from 'react'
import {
  Box,
  Container,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import Section from '../section'
import SectionTitle from '../section-title'

const photos = [
  'gallery-01.jpg',
  'gallery-02.jpg',
  'gallery-03.jpg',
  'gallery-04.jpg',
  'gallery-05.jpg',
  'gallery-06.jpg',
  'gallery-07.jpg',
  'gallery-08.jpg',
  'gallery-09.jpg',
  'gallery-10.jpg',
  'gallery-11.jpg',
  'gallery-12.jpg',
  'gallery-13.jpg',
  'gallery-14.jpg',
  'gallery-15.png',
  'gallery-16.jpg',
].map((f) => `/images/${f}`)

const Gallery = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [active, setActive] = useState(null)
  const overlayHover = useColorModeValue('blackAlpha.300', 'blackAlpha.500')

  const open = (src) => {
    setActive(src)
    onOpen()
  }

  return (
    <Container maxW="container.lg" py={20}>
      <Section id="gallery">
        <SectionTitle>Gallery</SectionTitle>
        <Text opacity={0.7} mb={8} maxW="2xl">
          A selection of my photography. Click any image to view it larger.
        </Text>

        <Box
          sx={{
            columnGap: '16px',
            columnCount: 1,
            '@media (min-width: 30em)': { columnCount: 2 },
            '@media (min-width: 48em)': { columnCount: 3 },
          }}
        >
          {photos.map((src, i) => (
            <Box
              key={src}
              mb={4}
              borderRadius="lg"
              overflow="hidden"
              cursor="pointer"
              position="relative"
              role="group"
              onClick={() => open(src)}
              sx={{ breakInside: 'avoid' }}
            >
              <Image
                src={src}
                alt={`Photography ${i + 1}`}
                w="100%"
                display="block"
                loading="lazy"
                transition="transform 0.4s ease"
                _groupHover={{ transform: 'scale(1.05)' }}
              />
              <Box
                position="absolute"
                inset={0}
                bg={overlayHover}
                opacity={0}
                transition="opacity 0.3s"
                _groupHover={{ opacity: 1 }}
              />
            </Box>
          ))}
        </Box>
      </Section>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
        <ModalOverlay backdropFilter="blur(6px)" bg="blackAlpha.800" />
        <ModalContent bg="transparent" boxShadow="none" mx={4}>
          <ModalCloseButton color="white" zIndex={2} />
          <ModalBody p={0}>
            {active && (
              <Image src={active} alt="Selected photograph" w="100%" borderRadius="lg" />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  )
}

export default Gallery
