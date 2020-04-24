import React from 'react'
import {ThemeProvider, CSSReset} from '@chakra-ui/core'

import 'initializeFirebase'
import GlobalCSS from 'GlobalCSS'
import Routes from 'routes'
import theme from 'theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <GlobalCSS />
      <Routes />
    </ThemeProvider>
  )
}
