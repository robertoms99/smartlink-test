import CarRepository from '../../infrastructure/repository/car.repository'

export default class CarService {
  constructor(readonly carRepository: CarRepository) {}
  async searchCars(searchData: any, token: string) {
    return await this.carRepository.searchCars(searchData, token)
  }
}
