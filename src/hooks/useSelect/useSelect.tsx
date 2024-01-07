import { useEffect, useState } from 'react'

export interface ListItemProps {
  value: string
  label: string
  icon?: JSX.Element
}

interface Props {
  isMultiSelect?: boolean
  values?: ListItemProps[]
  canDeselectInSingleSelect?: boolean
  onSelect: (selectedItems: ListItemProps[]) => void
}

export const useSelection = ({
  isMultiSelect = false,
  canDeselectInSingleSelect = true,
  values,
  onSelect,
}: Props) => {
  const [selectedItems, setSelectedItems] = useState<ListItemProps[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  const checkSelected = (value: string): boolean => {
    return selectedKeys.includes(value)
  }

  const handleSelection = (item: ListItemProps) => {
    let selectedItemsCopy = [...selectedItems]
    const isAlreadySelected = checkSelected(item.value)
    if (isAlreadySelected) {
      if (canDeselectInSingleSelect) {
        selectedItemsCopy = selectedItemsCopy.filter(
          (selectedItem) => selectedItem.value !== item.value
        )
      }
    } else {
      if (isMultiSelect) selectedItemsCopy.push(item)
      else selectedItemsCopy = [item]
    }
    setSelectedItems(selectedItemsCopy)
    setSelectedKeys(selectedItemsCopy.map((item) => item.value))
  }

  useEffect(() => {
    onSelect(selectedItems)
  }, [selectedItems])

  useEffect(() => {
    if (values) {
      setSelectedItems(values)
      setSelectedKeys(values.map((item) => item.value))
    }
  }, [])

  return {
    selectedItems,
    selectedKeys,
    handleSelection,
    checkSelected,
  }
}
