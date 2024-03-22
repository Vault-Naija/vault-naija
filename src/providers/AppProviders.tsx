import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import ErrorBoundary from '@commons/components/templates/ErrorBoundary'
import { store } from '../scopes/core/store'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@styles/Global'
import { theme } from '@styles/theme'

interface AppProvidersProps {
  children: ReactNode
}

const AppProviders = ({ children }: AppProvidersProps) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ErrorBoundary>{children}</ErrorBoundary>
    </ThemeProvider>
  </Provider>
)
export default AppProviders
