import React from 'react'
import FeaturedProductCard from '../../molecules/FeaturedProductCard/FeaturedProductCard'
import rasm from '@assets/images/rasm.png'
import { Box } from '@commons/styledComponents/basics'
import { InfoBox } from '@commons/components/atoms/InfoBox/InfoBox'
import chairflower from '@assets/images/chairflower.png'
import { theme } from '@styles/theme'

const HomeElectroSection = () => {
  return (
    <Box display="flex" width="100%" padding="1rem 0">
      <InfoBox
        label={
          <>
            {'Home and'}
            <br />
            {'outdoor'}
          </>
        }
        buttonSize="normal"
        buttonLabel="Source now"
        width="28rem"
        background="#FFE8BA66"
        buttonWidth="60%"
        fontWeight={theme.fontWeight.bold}
        backgroundImg={chairflower}
        isButton
        fontSize={theme.sizes.heading4}
        color={theme.colors.dark}
        buttonBgColor={theme.colors.white}
        buttonColor={theme.colors.dark}
        // height="25.7rem"
      />

      <Box display="flex" flexDirection="column" width="85%">
        <Box
          display="grid"
          width="100%"
          gridTemplateColumns="repeat(auto-fit, minmax(300px,1fr))"
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
              productImage={rasm}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default HomeElectroSection
