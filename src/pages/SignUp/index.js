import React, {useRef} from 'react'
import {Field, Form, Formik} from 'formik'
import {number, object, string} from 'yup'
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/core'

const validationSchema = object({
  city: string(),
  email: string().email().required(),
  password: string().min(8).required(),
  phoneNumber: number().required(),
  username: string().required(),
})

export default function SignUp() {
  const formikRef = useRef(null)

  return (
    <Formik
      innerRef={formikRef}
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
            {({field, meta}) => (
              <FormControl isInvalid={meta.error && meta.touched}>
                <FormLabel htmlFor="username">Nombre usuario</FormLabel>
                <Input {...field} id="username" />
                <FormErrorMessage>{meta.error}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="email">
            {({field, meta}) => (
              <FormControl isInvalid={meta.error && meta.touched} mt={4}>
                <FormLabel htmlFor="email">Correo electrónico</FormLabel>
                <Input {...field} id="email" />
                <FormErrorMessage>{meta.error}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="phoneNumber">
            {({field, meta}) => (
              <FormControl isInvalid={meta.error && meta.touched} mt={4}>
                <FormLabel htmlFor="phoneNumber">Número de teléfono</FormLabel>
                <Input {...field} id="phoneNumber" />
                <FormErrorMessage>{meta.error}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="city">
            {({field, meta}) => (
              <FormControl isInvalid={meta.error && meta.touched} mt={4}>
                <FormLabel htmlFor="city">Ciudad</FormLabel>
                <Input {...field} id="city" />
                <FormErrorMessage>{meta.error}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="password">
            {({field, meta}) => (
              <FormControl isInvalid={meta.error && meta.touched} mt={4}>
                <FormLabel htmlFor="password">Contraseña</FormLabel>
                <Input {...field} id="password" />
                <FormErrorMessage>{meta.error}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button mt={4} type="submit">
            Registrarte
          </Button>
        </Form>
      )}
    </Formik>
  )
}
