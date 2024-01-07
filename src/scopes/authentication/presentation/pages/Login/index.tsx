import { FC, useState } from 'react'
import { Text, Form, Box, RouterLink } from '@commons/styledComponents/basics'
import { TextInput } from '@commons/components/atoms/Input/Input'
import { PasswordInput } from '../../molecules/PasswordInput/PasswordInput'
import Button from '@commons/components/atoms/Button'
import Authentication from '../../templates/Authentication'
import loginCover from '@assets/images/login-cover.png'
import { Images } from '@assets'
import { theme } from '@styles/theme'
import useValidate from '../../molecules/Validator/useValidator'

const Login: FC = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const { errors, validate } = useValidate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const validationErrors = validate(values)
    if (Object.values(validationErrors).every((x) => x === '')) {
      console.log('Form submitted successfully', errors)
    }
  }

  return (
    <Authentication coverImage={loginCover}>
      <Text.H1>Login</Text.H1>

      <Form
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        gap="1rem"
        width="70%"
      >
        <TextInput
          placeholder="Email or username"
          borderRadius="6px"
          border="1px solid gray"
          onChange={handleChange}
          value={values.email}
          name="email"
        />
        <Text.Span color="red">{errors.email && errors.email}</Text.Span>
        <PasswordInput
          placeholder="password"
          type="password"
          border="1px solid gray"
          name="password"
          onChange={handleChange}
          value={values.password}
        />
        <Text.Span color="red">{errors.password && errors.password}</Text.Span>
        <Button label="Login" size="normal" />
      </Form>
      <Box
        display="flex"
        flexDirection="column"
        gap="1rem"
        alignItems="center"
        justifyContent="center"
      >
        <RouterLink to={'/'} color={theme.colors.primary}>
          Forgot Password?
        </RouterLink>
        <Text.Span textAlign="center">Or login with?</Text.Span>
        <Box display="flex" gap="1rem">
          <Images.icons.GoogleIcon />
          <Images.icons.FacebookIcon />
        </Box>

        <Box display="flex" gap="1rem" marginTop="1rem">
          <Text.Span>Don’t have an account yet?</Text.Span>
          <RouterLink to={'/'} color={theme.colors.primary}>
            Sign up
          </RouterLink>
        </Box>
      </Box>
    </Authentication>
  )
}

export default Login
