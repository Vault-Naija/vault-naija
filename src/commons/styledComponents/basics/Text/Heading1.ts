import { theme } from '@styles/theme'
import styled from 'styled-components'
import { commonCSS, CommonPropsInterface } from '../common'

export const H1 = styled.h1<CommonPropsInterface>`
  ${commonCSS}
  font-size: ${theme.sizes.heading1},
  font-weight: ${theme.fontWeight.semiBold}
`
