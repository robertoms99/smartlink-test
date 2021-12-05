import { httpClient } from '../lib/http-client'
import { CREDENTIALS, REST_API_URL } from '../settings/config'

export default class AuthenticationRepository {
  async getToken(credentials: typeof CREDENTIALS) {
    const response = await httpClient.post(REST_API_URL.AUTHENTICATION, credentials)
    return response.data as string
  }
}
