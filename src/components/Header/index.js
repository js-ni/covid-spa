import React from 'react'
import {Link, useMatch} from 'react-router-dom'
import {Box, Button, Stack} from '@chakra-ui/core'

import logo from './logo.png'
import Container from 'components/Container'

export default function Header() {
  const isLoginPage = useMatch(`login`)
  const isSignUpPage = useMatch(`signup`)

  return (
    <Container as="header">
      <Stack isInline align="center" pt={10} spacing="auto">
        <Box as={Link} to="/">
          <Box as="img" alt="Covid-19 Nicaragua" src={logo} w={244} />
        </Box>

        <Box>
          {isLoginPage && (
            <Box as={Link} color="white" to="signup">
              ¿Aún no eres miembro?{' '}
              <Box as="span" color="red.500">
                Regístrate
              </Box>
            </Box>
          )}

          {isSignUpPage && (
            <Box as={Link} color="white" to="login">
              ¿Ya eres miembro?{' '}
              <Box as="span" color="red.500">
                Inicia Sesión
              </Box>
            </Box>
          )}

          {!isLoginPage && !isSignUpPage && (
            <>
              <Button as={Link} to="login" variant="outline" variantColor="red">
                Iniciar Sesión
              </Button>
              <Button as={Link} ml={6} to="signup" variantColor="red">
                Regístrate
              </Button>
            </>
          )}
        </Box>
      </Stack>
    </Container>
  )
}
