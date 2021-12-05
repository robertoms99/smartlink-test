import AuthenticationRepository from '../../infrastructure/repository/authentication.repository'
import { CREDENTIALS } from '../../infrastructure/settings/config'

export default class AuthenticationService {
  constructor(readonly authRepository: AuthenticationRepository) {}
  async refreshToken(credentials: typeof CREDENTIALS) {
    const token = await this.authRepository.getToken(credentials)
    return token
  }
}
