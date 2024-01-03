import { useEffect } from 'react'
import './style.css'
import { RouterProvider } from 'react-router-dom'
import AppProviders from '@providers/AppProviders'

import { logRocket } from '@utils/logRocket'
import { routes } from '@routes/routes'

const App = () => {
  useEffect(() => {
    logRocket()
  }, [])

  return (
    <AppProviders>
      <RouterProvider router={routes} />
    </AppProviders>
  )
}
export default App
