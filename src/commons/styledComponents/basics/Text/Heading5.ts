import { theme } from '@styles/theme'
import styled from 'styled-components'
import { commonCSS, CommonPropsInterface } from '../common'

export const H5 = styled.h5<CommonPropsInterface>`
  ${commonCSS}
  font-size: ${theme.sizes.heading5},
  font-weight: ${theme.fontWeight.semiBold}
`
