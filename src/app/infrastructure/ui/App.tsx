import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { AuthenticationContextProvider } from './common/contexts/AuthenticationContext/AuthenticationContext'
import { MainLayout } from './common/layouts'
import GlobalStyles from './common/styles'

const HomePage = lazy(async () => await import('./common/pages/Home'))

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AuthenticationContextProvider>
        <MainLayout>
          <Suspense fallback={<div>loading</div>}>
            <Switch>
              <Route
                element={<HomePage />}
                path="/challenge/:originCityCode/:destinationCityCode/:pickUpDate/:dropOffDate"
              />
            </Switch>
          </Suspense>
        </MainLayout>
      </AuthenticationContextProvider>
    </BrowserRouter>
  )
}

export default App
