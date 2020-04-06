import React, {Component} from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Link,
  Flex,
} from '@chakra-ui/core'
import {number, object, string} from 'yup'
import {Form} from 'formik'

class SessionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      phoneNumber: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    console.log('change')
  }

  handleSubmit() {
    console.log('Submit')
  }

  render() {
    return (
      <>
        <Flex justify="center">
          <form onSubmit={this.handleSubmit}>
            <FormControl isRequired>
              <FormLabel htmlFor="email">
                Correo electrónico / Número Telefonico
              </FormLabel>
              <Input
                type="email"
                id="email"
                onChange={this.handleChange}
                placeholder="Ingresar correo electrónico o número telefónico"
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <Input id="password" placeholder="Ingresar contraseña" />
            </FormControl>
            <div>
              <Link>¿Olvidó su contraseña?</Link>
            </div>

            <Button type="submit" variant="outline" size="sm">
              Login
            </Button>
          </form>
        </Flex>
      </>
    )
  }
}

export default SessionForm
