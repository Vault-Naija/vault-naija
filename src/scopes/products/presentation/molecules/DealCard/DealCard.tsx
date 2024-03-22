import React from 'react'
import { Box, Image, Text } from '@commons/styledComponents/basics'
import { theme } from '@styles/theme'

interface IProps {
  image?: string
  label?: string
  discount?: string
}
const DealCard = ({ image, label, discount }: IProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="1rem"
      width="100%"
      padding="2rem"
      border={`1px solid ${theme.colors.gray300}`}
    >
      <Image src={image} width="101.422px" height="121.333px" />
      <Text.Span
        fontSize={theme.sizes.heading6}
        fontWeight={theme.fontWeight.regular}
      >
        {label}
      </Text.Span>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding=".3rem 1.3rem 0.4rem 1.3rem"
        background={theme.colors.orange100}
        borderRadius="29px"
      >
        <Text.Span
          fontSize={theme.sizes.bodySmall}
          color={theme.colors.red600}
          fontWeight={theme.fontWeight.semiBold}
        >
          {discount}
        </Text.Span>
      </Box>
    </Box>
  )
}

export default DealCard
