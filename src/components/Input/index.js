import React from 'react'
import {Input as ChakraInput} from '@chakra-ui/core'

export default function Input(props) {
  return (
    <ChakraInput
      bg="rgba(255, 255, 255, 0.02)"
      borderColor="rgba(255, 255, 255, 0.2)"
      {...props}
    />
  )
}
