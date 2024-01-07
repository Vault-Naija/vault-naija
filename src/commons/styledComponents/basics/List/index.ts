import styled from 'styled-components'
import { commonCSS, CommonPropsInterface } from '../common'
import { Link } from 'react-router-dom'
import { theme } from '@styles/theme'

export const List = styled.ul<CommonPropsInterface>`
  ${commonCSS}
  list-style:none;
`

export const ListItem = styled.li<CommonPropsInterface>`
  ${commonCSS}
`

export const RouterLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.gray500};
`
