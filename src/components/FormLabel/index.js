import React from 'react'
import {FormLabel as ChakraFormLabel} from '@chakra-ui/core'

export default function FormLabel(props) {
  return <ChakraFormLabel color="white" fontWeight="bold" {...props} />
}

FormLabel.propTypes = {
  ...ChakraFormLabel.propTypes,
}
