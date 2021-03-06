import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { createAuthService } from '../../../../factories/authentication.factory'
import { CREDENTIALS } from '../../../../settings/config'

const AuthenticationContext = createContext({ token: '', refreshToken: () => {} })

const AuthenticationContextProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState('')

  const refreshToken = useCallback(async () => {
    const authService = createAuthService()
    const token = await authService.refreshToken(CREDENTIALS)
    setToken(token)
  }, [])

  useEffect(() => {
    refreshToken().catch(console.error)
  }, [])

  return (
    <AuthenticationContext.Provider value={{ token, refreshToken }}>
      {token !== null && token !== '' ? children : null}
    </AuthenticationContext.Provider>
  )
}

const useAuthentication = () => useContext(AuthenticationContext)

export default AuthenticationContext

export { AuthenticationContext, useAuthentication, AuthenticationContextProvider }
