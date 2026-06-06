import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

// framer-motion handles the reveal; Chakra Box handles layout/styling.
// Keeping them as separate elements avoids the `transition` prop clash
// between Chakra style props and framer-motion.
const Section = ({ children, delay = 0, id, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5, delay }}
  >
    <Box id={id} css={{ scrollMarginTop: '90px' }} {...props}>
      {children}
    </Box>
  </motion.div>
)

export default Section
