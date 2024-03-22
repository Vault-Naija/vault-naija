import React from 'react'
import FeaturedProductCard from '../../molecules/FeaturedProductCard/FeaturedProductCard'
import laptop from '@assets/images/laptop.png'
import { Box } from '@commons/styledComponents/basics'
import { InfoBox } from '@commons/components/atoms/InfoBox/InfoBox'
import gadgets from '@assets/images/gadgets.png'
import { theme } from '@styles/theme'

const GadgetPreviewSection = () => {
  return (
    <Box display="flex" width="100%">
      <InfoBox
        label={
          <>
            {'Consumer'}
            <br />
            {'electronics and'}
            <br />
            {'gadgets'}
          </>
        }
        buttonSize="normal"
        buttonLabel="Source now"
        width="28rem"
        background="#FFE8BA66"
        buttonWidth="60%"
        fontWeight={theme.fontWeight.bold}
        backgroundImg={gadgets}
        isButton
        fontSize={theme.sizes.heading4}
        color={theme.colors.dark}
        buttonBgColor={theme.colors.white}
        buttonColor={theme.colors.dark}
        height="auto"
      />

      <Box display="flex" flexDirection="column" width="85%">
        <Box
          display="grid"
          width="100%"
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <FeaturedProductCard
              key={index}
              title="Soft chairs"
              desc={
                <>
                  {'From'}
                  <br />
                  {'USD 19'}
                </>
              }
              productImage={laptop}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default GadgetPreviewSection
