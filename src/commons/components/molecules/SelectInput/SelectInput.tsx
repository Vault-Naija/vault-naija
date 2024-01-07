import { Images } from '@assets'
import { Box, Text } from '@commons/styledComponents/basics'
import { List, ListItem } from '@commons/styledComponents/basics/List'
import { ListItemProps, useOutsideClickListener, useSelection } from '@hooks'
import { theme } from '@styles/theme'
import { useEffect, useRef, useState } from 'react'

interface SelectInputProps {
  items: ListItemProps[]
  values: ListItemProps[]
  onSelect: (selectedItems: ListItemProps[]) => void
}

const SelectInput = ({ items, values, onSelect }: SelectInputProps) => {
  const { handleSelection, checkSelected, selectedItems } = useSelection({
    isMultiSelect: false,
    canDeselectInSingleSelect: false,
    values,
    onSelect: (selectedItems) => onSelect(selectedItems),
  })
  const [isOpen, setIsOpen] = useState(false)
  const dropdownContainerRef = useRef<HTMLDivElement>(null)

  const [isFocused, setIsFocused] = useState(false)

  useOutsideClickListener({
    callBack: () => {
      setIsOpen(false)
      setIsFocused(false)
    },
    isOpen: isOpen,
    containerRef: dropdownContainerRef,
  })

  useEffect(() => {
    if (isOpen) setIsFocused(true)
  }, [isOpen])

  return (
    <Box position="relative" ref={dropdownContainerRef}>
      <Box
        padding=".9rem 1.6rem"
        border={`1px solid ${
          isFocused ? theme.colors.primary : theme.colors.gray300
        }`}
        borderRadius=".6rem"
        background={theme.colors.white}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        cursor="pointer"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen)
        }}
      >
        <Box display="flex" alignItems="center">
          {selectedItems[0]?.icon && <Box>{selectedItems[0]?.icon}</Box>}

          <Text.Span fontSize="1.6rem" color={theme.colors.dark}>
            {selectedItems[0]?.label ?? 'Select'}
          </Text.Span>
        </Box>
        <Images.icons.ArrowDown />
      </Box>

      <List
        position="absolute"
        bottom="-10rem"
        right="0"
        left="0"
        background={theme.colors.white}
        borderRadius=".6rem"
        boxShadow="0px 4px 10px 0px rgba(96, 96, 96, 0.20);"
        display={isOpen ? 'block' : 'none'}
      >
        {items.map((item, key) => (
          <ListItem
            onClick={() => {
              handleSelection(item)
              setIsOpen((isOpen) => !isOpen)
            }}
            key={key}
            hoverBg={theme.colors.select.hovered}
            fontSize="1.6rem"
            padding=".9rem 1.6rem"
            cursor="pointer"
            zIndex="1"
            color={
              checkSelected(item.value)
                ? theme.colors.primary
                : theme.colors.dark
            }
            display="flex"
            alignItems="center"
          >
            <Box>{item.icon}</Box>
            {item.label}
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default SelectInput
