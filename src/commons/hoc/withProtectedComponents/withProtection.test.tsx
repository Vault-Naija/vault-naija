import { customRender } from '../../../utils/test-utils'
import UnprotectedComponent from './UnprotectedComponent.mock'
import { withProtection } from './withProtection'
import { useUser } from '../../../hooks/useUser'
import { MemoryRouter, useNavigate } from 'react-router-dom'

jest.mock('../../../hooks/useUser')
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}))
const mockNavigate = jest.fn()
const mockUseUser = useUser as jest.MockedFunction<typeof useUser>
const mockUseNavigate = useNavigate as jest.MockedFunction<typeof useNavigate>

describe('withProtection', () => {
  test('should render the component if the user is logged in', async () => {
    mockUseUser.mockReturnValue({
      isLoggedIn: true,
      user: 'Emeka',
    })
    mockUseNavigate.mockReturnValue(mockNavigate)
    const ProtectedComponent = withProtection(UnprotectedComponent)
    customRender(<ProtectedComponent />, { wrapper: MemoryRouter }) // MemoryRouter for components that use useNavigate hooks
    expect(mockNavigate).not.toHaveBeenCalled()
  })

  test('should not render component if the user is logged out', () => {
    mockUseUser.mockReturnValue({
      isLoggedIn: false,
      user: 'Emeka',
    })
    mockUseNavigate.mockReturnValue(mockNavigate)
    const ProtectedComponent = withProtection(UnprotectedComponent)
    customRender(<ProtectedComponent />, { wrapper: MemoryRouter })
    expect(mockNavigate).toHaveBeenCalledWith('/')
  })
})
