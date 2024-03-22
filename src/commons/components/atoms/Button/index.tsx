import React from 'react'
import { string } from 'prop-types'
import { Button as StyledButton } from '@commons/styledComponents/basics'
import { theme } from '@styles/theme'
import { CommonPropsInterface } from '@commons/styledComponents/basics/common'

export type ButtonProps = CommonPropsInterface &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >

type TSize = 'small' | 'normal' | 'large'
type ColorSchemeKeys =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'danger'
type ButtonVariantKeys = 'outline' | 'solid'

type IButton = ButtonProps & {
  isDisabled?: boolean
  backgroundColor?: string
  colorScheme?: ColorSchemeKeys
  size: TSize
  label: string
  color?: string
  variant?: ButtonVariantKeys
}

interface ISizeStyle {
  fontSize: string
  padding: string
  lineHeight?: string
}

interface ISizeMap {
  [key: string]: ISizeStyle
}

interface ButtonVariant {
  background?: string
  color?: string
  border?: string
  opacity?: number
}

type ButtonVariants = {
  [K in ButtonVariantKeys]: ButtonVariant
}

type ColorSchemeType = { [K in ColorSchemeKeys]: string }

const Button: React.FC<IButton> = ({
  isDisabled,
  backgroundColor,
  size = 'medium',
  label,
  color = 'white',
  colorScheme = 'primary',
  variant = 'solid',
  ...props
}) => {
  const sizeMap: ISizeMap = {
    small: {
      fontSize: '1.3rem',
      padding: '10px 10px 10px 10px',

      lineHeight: '1.57rem',
    },

    normal: {
      fontSize: '1.6rem',
      padding: '16px 16px 16px 16px',

      lineHeight: '1.94rem',
    },
    large: {
      fontSize: '1.8rem',
      padding: '20px 20px 20px 20px',

      lineHeight: '2.17rem',
    },
  }

  const colorSchemeMap: ColorSchemeType = {
    primary: 'blue',
    secondary: 'pink',
    tertiary: 'gray',
    success: 'green',
    danger: 'red',
  }

  const buttonVariants: ButtonVariants = {
    outline: {
      opacity: 0,
      color: `${theme.colors.primary}`,
      border: `1px solid ${theme.colors.gray300}`,
    },
    solid: {
      background: backgroundColor || colorSchemeMap[colorScheme],
      color: `${color || theme.colors.white}`,
      border: `1px solid ${theme.colors.gray300}`,
    },
  }

  const mergedStyles = {
    ...sizeMap[size],
    ...buttonVariants[variant],
  }
  return (
    <StyledButton
      cursor="pointer"
      hoverOpacity="0.7"
      disabled={isDisabled}
      transition="all 0.3s"
      background={backgroundColor || colorSchemeMap[colorScheme]}
      color={color}
      {...mergedStyles}
      borderRadius=".6rem"
      {...props}
    >
      {label}
    </StyledButton>
  )
}

export default Button

Button.propTypes = {
  backgroundColor: string,
}
