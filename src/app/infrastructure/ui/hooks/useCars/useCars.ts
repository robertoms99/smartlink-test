import { useEffect, useState } from 'react'
import { createCarService } from '../../../factories/car.factory'
import { createLocationService } from '../../../factories/location.factory'
import ICar from '../../../interfaces/car.interface'
import { getDateFromParam } from '../../../lib/util'
import { useAuthentication } from '../../common/contexts/AuthenticationContext/AuthenticationContext'

interface ISearchParams {
  originCityCode: string
  destinationCityCode: string
  pickUpDate: string
  dropOffDate: string
}

const useCars = ({
  originCityCode,
  destinationCityCode,
  pickUpDate,
  dropOffDate
}: ISearchParams) => {
  const [locations, setLocations] = useState<null | any[]>(null)
  const [cars, setCars] = useState<null | string | ICar[]>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [destination, setDestination] = useState('')
  const { token } = useAuthentication()

  useEffect(() => {
    ;(async () => {
      const locationService = createLocationService()
      try {
        const locations = await locationService.getAllLocations(token)
        setLocations(locations)
      } catch (error: any) {
        setCars(error.error.message)
      }
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

        try {
          const cars = await carService.searchCars(searchData, token)
          setCars(cars)
        } catch (err: any) {
          setCars(err.error.message)
        }
      })().finally(() => {
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
