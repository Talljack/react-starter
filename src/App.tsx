import type { FC } from 'react'
import { RouterProvider } from '@tanstack/react-router'
import { DevTools } from 'jotai-devtools'
import { router } from './router'

const isEnv = process.env.NODE_ENV === 'development'

// App 组件
const App: FC = () => {
  return (
    <>
      {isEnv && <DevTools />}
      <RouterProvider router={router} />
    </>
  )
}

export default App
