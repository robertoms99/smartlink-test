import { useContext, useEffect, useState } from 'react'
import { createCarService } from '../../../factories/car.factory'
import { createLocationService } from '../../../factories/location.factory'
import { AuthenticationContext } from '../../common/contexts'

const getDateFromParam = (dateParam: string) => {
  const arrayString = []
  let index = 0
  const CHUNK_LENGTH = 2
  const MAX_LENGTH_DATE = 3

  while (true) {
    arrayString.push(dateParam.substr(index, CHUNK_LENGTH))
    index += CHUNK_LENGTH
    if (arrayString.length === MAX_LENGTH_DATE) break
  }

  arrayString.reverse()

  return `20${arrayString.join('-')}`
}

const useCars = ({ originCityCode, destinationCityCode, pickUpDate, dropOffDate }: any) => {
  const [locations, setLocations] = useState<null | any[]>(null)
  const [cars, setCars] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [destination, setDestination] = useState('')
  const { token } = useContext(AuthenticationContext)

  useEffect(() => {
    ;(async () => {
      const locationService = createLocationService()
      try {
        const locations = await locationService.getAllLocations(token)
        setLocations(locations)
      } catch (error) {}
    })().catch(console.error)
  }, [])

  useEffect(() => {
    if (locations !== null) {
      ;(async () => {
        const carService = createCarService()
        const locationToSearch = {
          PickUpLocation: null,
          DropOffLocation: null
        }
        for (const location of locations) {
          if (location.cityCode === originCityCode.toUpperCase())
            locationToSearch.PickUpLocation = location
          if (location.cityCode === destinationCityCode.toUpperCase()) {
            locationToSearch.DropOffLocation = location
            setDestination(location.cityName)
          }
          if (locationToSearch.DropOffLocation !== null && locationToSearch.PickUpLocation !== null)
            break
        }
        const searchData = {
          ...locationToSearch,
          PickUpDate: getDateFromParam(pickUpDate),
          PickUpTime: '0930',
          DropOffDate: getDateFromParam(dropOffDate),
          DropOffTime: '0930',
          RateTypeCode: 0,
          CarCategoryType: 0,
          PaymentType: 0,
          corporateDiscount: '0',
          AgencyUrl: 'test.destinojet.co'
        }
        const cars = await carService.searchCars(searchData, token)
        setCars(cars)
      })()
        .catch(console.error)
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [locations])

  return {
    isLoading,
    cars,
    destination
  }
}

export default useCars