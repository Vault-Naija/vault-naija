import React from 'react'
import { string } from 'prop-types'

type TSize = 'small' | 'medium' | 'large'
type VariantKeys = 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger'

interface IButton {
  isDisabled?: boolean
  backgroundColor?: string
  variant?: VariantKeys
  size: TSize
  label: string
  color?: string
}

interface ISizeStyle {
  fontSize: string
  padding: string
}

interface ISizeMap {
  [key: string]: ISizeStyle
}

type VariantType = { [K in VariantKeys]: string }

const Button: React.FC<IButton> = ({
  isDisabled,
  backgroundColor,
  size = 'medium',
  label,
  color = 'white',
  variant = 'primary',
}) => {
  const sizeMap: ISizeMap = {
    small: {
      fontSize: '2px',
      padding: '5px',
    },

    medium: {
      fontSize: '4px',
      padding: '10px',
    },
    large: {
      fontSize: '8px',
      padding: '16px',
    },
  }

  const variantMap: VariantType = {
    primary: 'blue',
    secondary: 'pink',
    tertiary: 'gray',
    success: 'green',
    danger: 'red',
  }
  return (
    <button
      disabled={isDisabled}
      style={{
        backgroundColor: backgroundColor || variantMap[variant],
        ...sizeMap[size],
        color: color,
      }}
    >
      {label}
    </button>
  )
}

export default Button

Button.propTypes = {
  backgroundColor: string,
}
