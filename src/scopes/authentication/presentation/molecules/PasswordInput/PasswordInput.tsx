import { Box } from '@commons/styledComponents/basics'
import { InputProps, TextInput } from '@commons/components/atoms/Input/Input'
import { Images } from '@assets'
import { useState } from 'react'

export const PasswordInput = ({ ...props }: InputProps) => {
  const [togglePassword, setTogglePassword] = useState('password')
  return (
    <Box display="flex" position="relative">
      <TextInput {...props} borderRadius=".6rem" type={togglePassword} />
      <Box
        position="absolute"
        right="8px"
        top="2px"
        display="flex"
        transform="scale(0.75)"
        cursor="pointer"
        onClick={() =>
          setTogglePassword(togglePassword === 'password' ? 'text' : 'password')
        }
      >
        {togglePassword === 'password' ? (
          <Images.icons.Eye />
        ) : (
          <Images.icons.EyeCloseIcon />
        )}
      </Box>
    </Box>
  )
}
