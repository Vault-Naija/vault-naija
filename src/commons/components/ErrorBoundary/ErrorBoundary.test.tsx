import ErrorBoundary from '.'
import { customRender, screen } from '../../../test-utils'
import ProblematicComponent from './ProblematicComponent.mock'

describe('Error boundary', () => {
  test('should render the error boundary message', () => {
    console.error = jest.fn()
    customRender(<ProblematicComponent />, { wrapper: ErrorBoundary })
    const errorTitle = screen.getByText('Whoops, something went wrong')
    expect(errorTitle).toBeInTheDocument()
  })
  test('should have a reload button', () => {
    customRender(<ProblematicComponent />, { wrapper: ErrorBoundary })
    const reloadButton = screen.getByRole('button', { name: 'Try again' })
    expect(reloadButton).toBeInTheDocument()
  })
})
