import { customRender, screen } from '../../../../utils/test-utils'
import ProblematicComponent from './ProblematicComponent.mock'

describe('Error boundary', () => {
  test('should render the error boundary message', () => {
    console.error = jest.fn()
    customRender(<ProblematicComponent />)
    const errorTitle = screen.getByText('Whoops, something went wrong')
    expect(errorTitle).toBeInTheDocument()
  })
  test('should have a reload button', () => {
    customRender(<ProblematicComponent />)
    const reloadButton = screen.getByRole('button', { name: 'Try again' })
    expect(reloadButton).toBeInTheDocument()
  })
})
