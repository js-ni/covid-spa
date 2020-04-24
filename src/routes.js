import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import ErrorBoundary from 'components/ErrorBoundary'
import ViewError from 'components/ViewError'
import SessionForm from 'pages/SignIn'

import Root from 'pages/Root'

const Home = lazy(() => import(`pages/Home`))

export default function AppRoutes() {
  return (
    <ErrorBoundary FallbackComponent={ViewError}>
      <Suspense fallback={null}>
        <Router>
          <Routes>
            <Route element={<Root />} path="/*">
              <Route element={<Home />} path="/" />
              <Route element={<SessionForm />} path="/login" />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </ErrorBoundary>
  )
}
