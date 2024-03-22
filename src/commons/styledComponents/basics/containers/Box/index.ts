import styled from 'styled-components'
import { BoxProps, commonCSS } from '../../common'

export const Box = styled.div<BoxProps>`
  ${commonCSS}
  grid-template-columns:${({ gridTemplateColumns }) => gridTemplateColumns};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows};
  grid-column-gap: ${({ gridColumnGap }) => gridColumnGap};
  grid-row-gap: ${({ gridRowGap }) => gridRowGap};
`
