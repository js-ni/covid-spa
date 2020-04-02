import React from 'react'
import {Flex, Button, Heading} from '@chakra-ui/core'

export default function ViewError({
  children,
  heading = `Algo salió mal.`,
  refresh,
  subheading = `Perdón por los problemas técnicos. Hemos sido notificados del problema y debemos resolverlo pronto.`,
}) {
  return (
    <Flex
      align="center"
      display="flex"
      flex="auto"
      direction="column"
      justify="center"
      minHeight="100vh"
      py={3}
    >
      <Heading as="h1">{heading}</Heading>
      <Heading mt={2} size="sm">
        {subheading}
      </Heading>

      {refresh && (
        <Button
          mt={4}
          onClick={() => window.location.reload(true)}
          variantColor="green"
        >
          Recarga la página
        </Button>
      )}

      {children}
    </Flex>
  )
}
