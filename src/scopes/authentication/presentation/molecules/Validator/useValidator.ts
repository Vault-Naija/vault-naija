import { useState } from 'react'

interface Errors {
  email?: string
  password?: string
  username?: string
}

interface FormFields {
  [key: string]: string | undefined
}

const useValidate = () => {
  const [errors, setErrors] = useState<Errors>({})

  const validate = (fields: FormFields) => {
    const tempErrors: Errors = { ...errors }

    if ('email' in fields && fields.email)
      tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)
        ? ''
        : 'Email is not valid'

    if ('password' in fields && fields.password)
      tempErrors.password =
        fields.password.length > 5
          ? ''
          : 'Password must be at least 6 characters long'

    if ('username' in fields && fields.username)
      tempErrors.username = fields.username.length ? '' : 'Username is required'

    setErrors(tempErrors)
    return tempErrors
  }

  return { errors, validate }
}

export default useValidate
