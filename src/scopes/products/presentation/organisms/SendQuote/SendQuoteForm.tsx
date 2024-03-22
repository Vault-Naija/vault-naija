import React from 'react'
import { Box, Text } from '@commons/styledComponents/basics'
import { TextInput } from '@commons/components/atoms/Input/Input'
import { TextArea } from '@commons/components/atoms/Input/TextArea'
import Button from '@commons/components/atoms/Button'
import { theme } from '@styles/theme'
import SelectInput from '@commons/components/molecules/SelectInput/SelectInput'

const SendQuoteForm = () => {
  const items = [
    { label: 'Pcs', value: 'Pcs' },
    { label: 'Watch', value: 'Watch' },
  ]

  const values = [
    { label: 'Pcs', value: 'Pcs' },
    { label: 'Watch', value: 'Watch' },
  ]
  return (
    <Box
      background={theme.colors.white}
      borderRadius="6px"
      padding="2rem"
      display="flex"
      flexDirection="column"
      gap="1.5rem"
      flex="1"
    >
      <Text.H4
        fontWeight={theme.fontWeight.bold}
        fontSize={theme.sizes.heading4}
      >
        Send quote to suppliers
      </Text.H4>
      <TextInput
        placeholder="What item you need?"
        border={`1px solid ${theme.colors.gray300}`}
        borderRadius="5px"
      />
      <TextArea
        placeholder="Type more details"
        resize="none"
        height="73px"
        border={`1px solid ${theme.colors.gray300}`}
        borderRadius="5px"
      />
      <Box display="flex" gap="3rem">
        <TextInput
          placeholder="Quantity"
          border={`1px solid ${theme.colors.gray300}`}
          borderRadius="5px"
          width="60%"
        />
        <SelectInput
          items={items}
          values={values}
          onSelect={() => {}}
          width="25%"
        />
      </Box>
      <Button
        label="Send inquiry"
        size="small"
        backgroundColor={theme.colors.primary}
        color={theme.colors.white}
        width="fit-content"
      />
    </Box>
  )
}

export default SendQuoteForm
