import { FC } from 'react'
import { Text, Form, Box, RouterLink } from '@commons/styledComponents/basics'
import { TextInput } from '@commons/components/atoms/Input/Input'
import { PasswordInput } from '../../molecules/PasswordInput/PasswordInput'
import Button from '@commons/components/atoms/Button'
import Authentication from '../../templates/Authentication'
import loginCover from '@assets/images/login-cover.png'
import { Images } from '@assets'
import { theme } from '@styles/theme'

const Register: FC = () => {
  return (
    <Authentication coverImage={loginCover}>
      <Text.H1>Register</Text.H1>

      <Form display="flex" flexDirection="column" gap="1rem" width="70%">
        <TextInput
          placeholder="Email"
          borderRadius="6px"
          border="1px solid gray"
          type="email"
        />

        <TextInput
          placeholder=" Username"
          borderRadius="6px"
          border="1px solid gray"
          type="text"
        />
        <PasswordInput
          placeholder="Password"
          type="password"
          border="1px solid gray"
        />

        <PasswordInput
          placeholder="Confirm Password"
          type="password"
          border="1px solid gray"
        />
        <Button label="Register" size="normal" />
      </Form>
      <Box
        display="flex"
        flexDirection="column"
        gap="1rem"
        alignItems="center"
        justifyContent="center"
      >
        <Text.Span textAlign="center">Or login with?</Text.Span>
        <Box display="flex" gap="1rem">
          <Images.icons.GoogleIcon />
          <Images.icons.FacebookIcon />
        </Box>

        <Box display="flex" gap="1rem" marginTop="1rem">
          <Text.Span>Already have an account?</Text.Span>
          <RouterLink to={'/'} color={theme.colors.primary}>
            Login
          </RouterLink>
        </Box>
      </Box>
    </Authentication>
  )
}

export default Register
