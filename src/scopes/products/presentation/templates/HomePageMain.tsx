import React from 'react'
import { Box } from '@commons/styledComponents/basics'
import CategorySection from '../organisms/CategorySection/CategorySection'
import CountDownSection from '../organisms/CountDownSection/CountDownSection'
import HomeElectroSection from '../organisms/HomeElectroSection/HomeElectroSection'
import GadgetPreviewSection from '../organisms/GadgetPreviewSection/GadgetPreviewSection.jsx'
import SendQuoteSection from '../organisms/SendQuote/SendQuoteSection'
import RecommendedItems from '../organisms/RecommendedSection/RecommendedItems'
import ExtraServices from '../organisms/ExtraServices/ExtraService'
import RegionSuppliers from '../organisms/RegionSuppliers/RegionSuppliers'
import NewsLetter from '../organisms/NewsLetter/NewsLetter'

const HomePageMain = () => {
  return (
    <Box
      display="flex"
      width="100%"
      padding="4rem"
      flexDirection="column"
      gap="2rem"
    >
      <CategorySection />
      <CountDownSection />
      <HomeElectroSection />
      <GadgetPreviewSection />
      <SendQuoteSection />
      <RecommendedItems />
      <ExtraServices />
      <RegionSuppliers />
      <NewsLetter />
    </Box>
  )
}

export default HomePageMain
