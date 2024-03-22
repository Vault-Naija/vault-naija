import React, { FC } from 'react'
import { Box, Image, Text } from '@commons/styledComponents/basics'
import { SendIcon } from '@assets/svg-icons/send-icon'
import { theme } from '@styles/theme'
import servicesImg from '@assets/images/services-img.png'

interface IProps {
  title?: string
  bgImg?: string
}

const ExtraServices = () => {
  return (
    <>
      <Text.H3
        fontWeight={theme.fontWeight.bold}
        fontSize={theme.sizes.heading3}
        color={theme.colors.dark}
      >
        Our extra services
      </Text.H3>
      <Box
        display="grid"
        width="100%"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gridColumnGap="2rem"
        gridRowGap="2.5rem"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <OurServices
            key={index}
            title="Source from Industry Hubs"
            bgImg={servicesImg}
          />
        ))}
      </Box>
    </>
  )
}

export default ExtraServices

const OurServices: FC<IProps> = ({ title, bgImg }) => {
  return (
    <Box
      display="flex"
      position="relative"
      borderRadius="5px"
      background={theme.colors.white}
      flexDirection="column"
      border={`1px solid ${theme.colors.gray300}`}
      width="100%"
      padding="0 0 2rem 0"
    >
      <Image src={bgImg} width="100%" height="120px" />

      <Text.P
        fontSize={theme.sizes.bodyDefault}
        fontWeight={theme.fontWeight.regular}
        color={theme.colors.dark}
        padding=" 2rem 2rem 0 2rem "
        width="50%"
      >
        {title}
      </Text.P>
      <Box
        display="flex"
        position="absolute"
        borderRadius="50%"
        background={theme.colors.skyBlue}
        height="55px"
        width="55px"
        border={`1px solid ${theme.colors.white}`}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        right="20px"
        top="9rem"
      >
        <SendIcon />
      </Box>
    </Box>
  )
}
