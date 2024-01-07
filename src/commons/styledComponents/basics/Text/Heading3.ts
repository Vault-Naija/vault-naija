import { theme } from '@styles/theme'
import styled from 'styled-components'
import { commonCSS, CommonPropsInterface } from '../common'

export const H3 = styled.h3<CommonPropsInterface>`
  ${commonCSS}
  font-size: ${theme.sizes.heading3},
  font-weight: ${theme.fontWeight.semiBold}
`
