import { FC } from 'react'
import { Box, Text, Form } from '@commons/styledComponents/basics'
import { TextInput } from '@commons/components/atoms/Input/Input'
import { PasswordInput } from '../../molecules/passwordInput'
import Button from '@commons/components/atoms/Button'

const Login: FC = () => {
  return (
    <Box>
      <Text.H1>Login</Text.H1>
      <Box>
        <Form>
          <TextInput placeholder="Email or username" />
          <PasswordInput placeholder="password" />
          <Button label="Login" size="normal" />
        </Form>
      </Box>
    </Box>
  )
}

export default Login
