import { Box, Flex } from '@chakra-ui/react'

// HUD-style section marker: [ 01 ] LABEL ───────────
const SectionLabel = ({ index, children }) => (
  <Flex
    align="center"
    gap={4}
    fontFamily="mono"
    fontSize="11px"
    letterSpacing="0.22em"
    textTransform="uppercase"
    mb={{ base: 8, md: 12 }}
  >
    <Box
      as="span"
      color="amber"
      sx={{ textShadow: '0 0 10px rgba(255,158,44,0.5)' }}
    >
      [ {String(index).padStart(2, '0')} ]
    </Box>
    <Box as="span" color="cyan">
      {children}
    </Box>
    <Box flex="1" h="1px" bg="line" />
  </Flex>
)

export default SectionLabel
