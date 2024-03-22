import React from 'react'
import { Box, Text } from '@commons/styledComponents/basics'
import CountDownDeal from '../../molecules/CountDownDeal/CountDownDeal'
import { theme } from '@styles/theme'

const CountDown = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="3rem"
      background={theme.colors.white}
      padding="2rem 2rem 8rem 2rem"
      border={`1px solid ${theme.colors.gray300}`}
    >
      <Box>
        <Text.H2
          fontWeight={600}
          fontSize={theme.sizes.heading4}
          lineHeight="28px"
          color={theme.colors.dark}
        >
          Deals and offers
        </Text.H2>
        <Text.Span
          fontWeight={400}
          fontSize={theme.sizes.heading6}
          lineHeight="normal"
          color={theme.colors.gray500}
        >
          Hygiene equipments
        </Text.Span>
      </Box>
      <CountDownDeal days={100} />
    </Box>
  )
}

export default CountDown
