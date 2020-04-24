import React from 'react'
import {ThemeProvider, CSSReset} from '@chakra-ui/core'

import 'initializeFirebase'
import GlobalCSS from 'GlobalCSS'
import Routes from 'routes'

export default function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <GlobalCSS />
      <Routes />
    </ThemeProvider>
  )
}
