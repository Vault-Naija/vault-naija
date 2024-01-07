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
      gridTemplateColumns="0.4fr 1fr 0.6fr"
      gridColumnGap="10%"
    >
      <Text.H2 color={theme.colors.primary}>Naija Vault</Text.H2>
      <Box>
        <SearchInput placeholder="Search here" />
      </Box>
      <Box height="100%">
        <SelectInput
          items={[
            { label: 'English', value: 'english' },
            { label: 'Spanish', value: 'spanish' },
          ]}
          values={[{ label: 'English', value: 'english' }]}
          onSelect={() => {}}
        />
      </Box>
    </Box>
  )
}
