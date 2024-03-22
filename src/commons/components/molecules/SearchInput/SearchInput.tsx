import { Images } from '@assets'
import { InputProps, TextInput } from '@commons/components/atoms/Input/Input'
import { Box } from '@commons/styledComponents/basics'
import { theme } from '@styles/theme'
import { css } from 'styled-components'

interface SearchInputProps extends InputProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export const SearchInput = ({ ...props }: SearchInputProps) => {
  const customCss = css`
    & .search-input__close-icon {
      display: none;
    }
    &:focus-within {
      border: 1px solid ${theme.colors.primary};

      & input {
        outline: none;
        border: none;
      }
      & .search-input__close-icon {
        display: block;
      }
    }
  `

  return (
    <Box
      display="flex"
      alignItems="center"
      background="white"
      border={`1px solid ${theme.colors.gray300}`}
      overFlow="hidden"
      width="100%"
      borderRadius=".6rem"
      customCss={customCss}
      padding="0 .9rem 0 0"
    >
      <Box padding="0 .8rem">
        <Images.icons.Search />
      </Box>
      <TextInput border="none" {...props} />
      <Box cursor="pointer" className="search-input__close-icon">
        <Images.icons.Close />
      </Box>
    </Box>
  )
}
