import React from 'react'
import {ThemeProvider, CSSReset} from '@chakra-ui/core'

export default function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <div>App</div>
    </ThemeProvider>
  )
}
