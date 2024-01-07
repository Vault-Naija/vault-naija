import { Box, Text } from '@commons/styledComponents/basics'
import {
  List,
  ListItem,
  RouterLink,
} from '@commons/styledComponents/basics/List'

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
        <Box display="flex" flexDirection="column" gap="0.5rem">
          <Text.Span fontSize="2rem">SERVICE</Text.Span>
          <List fontSize="1.5rem">
            <ListItem padding="1rem 0">
              <RouterLink to={'/'}>Products</RouterLink>
            </ListItem>
            <ListItem>
              <RouterLink to={'/'}>Contact Us</RouterLink>
            </ListItem>
          </List>
        </Box>

        <Box display="flex" flexDirection="column" gap="0.5rem">
          <Text.Span fontSize="2rem">SUPPORT</Text.Span>
          <List fontSize="1.5rem">
            <ListItem padding="1rem 0">
              <RouterLink to={'/'}>About fashionholic.com</RouterLink>
            </ListItem>
            <ListItem>
              <RouterLink to={'/'}>Privacy policy & terms</RouterLink>
            </ListItem>
          </List>
        </Box>

        <Box display="flex" flexDirection="column" gap="0.5rem">
          <Text.Span fontSize="2rem">FOLLOW US ON</Text.Span>
          <List fontSize="1.5rem">
            <ListItem padding="1rem 0">
              <RouterLink to={'/'}>Instagram</RouterLink>
            </ListItem>
            <ListItem>
              <RouterLink to={'/'}>Facebook</RouterLink>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  )
}
