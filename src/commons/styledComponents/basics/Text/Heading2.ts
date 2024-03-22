import { theme } from '@styles/theme'
import styled from 'styled-components'
import { commonCSS, CommonPropsInterface } from '../common'

export const H2 = styled.h2<CommonPropsInterface>`
  ${commonCSS}
  font-size: ${theme.sizes.heading2},
  font-weight: ${theme.fontWeight.semiBold}
`
