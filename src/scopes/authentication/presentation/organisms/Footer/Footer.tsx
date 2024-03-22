import { Box, Text } from '@commons/styledComponents/basics'
import { FooterLinks } from '../../molecules/FooterLinks/FooterLinks'

export const Footer = () => {
  return (
    <Box display="flex" width="100%" padding="3rem 8rem">
      <Text.H2 flex="1">Vault Nija</Text.H2>
      <Box
        display="flex"
        flex="1"
        justifyContent="space-between"
        alignItems="center"
      >
        <FooterLinks
          title="SERVICE"
          items={[
            { url: '/', label: 'Products' },
            { url: '/', label: 'Contact Us' },
          ]}
        />
        <FooterLinks
          title="SUPPORT"
          items={[
            { url: '/', label: 'About fashionholic.com' },
            { url: '/', label: 'Privacy policy & terms' },
          ]}
        />

        <FooterLinks
          title="SUPPORT"
          items={[
            { url: '/', label: 'FOLLOW US ON' },
            { url: '/', label: 'Facebook' },
          ]}
        />
      </Box>
    </Box>
  )
}
