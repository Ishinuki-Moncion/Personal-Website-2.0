import { Box } from '@chakra-ui/react'

// Full-page CRT treatment: scanlines, vignette, and a faint flicker. Sits above
// everything, never intercepts input. Flicker disabled under reduced motion.
const Overlay = () => (
  <Box aria-hidden position="fixed" inset={0} zIndex={90} pointerEvents="none">
    {/* scanlines */}
    <Box
      position="absolute"
      inset={0}
      sx={{
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)',
        opacity: 0.45
      }}
    />
    {/* vignette */}
    <Box
      position="absolute"
      inset={0}
      bgGradient="radial(closest-side, transparent 60%, rgba(0,0,0,0.55))"
    />
    {/* faint cyan flicker */}
    <Box
      position="absolute"
      inset={0}
      bg="cyan"
      sx={{
        mixBlendMode: 'overlay',
        opacity: 0,
        animation: 'crt 7s steps(1) infinite',
        '@keyframes crt': {
          '0%,96%,100%': { opacity: 0 },
          '97%': { opacity: 0.04 },
          '98%': { opacity: 0 },
          '99%': { opacity: 0.03 }
        },
        '@media (prefers-reduced-motion: reduce)': { animation: 'none' }
      }}
    />
  </Box>
)

export default Overlay
