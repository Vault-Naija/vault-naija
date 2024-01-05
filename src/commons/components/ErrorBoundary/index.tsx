import { ReactNode } from 'react'
import { ErrorBoundary as Boundary } from 'react-error-boundary'

interface FallbackComponentProps {
  error: Error
  resetErrorBoundary: () => void
}
interface ErrorBoundaryProps {
  children: ReactNode
}
const FallbackComponent = ({
  resetErrorBoundary,
  error,
}: FallbackComponentProps) => {
  return (
    <div
      role="alert"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h1 style={{ color: 'black', margin: 0 }}>
        Whoops, something went wrong
      </h1>
      <p>Brace yourself till we get the error fixed</p>
      <p style={{ margin: 0 }}>
        You may either refresh the page or return to home and try again
      </p>
      <p>{error.message}</p>
      <button
        style={{
          background: '#008080',
          color: 'white',
          border: 'none',
          fontSize: '.8rem',
          padding: '.5rem 1rem',
          borderRadius: '.2rem',
          marginTop: '1rem',
        }}
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  )
}

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  return <Boundary FallbackComponent={FallbackComponent}>{children}</Boundary>
}

export default ErrorBoundary
