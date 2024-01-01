import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import ErrorBoundary from '@commons/components/ErrorBoundary'
import { store } from '../scopes/core/store'

interface AppProvidersProps {
  children: ReactNode
}

const AppProviders = ({ children }: AppProvidersProps) => (
  <Provider store={store}>
    <ChakraProvider>
      <ErrorBoundary>{children}</ErrorBoundary>
    </ChakraProvider>
  </Provider>
)
export default AppProviders
