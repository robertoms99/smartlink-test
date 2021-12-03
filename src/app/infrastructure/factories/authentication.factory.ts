import AuthenticationService from '../../domain/services/authentication.service'
import AuthenticationRepository from '../repository/authentication.repository'

const createAuthService = () => {
  const authRepository = new AuthenticationRepository()
  const authService = new AuthenticationService(authRepository)
  return authService
}

export { createAuthService }
