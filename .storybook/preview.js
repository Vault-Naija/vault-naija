import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../src/styles/Global'
import { theme } from '../src/styles/theme'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Center>
          <Story />
        </Center>
      </ThemeProvider>
    ),
  ],
}

export default preview
