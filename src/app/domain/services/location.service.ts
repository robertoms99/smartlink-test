import LocationRepository from '../../infrastructure/repository/location.repository'

export default class LocationService {
  constructor(readonly locationRepository: LocationRepository) {}
  async getAllLocations(token: string) {
    return await this.locationRepository.getAllLocations(token)
  }
}
