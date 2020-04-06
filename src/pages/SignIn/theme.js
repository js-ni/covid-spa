import {theme} from '@chakra-ui/core'

export default {
  ...theme,
  colors: {
    violet: {
      50: '#faf9fc',
      100: '#f0ecf6',
      200: '#e4def0',
      300: '#d8cfe9',
      400: '#cbbee1',
      500: '#bcacd9',
      600: '#aa96cf',
      700: '#967dc4',
      800: '#7b5bb4',
      900: '#4c2c86',
    },
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  },
  breakpoints: ['30em', '48em', '62em', '80em'],
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
}
