import React from 'react'
import { Box, Image, Text } from '@commons/styledComponents/basics'
import { Span } from '@commons/styledComponents/basics/Text/Span'
import { countrySupplier } from '@scopes/products/application/constants/countrySuppliers'
import { theme } from '@styles/theme'

const RegionSuppliers = () => {
  return (
    <>
      <Text.H3
        fontWeight={theme.fontWeight.bold}
        fontSize={theme.sizes.heading3}
        color={theme.colors.dark}
      >
        Suppliers by region
      </Text.H3>
      <Box
        display="grid"
        width="100%"
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        gridColumnGap="2.5rem"
        gridRowGap="2.5rem"
      >
        {countrySupplier.map(({ id, title, desc, countryLogo }) => (
          <Box key={id} display="flex" gap="1rem" alignItems="center">
            <Image src={countryLogo} width="28px" height="20px" />
            <Box display="flex" flexDirection="column">
              <Span
                fontWeight={theme.fontWeight.regular}
                fontSize={theme.sizes.bodyDefault}
                color={theme.colors.dark}
              >
                {title}
              </Span>
              <Span
                fontWeight={theme.fontWeight.regular}
                fontSize={theme.sizes.bodySmall}
                color={theme.colors.gray500}
              >
                {desc}
              </Span>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default RegionSuppliers
