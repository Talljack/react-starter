import { ReactRouter, RootRoute, Route, createBrowserHistory } from '@tanstack/react-router';
import Root from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
const rootRoute = new RootRoute({
  component: Root,
});
const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  component: Home,
  path: '/home',
});
// About page
const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  component: About,
  path: '/about',
});

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);
// history: 'browser' | 'memory' | 'hash'
const browserHistory = createBrowserHistory();
const router = new ReactRouter({ routeTree, history: browserHistory });
// Register your router for maximum type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export { router };
