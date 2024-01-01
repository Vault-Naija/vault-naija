import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import ErrorBoundary from '@commons/components/ErrorBoundary'
import { store } from '../scopes/core/store'

interface AppProvidersProps {
  children: ReactNode
}

const AppProviders = ({ children }: AppProvidersProps) => (
  <Provider store={store}>
    <ErrorBoundary>{children}</ErrorBoundary>
  </Provider>
)
export default AppProviders
