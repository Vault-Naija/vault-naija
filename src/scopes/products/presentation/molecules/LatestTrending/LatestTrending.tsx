import React, { FC } from 'react'
import { Box, Text } from '@commons/styledComponents/basics'
import Button from '@commons/components/atoms/Button'
import { theme } from '@styles/theme'

interface IProps {
  backgroundImage?: string
  label?: string
}
const LatestTrending: FC<IProps> = ({ backgroundImage, label }) => {
  return (
    <Box
      bgImage={`url(${backgroundImage})`}
      height="100%"
      width="100%"
      objectFit="cover"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box display="flex" flexDirection="column" gap="1rem" padding="4rem">
        <Box>
          <Text.Span fontSize={theme.sizes.heading3}> LatestTrending</Text.Span>
          <Text.H2 fontSize={theme.sizes.heading2}>{label}</Text.H2>
        </Box>

        <Button
          label="Learn more"
          size="normal"
          backgroundColor={theme.colors.white}
          color={theme.colors.dark}
          width="fit-content"
        />
      </Box>
    </Box>
  )
}

export default LatestTrending
