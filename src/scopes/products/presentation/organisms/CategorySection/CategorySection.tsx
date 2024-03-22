import React, { useState } from 'react'
import { Box } from '@commons/styledComponents/basics'

import { HomePageCategoriesList } from '../../molecules/HomePageCategoriesList/HomePageCategoriesList'
import { homeCategoriesListItems } from '@scopes/products/application/constants'
import { ListItemProps } from '@hooks'
import UserWelcomeCard from '@commons/components/molecules/UserWelcomeCard/UserWelcomeCard'
import { InfoBox } from '@commons/components/atoms/InfoBox/InfoBox'
import { theme } from '@styles/theme'
import bannerImage from '@assets/images/banner-board.png'
import LatestTrending from '../../molecules/LatestTrending/LatestTrending'

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState<ListItemProps[]>([])
  const handleCategoriesListChange = (category: ListItemProps[]) => {
    setSelectedCategory(category)
  }
  return (
    <Box
      display="flex"
      gap="1rem"
      width="100%"
      background={theme.colors.white}
      padding="1rem"
      boxShadow=" 0px 15px 30px rgba(0, 0, 0, 0.05)"
      borderRadius="6px"
      border={`1px solid ${theme.colors.gray300}`}
    >
      <Box flex="0.5">
        <HomePageCategoriesList
          productCategories={homeCategoriesListItems}
          onSelect={handleCategoriesListChange}
          value={selectedCategory}
        />
      </Box>
      <Box flex="2">
        <LatestTrending
          label="Electronic items"
          backgroundImage={bannerImage}
        />
      </Box>

      <Box display="flex" flexDirection="column" gap="2rem" flex="0.4">
        <UserWelcomeCard />
        <InfoBox
          background={theme.colors.orange}
          label="Get US $10 off with a new supplier"
        />

        <InfoBox
          background={theme.colors.cyan}
          label="Send quotes with supplier preferences"
        />
      </Box>
    </Box>
  )
}

export default CategorySection
