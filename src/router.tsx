import {
  createBrowserHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import Root from './pages/Root'
import Home from './pages/Home'
import About from './pages/About'

const rootRoute = createRootRoute({
  component: Root,
})
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: Home,
  path: '/',
})
// About page
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: About,
  path: '/about',
})

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute])
// history: 'browser' | 'memory' | 'hash'
const browserHistory = createBrowserHistory()
const router = createRouter({ routeTree, history: browserHistory })
// Register your router for maximum type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
export { router }
