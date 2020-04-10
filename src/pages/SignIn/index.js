import React, {useRef} from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Link,
  Flex,
} from '@chakra-ui/core'
import {object, string} from 'yup'
import {Formik, Form, Field} from 'formik'

const validationSchema = object({
  email: string().required(),
  phone_number: string().required(),
  password: string().min(6).required(),
})

function SessionForm() {
  const formikRef = useRef(null)

  function handleSubmit() {
    console.log('submit')
  }

  return (
    <>
      <Flex justify="center">
        <Formik
          innerRef={formikRef}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          initialValues={{
            email: '',
            phone_number: '',
            password: '',
          }}
        >
          {() => (
            <Form>
              <Field name="indentificator">
                {({field, meta: {error, touched}}) => (
                  <FormControl isInvalid={error & touched} mt={4}>
                    <FormLabel htmlFor="identificator">
                      Correo electrónico
                    </FormLabel>
                    <Input id="identificator" {...field} />
                    <FormErrorMessage> {error} </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="password">
                {({field, meta: {error, touched}}) => (
                  <FormControl isInvalid={error & touched} mt={4}>
                    <FormLabel htmlFor="password">Contraseña</FormLabel>
                    <Input {...field} id="password" />
                    <FormErrorMessage> {error} </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <div>
                <Link>¿Olvidó su contraseña?</Link>
              </div>

              <Button type="submit" variant="outline" mt={4}>
                Ingresar
              </Button>
            </Form>
          )}
        </Formik>
      </Flex>
    </>
  )
}

export default SessionForm
