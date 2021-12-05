import { httpClient } from '../lib/http-client'
import { REST_API_URL } from '../settings/config'

export default class LocationRepository {
  async getAllLocations(token: string) {
    const headers = new Headers()
    headers.set('Authorization', `Bearer ${token}`)
    const response = await httpClient.get(REST_API_URL.SEARCH_LOCATIONS, headers)
    return response.data
  }
}
