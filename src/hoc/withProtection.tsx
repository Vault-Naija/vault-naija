import React, { FC, ReactNode, useEffect } from 'react'
import { useUser } from '@hooks/useUser'
import { useNavigate } from 'react-router-dom'

export const withProtection = (Component: FC<any>) => {
  const ProtectedComponent = (props: any): ReactNode => {
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
