import { Input } from '@commons/styledComponents/basics'
import { CommonPropsInterface } from '@commons/styledComponents/basics/common'

export type InputProps = CommonPropsInterface &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >

export const TextInput = ({ ...props }: InputProps) => {
  return <Input padding="1rem" width="100%" {...props} />
}
