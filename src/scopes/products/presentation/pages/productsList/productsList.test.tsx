import ProductsList from '.'
import { customRender, screen } from '../../../../../utils/test-utils'
import user from '@testing-library/user-event'

describe('Products List', () => {
  test('should render products list component', () => {
    customRender(<ProductsList />)
    const displayValue = screen.getByTestId('counter')
    expect(displayValue).toHaveTextContent('0')
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    expect(incrementButton).toBeInTheDocument()
    const decrementButton = screen.getByRole('button', { name: 'Decrement' })
    expect(decrementButton).toBeInTheDocument()
  })
  test('It should increment value when the increment button is pressed', async () => {
    customRender(<ProductsList />)
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    await user.click(incrementButton)
    const displayValue = screen.getByTestId('counter')
    expect(displayValue).toHaveTextContent('1')
  })
  test('It should increment value when the decrement button is pressed', async () => {
    customRender(<ProductsList />)
    const decrementButton = screen.getByRole('button', { name: 'Decrement' })
    await user.click(decrementButton)
    const displayValue = screen.getByTestId('counter')
    expect(displayValue).toHaveTextContent('0')
  })
})
