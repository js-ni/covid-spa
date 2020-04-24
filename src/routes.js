import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import ErrorBoundary from 'components/ErrorBoundary'
import ViewError from 'components/ViewError'

import Root from 'pages/Root'

const Home = lazy(() => import(`pages/Home`))
const SignIn = lazy(() => import(`pages/SignIn`))
const SignUp = lazy(() => import(`pages/SignUp`))

export default function AppRoutes() {
  return (
    <ErrorBoundary FallbackComponent={ViewError}>
      <Suspense fallback={null}>
        <Router>
          <Routes>
            <Route element={<Root />} path="/*">
              <Route element={<Home />} path="/" />
              <Route element={<SignIn />} path="/login" />
              <Route element={<SignUp />} path="signup" />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </ErrorBoundary>
  )
}
