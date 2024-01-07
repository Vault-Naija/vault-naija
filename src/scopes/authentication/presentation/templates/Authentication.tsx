import React, { ReactNode } from 'react'
import { Box } from '@commons/styledComponents/basics'

import { Header } from '../organisms/Header/Header'
import { Footer } from '../organisms/Footer/Footer'

interface AuthProps {
  coverImage: string
  children: ReactNode
}
const Authentication = ({ coverImage, children }: AuthProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100vh"
    >
      <Header />
      <Box display="grid" gridTemplateColumns="1fr 0.8fr" height="100%">
        <Box
          bgImage={`url(${coverImage})`}
          height="auto"
          width="100%"
          objectFit="cover"
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          <image />
        </Box>
        <Box
          id="detail"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap="2rem"
        >
          {children}
        </Box>
      </Box>

      <Footer />
    </Box>
  )
}

export default Authentication
