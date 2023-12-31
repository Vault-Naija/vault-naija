import { screen, render } from '@testing-library/react'
import Counter from '@commons/Counter/Counter'

describe('Counter', () => {
  it('should render the counter', () => {
    render(<Counter />)
    const displayElement = screen.getByText('0')
    expect(displayElement).toBeInTheDocument()
  })
})
