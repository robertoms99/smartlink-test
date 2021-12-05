import LocationService from '../../domain/services/location.service'
import LocationRepository from '../repository/location.repository'

const createLocationService = () => {
  const locationRepository = new LocationRepository()
  return new LocationService(locationRepository)
}

export { createLocationService }
