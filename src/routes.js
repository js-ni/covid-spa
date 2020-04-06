import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import ErrorBoundary from 'components/ErrorBoundary'
import ViewError from 'components/ViewError'
import SessionForm from 'pages/SignIn'

const Home = lazy(() => import(`pages/Home`))

export default function AppRoutes() {
  return (
    <ErrorBoundary FallbackComponent={ViewError}>
      <Suspense fallback={null}>
        <Router>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<SessionForm />} path="/login" />
          </Routes>
        </Router>
      </Suspense>
    </ErrorBoundary>
  )
}
