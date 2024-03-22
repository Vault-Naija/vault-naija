import React from 'react'
import { Box, Text } from '@commons/styledComponents/basics'
import Button from '@commons/components/atoms/Button'
import { AvatarIcon } from '@assets/svg-icons/avatar-icon'
import { theme } from '@styles/theme'

const UserWelcomeCard = () => {
  return (
    <Box
      width="100%"
      padding="1rem "
      borderRadius=".6rem"
      display="flex"
      flexDirection="column"
      gap="1rem"
      background={theme.colors.baseColor.blue}
    >
      <Box display="flex" alignItems="center" gap="1rem">
        <AvatarIcon />
        <Box display="flex" flexDirection="column">
          <Text.Span fontSize="1.6rem">Hi, user </Text.Span>
          <Text.Span fontSize="1.6rem">let’s get started </Text.Span>
        </Box>
      </Box>
      <Button size="small" label="Join now" />
      <Button size="small" label="Login" color="blue" backgroundColor="white" />
    </Box>
  )
}

export default UserWelcomeCard
