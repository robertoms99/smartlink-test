/* eslint-disable react/prop-types */
import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { ErrorBoundary } from './common/components'
import { AuthenticationContextProvider } from './common/contexts/AuthenticationContext/AuthenticationContext'
import { MainLayout } from './common/layouts'
import { Fallback } from './common/pages'
import GlobalStyles from './common/styles'

const HomePage = lazy(async () => await import('./common/pages/Home'))

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ErrorBoundary>
        <AuthenticationContextProvider>
          <MainLayout>
            <Suspense fallback={<div>loading...</div>}>
              <Switch>
                <Route
                  element={<HomePage />}
                  path="/challenge/:originCityCode/:destinationCityCode/:pickUpDate/:dropOffDate"
                />
                <Route path="*" element={<Fallback />} />
              </Switch>
            </Suspense>
          </MainLayout>
        </AuthenticationContextProvider>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
