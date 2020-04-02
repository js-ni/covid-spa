import React from 'react'
import BaseErrorBoundary from 'react-error-boundary'

function EmptyFallbackComponent() {
  return null
}

export default function ErrorBoundary({
  children,
  FallbackComponent = EmptyFallbackComponent,
}) {
  return (
    <BaseErrorBoundary
      children={children}
      FallbackComponent={FallbackComponent}
      onError={(error) => {
        console.log(error)
      }}
    />
  )
}
