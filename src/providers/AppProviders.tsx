import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../scopes/core/store'

interface AppProvidersProps {
  children: ReactNode
}

const AppProviders = ({ children }: AppProvidersProps) => (
  <Provider store={store}>{children}</Provider>
)
export default AppProviders
