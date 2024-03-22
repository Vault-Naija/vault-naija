import React, { FC } from 'react'
import { Box, Image, Text } from '@commons/styledComponents/basics'
import { Span } from '@commons/styledComponents/basics/Text/Span'
import { theme } from '@styles/theme'

interface IProps {
  title?: string
  productImage?: string
  desc?: React.ReactNode
}

const FeaturedProductCard: FC<IProps> = ({ title, productImage, desc }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="1.5rem 1rem"
      gap="1rem"
      width="100%"
      position="relative"
      height="12.7rem"
      border={`1px solid ${theme.colors.gray300}`}
    >
      <Text.H2
        fontSize={theme.sizes.heading6}
        fontWeight={theme.fontWeight.regular}
      >
        {title}
      </Text.H2>
      <Span
        fontSize={theme.sizes.bodySmall}
        fontWeight={theme.fontWeight.regular}
        color={theme.colors.gray500}
      >
        {desc}
      </Span>
      <Box position="absolute" right="6px" bottom="0.5px">
        <Image src={productImage} height="82px" width="82px" />
      </Box>
    </Box>
  )
}

export default FeaturedProductCard
