import React, { FC } from 'react'
import { Box, Text } from '@commons/styledComponents/basics'
import { theme } from '@styles/theme'
import Button from '../Button'

interface InfoBoxProps {
  background?: string
  label: React.ReactNode
  width?: string
  height?: string
  backgroundImg?: string
  isButton?: boolean
  buttonLabel?: string
  buttonSize?: string
  buttonBgColor?: string
  buttonColor?: string
  buttonWidth?: string
  fontSize?: string
  color?: string
  fontWeight?: number
}
export const InfoBox: FC<InfoBoxProps> = ({
  background,
  label,
  width = '100%',
  height,
  backgroundImg,
  isButton = false,
  buttonBgColor,
  buttonSize,
  buttonLabel,
  buttonColor,
  buttonWidth,
  fontSize = theme.sizes.heading6,
  color = theme.colors.white,
  fontWeight,
}) => {
  return (
    <Box
      background={background}
      padding="1.6rem 4rem 2.2rem 1.6rem "
      width={width}
      borderRadius={isButton ? '' : '.6rem'}
      bgImage={`url(${backgroundImg})`}
      objectFit="cover"
      bgRepeat="no-repeat"
      bgSize="cover"
      height={height}
      display={isButton ? 'flex' : ''}
      flexDirection={isButton ? 'column' : ''}
      gap={isButton ? '2rem' : ''}
    >
      <Text.Span fontSize={fontSize} color={color} fontWeight={fontWeight}>
        {label}
      </Text.Span>
      {isButton && (
        <Button
          label={buttonLabel || ''}
          backgroundColor={buttonBgColor}
          size={buttonSize || 'large'}
          color={buttonColor}
          width={buttonWidth}
        />
      )}
    </Box>
  )
}
