import { Images } from '@assets'
import { SearchInput } from '@commons/components/molecules/SearchInput/SearchInput'
import SelectInput from '@commons/components/molecules/SelectInput/SelectInput'
import { Box, Text } from '@commons/styledComponents/basics'
import { theme } from '@styles/theme'

export const Header = () => {
  return (
    <Box
      display="grid"
      alignItems="center"
      justifyContent="space-between"
      padding="2.5rem 8rem"
      gridTemplateColumns="0.2fr 1fr 0.6fr"
      gridColumnGap="10%"
    >
      <Text.H2 color={theme.colors.primary}>Vault Naija</Text.H2>
      <Box>
        <SearchInput placeholder="Search here" />
      </Box>
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box width="15rem">
          <SelectInput
            items={[
              { label: 'English', value: 'english' },
              { label: 'Spanish', value: 'spanish' },
            ]}
            values={[{ label: 'English', value: 'english' }]}
            onSelect={() => {}}
          />
        </Box>
        <Box margin="0 2rem ">
          <Images.icons.Alert />
        </Box>
        <Box>
          <Images.icons.UserProfile />
        </Box>
      </Box>
    </Box>
  )
}
