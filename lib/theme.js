import { extendTheme } from '@chakra-ui/react'

// Cyberpunk editorial — near-black depth, Blade-Runner amber + electric cyan.
// Monumental light display type kept from the editorial system; mono carries the
// HUD. Colour appears only as neon accents + atmospheric imagery/3D.
const config = { initialColorMode: 'dark', useSystemColorMode: false }

const colors = {
  void: '#05060a',
  panel: 'rgba(8,10,16,0.55)',
  cyan: '#39f0ff',
  cyanDim: '#1c6f7a',
  amber: '#ff9e2c',
  amberDim: '#7a4d14',
  fg: '#e9f1f4',
  muted: '#76858f',
  line: 'rgba(57,240,255,0.16)'
}

const fonts = {
  heading: "'Hanken Grotesk', system-ui, sans-serif",
  body: "'Hanken Grotesk', system-ui, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, monospace"
}

const styles = {
  global: {
    html: { scrollBehavior: 'smooth' },
    body: {
      bg: 'void',
      color: 'fg',
      fontWeight: 400,
      WebkitFontSmoothing: 'antialiased'
    },
    '::selection': { background: '#39f0ff', color: '#05060a' },
    '::-webkit-scrollbar': { width: '8px' },
    '::-webkit-scrollbar-thumb': { background: 'rgba(57,240,255,0.25)' }
  }
}

const components = {
  Heading: {
    baseStyle: { fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.0 }
  },
  Link: { baseStyle: { _hover: { textDecoration: 'none' } } }
}

export default extendTheme({ config, colors, fonts, styles, components })
