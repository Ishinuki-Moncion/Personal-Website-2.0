import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const styles = {
  global: (props) => ({
    html: {
      scrollBehavior: 'smooth',
    },
    body: {
      bg: props.colorMode === 'dark' ? '#16161a' : '#f7f5f2',
      color: props.colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800',
    },
    '::selection': {
      background: props.colorMode === 'dark' ? '#ff8a4c' : '#ffd9c2',
      color: props.colorMode === 'dark' ? '#16161a' : '#16161a',
    },
  }),
}

// Warm accent — a modern nod to the old site's earthy palette.
const colors = {
  accent: {
    50: '#fff3ec',
    100: '#ffdcc7',
    200: '#ffc09e',
    300: '#ffa274',
    400: '#ff8a4c',
    500: '#f56a1f',
    600: '#cc5316',
    700: '#9c3f10',
    800: '#6e2c0a',
    900: '#421802',
  },
}

const fonts = {
  heading: "'M PLUS Rounded 1c', sans-serif",
  body: "'M PLUS Rounded 1c', sans-serif",
}

const components = {
  Heading: {
    baseStyle: {
      letterSpacing: '-0.01em',
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: props.colorMode === 'dark' ? 'accent.300' : 'accent.500',
      textUnderlineOffset: 3,
      _hover: { textDecoration: 'none', opacity: 0.8 },
    }),
  },
}

const theme = extendTheme({ config, styles, colors, fonts, components })

export default theme
