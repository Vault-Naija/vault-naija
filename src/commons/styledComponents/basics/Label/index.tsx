import { theme } from '@styles/theme'
import styled from 'styled-components'
import { commonCSS, CommonPropsInterface } from '../common'

export const Label = styled.label<CommonPropsInterface>`
  ${commonCSS}
  font-size: ${theme.sizes.bodyDefault},
  font-weight: ${theme.fontWeight.regular}
`
