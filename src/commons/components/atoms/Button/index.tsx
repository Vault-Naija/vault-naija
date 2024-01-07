import React from 'react'
import { string } from 'prop-types'
import { Button as StyledButton } from '@commons/styledComponents/basics'
import { theme } from '@styles/theme'

type TSize = 'small' | 'normal' | 'large'
type VariantKeys = 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger'
type ButtonTypeKeys = 'outline' | 'solid'

interface IButton {
  isDisabled?: boolean
  backgroundColor?: string
  variant?: VariantKeys
  size: TSize
  label: string
  color?: string
  type?: ButtonTypeKeys
}

interface ISizeStyle {
  fontSize: string
  padding: string
  boarderRadius: string
  lineHeight?: string
}

interface ISizeMap {
  [key: string]: ISizeStyle
}

interface ButtonType {
  background?: string
  color?: string
  border?: string
}

type ButtonTypes = {
  [K in ButtonTypeKeys]: ButtonType
}

type VariantType = { [K in VariantKeys]: string }

const Button: React.FC<IButton> = ({
  isDisabled,
  backgroundColor,
  size = 'medium',
  label,
  color = 'white',
  variant = 'primary',
  type = 'solid',
}) => {
  const sizeMap: ISizeMap = {
    small: {
      fontSize: '1.3rem',
      padding: '0px, 10px, 0px, 10px',
      boarderRadius: '6px',
      lineHeight: '1.57rem',
    },

    normal: {
      fontSize: '1.6rem',
      padding: '0px, 16px, 0px, 16px',
      boarderRadius: '6px',
      lineHeight: '1.94rem',
    },
    large: {
      fontSize: '1.8rem',
      padding: '0px, 20px, 0px, 20px',
      boarderRadius: '6px',
      lineHeight: '2.17rem',
    },
  }

  const variantMap: VariantType = {
    primary: 'blue',
    secondary: 'pink',
    tertiary: 'gray',
    success: 'green',
    danger: 'red',
  }

  const buttonTypes: ButtonTypes = {
    outline: {
      background: 'none',
      color: `${theme.colors.primary}`,
      border: `1px solid ${theme.colors.gray300}`,
    },
    solid: {
      background: 'none',
      color: `${theme.colors.primary}`,
      border: `1px solid ${theme.colors.gray300}`,
    },
  }
  return (
    <StyledButton
      disabled={isDisabled}
      background={backgroundColor || variantMap[variant]}
      color={color}
      {...sizeMap[size]}
      {...buttonTypes[type]}
    >
      {label}
    </StyledButton>
  )
}

export default Button

Button.propTypes = {
  backgroundColor: string,
}
