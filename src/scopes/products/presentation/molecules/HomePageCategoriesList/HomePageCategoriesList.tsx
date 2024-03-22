import React, { FC } from 'react'
import { Box, List, ListItem } from '@commons/styledComponents/basics'
import { theme } from '@styles/theme'

import { ListItemProps, useSelection } from '@hooks'

interface IHomeCategoriesList {
  productCategories: ListItemProps[]
  onSelect: (params: ListItemProps[]) => void
  value: ListItemProps[]
}

export const HomePageCategoriesList: FC<IHomeCategoriesList> = ({
  productCategories,
  onSelect,
  value,
}) => {
  const { handleSelection, checkSelected } = useSelection({
    isMultiSelect: false,
    canDeselectInSingleSelect: false,
    values: value,
    onSelect: onSelect,
  })
  return (
    <Box background={theme.colors.white}>
      <List>
        {productCategories.map((item) => (
          <ListItem
            fontSize={theme.sizes.heading6}
            key={item.label}
            color="#000"
            background={
              checkSelected(item.value) ? theme.colors.baseColor.blue : ''
            }
            borderRadius={checkSelected(item.value) ? '6px' : ''}
            hoverBg={theme.colors.orange300}
            padding="1.1rem 1rem 1rem 1rem"
            onClick={() => handleSelection(item)}
          >
            {item.label}
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
