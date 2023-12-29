import { screen, render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('should render the app component', () => {
    render(<App />)
    const titleElement = screen.getByRole('heading', {
      name: 'Hello world!!nkjfd',
    })
    expect(titleElement).toBeInTheDocument()
    const logoElement = screen.getByAltText('logo')
    expect(logoElement).toBeInTheDocument()
    const svgLogo = screen.getByAltText('logosvg')
    expect(svgLogo).toBeInTheDocument()
  })
})
