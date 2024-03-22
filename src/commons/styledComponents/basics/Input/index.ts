import styled from 'styled-components'
import { commonCSS, CommonPropsInterface } from '../common'

export const Input = styled.input<CommonPropsInterface>`
  ${commonCSS}
  ${({ customCss }) => customCss}
  
  ::placeholder {
    color: red !important;
    font-style: italic;
  }
`

export const Textarea = styled.textarea<CommonPropsInterface>`
  ${commonCSS}
  ${({ customCss }) => customCss}
  
  ::placeholder {
    color: red !important;
    font-style: italic;
  }
`
