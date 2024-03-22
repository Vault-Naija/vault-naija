import React, { FC } from 'react'
import { Box, Image, Text } from '@commons/styledComponents/basics'
import { Span } from '@commons/styledComponents/basics/Text/Span'

import productImage from '@assets/images/Bitmap.png'
import { theme } from '@styles/theme'

interface CardProps {
  productImage?: string
  title?: string
  desc?: string
}
const RecommendedItems = () => {
  return (
    <>
      <Text.H3
        fontWeight={theme.fontWeight.bold}
        fontSize={theme.sizes.heading3}
        color={theme.colors.dark}
      >
        Recommended Item
      </Text.H3>
      <Box
        display="grid"
        width="100%"
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        gridColumnGap="2.5rem"
        gridRowGap="2.5rem"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <RecommendedCardItem
            key={index}
            title="$10.30"
            desc="T-shirts with multiple colors, for men"
            productImage={productImage}
          />
        ))}
      </Box>
    </>
  )
}

export default RecommendedItems

const RecommendedCardItem: FC<CardProps> = ({ productImage, title, desc }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="1rem"
      background={theme.colors.white}
      border={`1px solid ${theme.colors.gray300}`}
      borderRadius="5px"
      padding="2rem"
    >
      <Image
        src={productImage}
        alignSelf="center"
        height="170.67px"
        width="150.22px"
      />
      <Box display="flex" flexDirection="column" gap="1rem">
        <Text.H4
          fontWeight={theme.fontWeight.semiBold}
          fontSize={theme.sizes.bodyDefault}
        >
          {title}
        </Text.H4>
        <Span
          width="70%"
          fontWeight={theme.fontWeight.regular}
          fontSize={theme.sizes.bodyDefault}
          color={theme.colors.gray500}
        >
          {desc}
        </Span>
      </Box>
    </Box>
  )
}
