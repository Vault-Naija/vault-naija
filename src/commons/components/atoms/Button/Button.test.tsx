import { customRender, screen } from '../../../../utils/test-utils'
import Button from '.'

describe('Button', () => {
  test('Button element renders with default value', () => {
    customRender(<Button label="Login" size="normal" />)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent('Login')
    expect(buttonElement).toHaveStyle({
      color: 'white',
      backgroundColor: 'blue',
      fontSize: '1.6rem',
      padding: '16px 16px 16px 16px',
    })
  })

  describe('Button Sizes', () => {
    test('Button element is disabled', () => {
      customRender(<Button label="Login" size="normal" isDisabled />)
      const buttonElement = screen.getByRole('button')
      expect(buttonElement).toBeDisabled()
    })

    test('Button behavior style for small ', () => {
      customRender(<Button label="Logout" size="small" />)
      const buttonElement = screen.getByRole('button')
      expect(buttonElement).toHaveStyle({
        fontSize: '1.3rem',
        padding: '10px 10px 10px 10px',
      })
    })

    test('Button behavior style for large ', () => {
      customRender(<Button label="Logout" size="large" />)
      const buttonElement = screen.getByRole('button')
      expect(buttonElement).toHaveStyle({
        fontSize: '1.8rem',
        padding: '20px 20px 20px 20px',
      })
    })
  })

  describe('Button variant', () => {
    test('testing Button primary variant', () => {
      customRender(<Button label="Checkout" size="large" variant="primary" />)
      const buttonElement = screen.getByRole('button')

      expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' })
    })

    test('testing Button secondary variant', () => {
      customRender(<Button label="Checkout" size="large" variant="secondary" />)
      const buttonElement = screen.getByRole('button')

      expect(buttonElement).toHaveStyle({ backgroundColor: 'pink' })
    })

    test('testing Button tertiary variant', () => {
      customRender(<Button label="Checkout" size="large" variant="tertiary" />)
      const buttonElement = screen.getByRole('button')

      expect(buttonElement).toHaveStyle({ backgroundColor: 'gray' })
    })

    test('testing Button success variant', () => {
      customRender(<Button label="Checkout" size="large" variant="success" />)
      const buttonElement = screen.getByRole('button')

      expect(buttonElement).toHaveStyle({ backgroundColor: 'green' })
    })

    test('testing Button danger variant', () => {
      customRender(<Button label="Checkout" size="large" variant="danger" />)
      const buttonElement = screen.getByRole('button')

      expect(buttonElement).toHaveStyle({ backgroundColor: 'red' })
    })
  })
})
