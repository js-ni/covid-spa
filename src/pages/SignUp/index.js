import React, {useRef} from 'react'
import {Field, Form, Formik} from 'formik'
import {useNavigate} from 'react-router-dom'
import {object, string} from 'yup'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Grid,
  Icon,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/core'
import {useMachine} from '@xstate/react'

import machine from './machine'
import FormLabel from 'components/FormLabel'
import Input from 'components/Input'
import firebaseErrorToFormik from 'utils/firebaseErrorToFormik'

const validationSchema = object({
  city: string(),
  email: string().email().required(),
  password: string().min(6).required(),
  phoneNumber: string().required(),
  username: string().required(),
})

export default function SignUp() {
  const formikRef = useRef(null)
  const navigate = useNavigate()
  const [current, send] = useMachine(machine, {
    actions: {
      redirectToHome: () => {
        navigate(`/`)
      },
      setFormikErrors: (ctx, event) => {
        formikRef.current.setErrors(firebaseErrorToFormik(event.data))
      },
    },
  })

  function handleSubmit(values) {
    send(`SIGN_UP`, values)
  }

  return (
    <Formik
      innerRef={formikRef}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={{
        city: ``,
        email: ``,
        password: ``,
        phoneNumber: ``,
        username: ``,
      }}
    >
      {() => (
        <>
          <Box
            bg="#1b1633"
            bottom={0}
            boxShadow="20px 0 40px rgba(0, 0, 0, 0.3)"
            left={0}
            position="fixed"
            top={0}
            w="715px"
            zIndex={-1}
          >
            <Box
              as="img"
              maxW="initial"
              src={require(`./illustration.png`)}
              width={803}
            />
          </Box>

          <Box as={Form} float="right" mr="12%" mt={107} w={420}>
            <Heading color="white" fontSize="30px" fontWeight="bold">
              Regístrate
            </Heading>

            <Grid gap="20px" mt="45px">
              <Field name="username">
                {({field, meta: {error, touched}}) => (
                  <FormControl isInvalid={error && touched}>
                    <FormLabel htmlFor="username">Nombre de usuario</FormLabel>
                    <Input {...field} id="username" />
                    <FormErrorMessage>{error}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="email">
                {({field, meta: {error, touched}}) => (
                  <FormControl isInvalid={error && touched}>
                    <FormLabel htmlFor="email">Correo electrónico</FormLabel>
                    <InputGroup>
                      <Input {...field} id="email" />
                      <InputRightElement
                        children={<Icon name="question" />}
                        color="white"
                      />
                    </InputGroup>
                    <FormErrorMessage>{error}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Grid gap="30px" templateColumns="repeat(2, 1fr)">
                <Field name="phoneNumber">
                  {({field, meta: {error, touched}}) => (
                    <FormControl isInvalid={error && touched}>
                      <FormLabel htmlFor="phoneNumber">
                        Número de teléfono
                      </FormLabel>
                      <InputGroup>
                        <Input {...field} id="phoneNumber" />
                        <InputRightElement
                          children={<Icon name="question" />}
                          color="white"
                        />
                      </InputGroup>
                      <FormErrorMessage>{error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="city">
                  {({field, meta: {error, touched}}) => (
                    <FormControl isInvalid={error && touched}>
                      <FormLabel htmlFor="city">Ciudad</FormLabel>
                      <InputGroup>
                        <Input {...field} id="city" />
                        <InputRightElement
                          children={<Icon name="question" />}
                          color="white"
                        />
                      </InputGroup>
                      <FormErrorMessage>{error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Grid>

              <Field name="password">
                {({field, meta: {error, touched}}) => (
                  <FormControl isInvalid={error && touched}>
                    <FormLabel htmlFor="password">Contraseña</FormLabel>
                    <Input
                      {...field}
                      id="password"
                      placeholder="6+ caracteres"
                      type="password"
                    />
                    <FormErrorMessage>{error}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Grid>

            <Flex align="center" mt="30px">
              <Checkbox borderColor="rgba(255, 255, 255, 0.2)" />
              <Box color="white" fontSize="sm" ml="10px">
                Acepto los{' '}
                <Box as="a" color="red.500">
                  Términos de Uso
                </Box>{' '}
                y las{' '}
                <Box as="a" color="red.500">
                  Políticas de Privacidad
                </Box>
              </Box>
            </Flex>

            <Button
              isLoading={current.matches(`signingUp`)}
              minW="185px"
              mt="40px"
              type="submit"
              variantColor="red"
            >
              Crear Cuenta
            </Button>
          </Box>
        </>
      )}
    </Formik>
  )
}
