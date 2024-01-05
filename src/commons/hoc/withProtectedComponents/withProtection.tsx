import { FC, ReactElement, useEffect } from 'react'
import { useUser } from '@hooks/useUser'
import { useNavigate } from 'react-router-dom'

interface WithProtectionProps {}

export const withProtection = <T extends WithProtectionProps>(
  Component: FC<T>
) => {
  const ProtectedComponent = (props: T): ReactElement => {
    const { isLoggedIn } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
      if (!isLoggedIn) {
        navigate('/')
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn])
    return <Component {...props} />
  }
  return ProtectedComponent
}
