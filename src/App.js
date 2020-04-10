import React from 'react'
import {ThemeProvider, CSSReset} from '@chakra-ui/core'

import 'initializeFirebase'
import Routes from 'routes'

export default function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Routes />
    </ThemeProvider>
  )
}
