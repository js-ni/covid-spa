import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import ErrorBoundary from 'components/ErrorBoundary'
import ViewError from 'components/ViewError'

const Home = lazy(() => import(`pages/Home`))
const SignUp = lazy(() => import(`pages/SignUp`))

export default function AppRoutes() {
  return (
    <ErrorBoundary FallbackComponent={ViewError}>
      <Suspense fallback={null}>
        <Router>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<SignUp />} path="signup" />
          </Routes>
        </Router>
      </Suspense>
    </ErrorBoundary>
  )
}
