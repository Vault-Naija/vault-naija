import { Box } from '@commons/styledComponents/basics'
import { TextInput } from '@commons/components/atoms/Input/Input'
import { EyeIcon } from '@assets/eye-icon'

interface PasswordInputProps {
  placeholder?: string
}
export const PasswordInput = ({ placeholder }: PasswordInputProps) => {
  return (
    <Box display="flex" position="relative">
      <TextInput placeholder={placeholder} type="password" />
      <Box position="absolute">
        <EyeIcon />
      </Box>
    </Box>
  )
}
