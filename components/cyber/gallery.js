import { useEffect, useState } from 'react'
import {
  Box,
  Container,
  Flex,
  Grid,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import SectionLabel from './section-label'
import { useLocale } from '../../lib/locale'

const photos = [
  'gallery-07.jpg',
  'gallery-03.jpg',
  'gallery-08.jpg',
  'gallery-16.jpg',
  'gallery-04.jpg',
  'gallery-13.jpg',
  'gallery-01.jpg',
  'gallery-02.jpg',
  'gallery-05.jpg',
  'gallery-09.jpg',
  'gallery-10.jpg',
  'gallery-11.jpg'
].map(f => `/images/${f}`)

const Gallery = () => {
  const { t } = useLocale()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [index, setIndex] = useState(0)
  const total = photos.length
  const open = i => {
    setIndex(i)
    onOpen()
  }
  const step = d => setIndex(i => (i + d + total) % total)

  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = e => {
      if (e.key === 'ArrowLeft') step(-1)
      else if (e.key === 'ArrowRight') step(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  return (
    <Box
      id="gallery"
      as="section"
      position="relative"
      py={{ base: 20, md: 32 }}
    >
      <Container maxW="1440px" px={{ base: 5, md: 10 }}>
        <SectionLabel index={3}>{t('gallery')} / Photography</SectionLabel>
      </Container>

      <Box px={{ base: 5, md: 10 }}>
        <Grid
          templateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)'
          }}
          gap={{ base: 3, md: 4 }}
        >
          {photos.map((src, i) => (
            <Box
              key={src}
              as="button"
              onClick={() => open(i)}
              position="relative"
              overflow="hidden"
              border="1px solid"
              borderColor="line"
              sx={{ aspectRatio: '4 / 5' }}
              role="group"
              _hover={{
                borderColor: 'cyan',
                boxShadow: '0 0 24px rgba(57,240,255,0.25)'
              }}
              transition="border-color 0.3s, box-shadow 0.3s"
            >
              <Image
                src={src}
                alt={`Photograph ${i + 1}`}
                w="100%"
                h="100%"
                objectFit="cover"
                loading="lazy"
                filter="grayscale(55%) brightness(0.85) contrast(1.05)"
                transition="transform 0.7s cubic-bezier(0.22,1,0.36,1), filter 0.5s"
                _groupHover={{
                  transform: 'scale(1.05)',
                  filter: 'grayscale(0%) brightness(1) contrast(1.05)'
                }}
              />
              <Text
                position="absolute"
                top={2}
                left={3}
                fontFamily="mono"
                fontSize="10px"
                color="cyan"
                opacity={0}
                _groupHover={{ opacity: 0.9 }}
                transition="opacity 0.3s"
              >
                IMG_{String(i + 1).padStart(2, '0')}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
        <ModalOverlay bg="rgba(3,4,8,0.97)" />
        <ModalContent bg="transparent" boxShadow="none" onClick={onClose}>
          <ModalBody
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={{ base: 4, md: 16 }}
          >
            <Image
              src={photos[index]}
              alt={`Photograph ${index + 1}`}
              maxH="88vh"
              maxW="92vw"
              objectFit="contain"
            />
          </ModalBody>
          <Flex
            position="absolute"
            bottom={6}
            left={0}
            right={0}
            justify="center"
            gap={8}
            fontFamily="mono"
            fontSize="11px"
            letterSpacing="0.12em"
            onClick={e => e.stopPropagation()}
          >
            <Box
              as="button"
              color="cyan"
              onClick={() => step(-1)}
              _hover={{ opacity: 0.6 }}
            >
              ← PREV
            </Box>
            <Text color="muted">
              {String(index + 1).padStart(2, '0')} /{' '}
              {String(total).padStart(2, '0')}
            </Text>
            <Box
              as="button"
              color="cyan"
              onClick={() => step(1)}
              _hover={{ opacity: 0.6 }}
            >
              NEXT →
            </Box>
          </Flex>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Gallery
