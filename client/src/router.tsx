import { createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router'
import DynamicPremiumLanding from './pages/LandingPage'
import SignupPage from './pages/SignupPage'
import SigninPage from './pages/SigninPage'


// Root Route
const rootRoute = createRootRoute({
  component: () => <Outlet />,
})

// Landing Page Route
const landingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: DynamicPremiumLanding,
})

// Auth Routes (Placeholders for now)
const signInRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/signin',
  component: SigninPage,
})

const signUpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/signup',
  component: SignupPage,
})

const routeTree = rootRoute.addChildren([landingRoute, signInRoute, signUpRoute])

export const router = createRouter({ routeTree })