import { Box, Heading } from '@chakra-ui/react'

const SectionTitle = ({ children, ...props }) => (
  <Box mb={8} {...props}>
    <Heading as="h2" size="xl" display="inline-block" position="relative">
      {children}
      <Box
        position="absolute"
        left={0}
        bottom="-6px"
        height="4px"
        width="48px"
        borderRadius="full"
        bgGradient="linear(to-r, accent.400, accent.600)"
      />
    </Heading>
  </Box>
)

export default SectionTitle
