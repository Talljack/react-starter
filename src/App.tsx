import type { FC } from 'react'
import { RouterProvider } from '@tanstack/react-router'
import { DevTools } from 'jotai-devtools'
import { router } from './router'

// App 组件
const App: FC = () => {
  return (
    <>
      <DevTools />
      <RouterProvider router={router} />
    </>
  )
}

export default App
