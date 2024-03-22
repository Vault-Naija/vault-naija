import { theme } from '@styles/theme'
import styled from 'styled-components'
import { commonCSS, CommonPropsInterface } from '../common'

export const H4 = styled.h4<CommonPropsInterface>`
  ${commonCSS}
  font-size: ${theme.sizes.heading4},
  font-weight: ${theme.fontWeight.semiBold}
`
