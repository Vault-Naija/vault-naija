import { Images } from '@assets'
import { Box, Text } from '@commons/styledComponents/basics'
import { List, ListItem } from '@commons/styledComponents/basics/List'
import { ListItemProps, useOutsideClickListener, useSelection } from '@hooks'
import { theme } from '@styles/theme'
import { useRef, useState } from 'react'

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
  const dropdownRef = useRef<HTMLDivElement>(null)

  useOutsideClickListener({
    callBack: () => setIsOpen(false),
    isOpen,
    containerRef: dropdownRef,
  })

  return (
    <Box position="relative" ref={dropdownRef}>
      <Box
        padding=".9rem 1.6rem"
        border={`1px solid ${theme.colors.gray300}`}
        borderRadius=".6rem"
        background={theme.colors.white}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        cursor="pointer"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <Text.Span fontSize="1.6rem" color={theme.colors.dark}>
          {selectedItems[0]?.label ?? 'Select'}
        </Text.Span>
        <Images.icons.ArrowDown />
      </Box>
      {isOpen && (
        <List
          position="absolute"
          bottom="-7.8rem"
          right="0"
          left="0"
          background={theme.colors.white}
          borderRadius=".6rem"
          boxShadow="0px 4px 10px 0px rgba(96, 96, 96, 0.20);"
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
              color={
                checkSelected(item.value)
                  ? theme.colors.primary
                  : theme.colors.dark
              }
            >
              {item.label}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  )
}

export default SelectInput
