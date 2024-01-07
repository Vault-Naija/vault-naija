import { css, RuleSet } from 'styled-components'

export interface CommonPropsInterface {
  background?: string
  bgImage?: string
  bgSize?: string
  bgRepeat?: string
  bgPosition?: string
  objectFit?: string
  flex?: string
  color?: string
  placeItems?: string
  border?: string
  padding?: string
  margin?: string
  marginTop?: string
  marginLeft?: string
  width?: string
  minWidth?: string
  height?: string
  borderRadius?: string
  fontWeight?: string
  textAlign?: string
  textTransform?: string
  justifyContent?: string
  alignItems?: string
  display?: string

  position?: string
  top?: string
  bottom?: string
  right?: string
  left?: string
  cursor?: string
  gap?: string
  zIndex?: string
  transform?: string
  flexDirection?: string
  boxShadow?: string
  alignSelf?: string
  lineHeight?: string
  borderBottom?: string
  borderRight?: string
  borderLeft?: string
  borderTop?: string
  overFlowY?: string
  overFlowX?: string
  overFlow?: string
  opacity?: number
  scale?: string
  transition?: string
  hoverBg?: string
  hoverColor?: string
  scaleOut?: string
  transformOnHover?: string
  zIndexOnHover?: string
  hoverOpacity?: string
  focusedBorderColor?: string
  activeBorderColor?: string
  beforeContent?: string
  beforeHeight?: string
  beforeWidth?: string
  beforeTop?: string
  beforeBackground?: string
  beforeTransform?: string
  beforePosition?: string
  whiteSpace?: string
  textOverFlow?: string
  outline?: string
  resize?: string
  maxHeight?: string
  borderColor?: string
  fontSize?: string
  // onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  hoverPadding?: string
  widthM?: string
  customCss?: RuleSet<object>
}

export interface BoxProps extends CommonPropsInterface {
  gridTemplateColumns?: string
  gridTemplateRows?: string
  gridRowGap?: string
  gridColumnGap?: string
}

export const commonCSS = css<CommonPropsInterface>`
  background-color: ${({ background }) => background};
  background-image: ${({ bgImage }) => bgImage};
  background-size: ${({ bgSize }) => bgSize};
  background-repeat: ${({ bgRepeat }) => bgRepeat};
  background-position: ${({ bgPosition }) => bgPosition};
  object-fit: ${({ objectFit }) => objectFit};
  max-height: ${({ maxHeight }) => maxHeight};
  border-color: ${({ borderColor }) => borderColor};
  font-size: ${({ fontSize }) => fontSize};
  flex: ${({ flex }) => flex};
  color: ${({ color }) => color};
  place-items: ${({ placeItems }) => placeItems};
  border: ${({ border }) => border};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop};
  margin-left: ${({ marginLeft }) => marginLeft};
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${({ textTransform }) => textTransform};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  display: ${({ display }) => display};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};

  left: ${({ left }) => left};
  cursor: ${({ cursor }) => cursor};
  gap: ${({ gap }) => gap};
  text-overflow: ${({ textOverFlow }) => textOverFlow};
  white-space: ${({ whiteSpace }) => whiteSpace};
  z-index: ${({ zIndex }) => zIndex};
  transform: ${({ transform }) => transform};
  flex-direction: ${({ flexDirection }) => flexDirection};
  box-shadow: ${({ boxShadow }) => boxShadow};
  align-self: ${({ alignSelf }) => alignSelf};
  line-height: ${({ lineHeight }) => lineHeight};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-right: ${({ borderRight }) => borderRight};
  border-left: ${({ borderLeft }) => borderLeft};
  border-top: ${({ borderTop }) => borderTop};
  overflow-y: ${({ overFlowY }) => overFlowY};
  outline: ${({ outline }) => outline};
  overflow: ${({ overFlow }) => overFlow};
  overflow-x: ${({ overFlowX }) => overFlowX};
  opacity: ${({ opacity }) => opacity};
  scale: ${({ scale }) => scale};
  transition: ${({ transition }) => transition};

  &:hover {
    background-color: ${({ hoverBg }) => hoverBg};
    color: ${({ hoverColor }) => hoverColor};
    scale: ${({ scaleOut }) => scaleOut};
    padding: ${({ hoverPadding }) => hoverPadding};

    transform: ${({ transformOnHover }) => transformOnHover};
    z-index: ${({ zIndexOnHover }) => zIndexOnHover};
    opacity: ${({ hoverOpacity }) => hoverOpacity};
    resize: ${({ resize }) => resize};
  }

  &:focus {
    border-color: ${({ focusedBorderColor }) => focusedBorderColor};
  }
  &:active {
    border-color: ${({ activeBorderColor }) => activeBorderColor};
  }
  :before {
    content: ${({ beforeContent }) => beforeContent};
    height: ${({ beforeHeight }) => beforeHeight};
    width: ${({ beforeWidth }) => beforeWidth};
    top: ${({ beforeTop }) => beforeTop};
    background-color: ${({ beforeBackground }) => beforeBackground};
    transform: ${({ beforeTransform }) => beforeTransform};
    position: ${({ beforePosition }) => beforePosition};
  }
  ${({ customCss }) => customCss};
`
