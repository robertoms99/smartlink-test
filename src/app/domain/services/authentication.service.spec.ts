import { CREDENTIALS } from '../../infrastructure/settings/config'
import AuthenticationService from './authentication.service'

const TEST_TOKEN = 'TOKEN_PRUEBA'

const authRepositoryMock = {
  getToken: jest.fn().mockResolvedValue(TEST_TOKEN).getMockImplementation()
}

describe('prueba de authentication service', () => {
  let authService!: AuthenticationService

  beforeEach(() => {
    authService = new AuthenticationService(authRepositoryMock as any)
  })

  it('prueba obtencion token', (done) => {
    authService
      .refreshToken(CREDENTIALS)
      .then((token) => {
        expect(token).toBe(TEST_TOKEN)
        done()
      })
      .catch(console.error)
  })
})
