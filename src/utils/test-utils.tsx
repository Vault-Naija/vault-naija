import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import AppProviders from '@providers/AppProviders'

const customRender = (component: ReactElement, options?: RenderOptions) => {
  render(component, {
    wrapper: AppProviders,
    ...options,
  })
}
export * from '@testing-library/react'
export { customRender }
