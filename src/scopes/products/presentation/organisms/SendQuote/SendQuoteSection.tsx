import React from 'react'
import { Box, Text } from '@commons/styledComponents/basics'
import sendQuoteBg from '@assets/images/send-qoute-bg.png'
import SendQuoteForm from './SendQuoteForm'
import { Span } from '@commons/styledComponents/basics/Text/Span'
import { theme } from '@styles/theme'

const SendQuoteSection = () => {
  return (
    <Box
      width="100%"
      height="446px"
      background="#DFDFDF"
      gradientBg="linear-gradient(94.99deg, #2C7CF1 7.19%, rgba(0, 209, 255, 0.5) 89.49%)"
      bgImage={`url(${sendQuoteBg})`}
      objectFit="cover"
      bgRepeat="no-repeat"
      bgSize="cover"
      borderRadius="6px"
      display="flex"
      padding="3rem"
    >
      <Box flex="1.5">
        <Box width="60%">
          <Text.H2
            fontWeight={theme.fontWeight.bold}
            fontSize={theme.sizes.heading2}
            color={theme.colors.white}
          >
            An easy way to send requests to all suppliers
          </Text.H2>
          <Span
            fontWeight={theme.fontWeight.regular}
            fontSize={theme.sizes.bodyDefault}
            color={theme.colors.white}
            padding="2rem 0"
            display="inline-block"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </Span>
        </Box>
      </Box>
      <SendQuoteForm />
    </Box>
  )
}

export default SendQuoteSection
