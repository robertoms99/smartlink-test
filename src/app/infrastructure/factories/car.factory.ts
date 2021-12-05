import CarService from '../../domain/services/car.service'
import CarRepository from '../repository/car.repository'

const createCarService = () => {
  const carRepository = new CarRepository()
  return new CarService(carRepository)
}

export { createCarService }
