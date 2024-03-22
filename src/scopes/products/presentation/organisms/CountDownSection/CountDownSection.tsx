import { Box } from '@commons/styledComponents/basics'
import React from 'react'
import CountDown from '../../molecules/CountDown/CountDown'
import DealCard from '../../molecules/DealCard/DealCard'
import digitalWatch from '@assets/images/digital-watch.png'

const CountDownSection = () => {
  return (
    <Box display="flex">
      <Box width="28rem">
        <CountDown />
      </Box>

      <Box
        flex="2"
        display="grid"
        width="100%"
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <DealCard
            key={index}
            image={digitalWatch}
            label="Smart watches"
            discount="-25%"
          />
        ))}
      </Box>
    </Box>
  )
}

export default CountDownSection
