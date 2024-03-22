import { Textarea } from '@commons/styledComponents/basics'
import { CommonPropsInterface } from '@commons/styledComponents/basics/common'

export type TextareaProps = CommonPropsInterface &
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >

export const TextArea = ({ ...props }: TextareaProps) => {
  return <Textarea padding="1rem" width="100%" {...props} />
}
