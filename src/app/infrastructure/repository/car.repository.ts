import { httpClient } from '../lib/http-client'
import { REST_API_URL } from '../settings/config'

export default class CarRepository {
  async searchCars(searchData: any, token: string) {
    const response = await httpClient.post(REST_API_URL.SEARCH_CAR, searchData, `Bearer ${token}`)
    return response.data
  }
}
