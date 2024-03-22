import {
  Box,
  Text,
  List,
  ListItem,
  RouterLink,
} from '@commons/styledComponents/basics'

interface FooterLinksProps {
  title: string
  items: { label: string; url: string }[]
}

export const FooterLinks = ({ title, items }: FooterLinksProps) => {
  return (
    <Box display="flex" flexDirection="column" gap="0.5rem">
      <Text.Span fontSize="2rem">{title}</Text.Span>
      <List fontSize="1.5rem">
        {items.map((item, key) => (
          <ListItem padding="1rem 0" key={key}>
            <RouterLink to={item.url}>{item.label}</RouterLink>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
