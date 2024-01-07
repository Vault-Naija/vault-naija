import { Input } from '@commons/styledComponents/basics'

export interface InputProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value?: string
  placeholder?: string
  border?: string
  outline?: string
  type?: string
}

export const TextInput = ({
  onChange,
  value,
  placeholder,
  type,
  ...props
}: InputProps) => {
  return (
    <Input
      padding="1rem"
      width="100%"
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  )
}
