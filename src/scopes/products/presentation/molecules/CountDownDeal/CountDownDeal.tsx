import React, { useEffect, useState } from 'react'
import { Box, Text } from '@commons/styledComponents/basics'
import { theme } from '@styles/theme'

interface IProps {
  days: number
}
const CountDownDeal = ({ days }: IProps) => {
  const [remainingDays, setRemainingDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    let milliseconds = days * 24 * 60 * 60 * 1000
    const countDown = setInterval(() => {
      milliseconds -= 1000
      if (milliseconds < 0) {
        clearInterval(countDown)
        return
      }

      setRemainingDays(Math.floor(milliseconds / (24 * 60 * 60 * 1000)))
      setHours(
        Math.floor((milliseconds % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
      )
      setMinutes(Math.floor((milliseconds % (60 * 60 * 1000)) / (60 * 1000)))
      setSeconds(Math.floor((milliseconds % (60 * 1000)) / 1000))
    }, 1000)

    return () => clearInterval(countDown)
  }, [])
  const countDownData = [
    { label: 'Days', value: remainingDays },
    { label: 'Hour', value: hours },
    { label: 'Min', value: minutes },
    { label: 'Sec', value: seconds },
  ]
  return (
    <Box display="flex" gap="1rem">
      {countDownData.map(({ label, value }) => (
        <Box
          key={label}
          width="45px"
          padding="2.5rem"
          height="50px"
          display="flex"
          borderRadius="4px"
          justifyContent="center"
          alignItems="center"
          background={theme.colors.gray800}
        >
          <Box display="flex" flexDirection="column" gap="0.5rem">
            <Text.Span
              color={theme.colors.white}
              textAlign="center"
              fontSize={theme.sizes.heading6}
              fontWeight={theme.fontWeight.extraBold}
            >
              {value}
            </Text.Span>
            <Text.Span color="white" fontSize={theme.sizes.bodySmall}>
              {label}
            </Text.Span>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default CountDownDeal
