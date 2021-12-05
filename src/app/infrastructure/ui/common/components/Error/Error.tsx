/* eslint-disable react/prop-types */
import React from 'react'

const ErrorBoundary = class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {
      isError: false
    }
  }

  static getDerivedStateFromError() {
    return {
      isError: true
    }
  }

  render() {
    const { isError } = this.state as { isError: boolean }
    return (
      <>
        {' '}
        {isError ? (
          <h1>OCURRIO UN ERROR EN LA APLICACION, RECARGUE</h1>
        ) : (
          (this.props as any).children
        )}
      </>
    )
  }
}

export default ErrorBoundary
