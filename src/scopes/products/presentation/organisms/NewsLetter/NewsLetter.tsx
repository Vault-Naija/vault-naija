import React, { useState } from 'react'
import Button from '@commons/components/atoms/Button'
import { TextInput } from '@commons/components/atoms/Input/Input'
import { Box, Form, Text } from '@commons/styledComponents/basics'
import { Span } from '@commons/styledComponents/basics/Text/Span'
import { theme } from '@styles/theme'
import { EmailIcon } from '@assets/svg-icons/email-icon'

const NewsLetter = () => {
  const [onBorderFocus, setOnFocusBorder] = useState<string>('')
  const [data, setData] = useState({})
  console.log('data', data)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    // setData({ ...data, [name]: value })
    setData((prevData) => ({ ...prevData, [name]: value }))
  }

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(data)
    setData({})
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="4rem 3rem "
      background={theme.colors.gray200}
    >
      <Text.H4
        fontSize={theme.sizes.heading4}
        fontWeight={theme.fontWeight.bold}
        color={theme.colors.dark}
      >
        Subscribe on our newsletter
      </Text.H4>
      <Span
        fontSize={theme.sizes.bodyDefault}
        fontWeight={theme.fontWeight.regular}
        color={theme.colors.gray800}
      >
        Get daily news on upcoming offers from many suppliers all over the world
      </Span>
      <Form
        onSubmit={onSubmit}
        display="flex"
        placeContent="center"
        width="100%"
        gap="1rem"
        padding="2rem 0 0 0"
      >
        <Box
          display="flex"
          width="25%"
          alignItems="center"
          background={theme.colors.white}
          border={`1px solid ${
            onBorderFocus ? theme.colors.primary : theme.colors.gray300
          }`}
          borderRadius="5px"
          borderColor="yellow"
          padding="0.1rem 1rem"
          onFocus={() => setOnFocusBorder(theme.colors.primary)}
          onBlur={() => setOnFocusBorder('')}
        >
          <EmailIcon />
          <TextInput
            border="none"
            outline="none"
            type="email"
            name="email"
            value={data?.email || ''}
            placeholder="Email"
            fontSize={theme.sizes.bodyDefault}
            color={theme.colors.gray500}
            onChange={(e) => handleChange(e)}
          />
        </Box>
        <Button
          label="Subscribe"
          size="small"
          fontSize={theme.sizes.bodyDefault}
          color={theme.colors.white}
          backgroundColor={theme.colors.primary}
          type="submit"
        />
      </Form>
    </Box>
  )
}

export default NewsLetter
