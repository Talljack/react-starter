import { Outlet } from '@tanstack/react-router'
import React from 'react'
import Theme from '@/components/Theme'

const Root: React.FC = () => {
  return (
    <div style={{ height: '100vh' }} className="relative">
      <div
        className="header flex items-center justify-between h-14 sticky top-0 bg-white border-b
      border-b-slate-300 dark:border-b-slate-800 shadow-md z-1 dark:bg-zinc-500 text-black dark:text-white"
      >
        My Template
        <Theme />
      </div>
      <div
        className="h-full w-full items-center absolute bg-white dark:bg-zinc-600"
        style={{
          height: 'calc(100vh - 3.5rem)',
        }}
      >
        <Outlet />
      </div>
    </div>
  )
}

export default Root
