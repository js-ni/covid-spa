import React, {useRef} from 'react'
import {Field, Form, Formik} from 'formik'
import {useNavigate} from 'react-router-dom'
import {object, string} from 'yup'
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/core'
import {useMachine} from '@xstate/react'

import machine from './machine'
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
        <Form>
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
              <FormControl isInvalid={error && touched} mt={4}>
                <FormLabel htmlFor="email">Correo electrónico</FormLabel>
                <Input {...field} id="email" />
                <FormErrorMessage>{error}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="phoneNumber">
            {({field, meta: {error, touched}}) => (
              <FormControl isInvalid={error && touched} mt={4}>
                <FormLabel htmlFor="phoneNumber">Número de teléfono</FormLabel>
                <Input {...field} id="phoneNumber" />
                <FormErrorMessage>{error}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="city">
            {({field, meta: {error, touched}}) => (
              <FormControl isInvalid={error && touched} mt={4}>
                <FormLabel htmlFor="city">Ciudad</FormLabel>
                <Input {...field} id="city" />
                <FormErrorMessage>{error}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="password">
            {({field, meta: {error, touched}}) => (
              <FormControl isInvalid={error && touched} mt={4}>
                <FormLabel htmlFor="password">Contraseña</FormLabel>
                <Input {...field} id="password" type="password" />
                <FormErrorMessage>{error}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button isLoading={current.matches(`signingUp`)} mt={4} type="submit">
            Registrarte
          </Button>
        </Form>
      )}
    </Formik>
  )
}
