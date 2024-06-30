import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as StateProvider } from 'jotai'
import App from './App'
import './i18n'
import './styles/global.css'
import store from '@/state'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StateProvider store={store}>
      <App />
    </StateProvider>
  </React.StrictMode>,
)
