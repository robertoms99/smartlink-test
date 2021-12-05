import React, { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useCars } from '../../../hooks'
import { CarList, Loader } from '../../components'
import CarItemStyles from '../../components/CarList/components/CarItem/CarItem.styles'
import { Heading, Root, BrandLogo } from './Home.styles'

const Home = () => {
  const { originCityCode, destinationCityCode, pickUpDate, dropOffDate } = useParams()
  const { isLoading, cars, destination } = useCars({
    originCityCode: originCityCode ?? '',
    destinationCityCode: destinationCityCode ?? '',
    pickUpDate: pickUpDate ?? '',
    dropOffDate: dropOffDate ?? ''
  })

  const retry = useCallback(() => {
    window.location.reload()
  }, [])

  const isError = !isLoading && !Array.isArray(cars)

  return (
    <Root $loading={isLoading} $error={isError}>
      {isLoading ? (
        <Loader>Espere mientras cargan los datos solicitados</Loader>
      ) : isError ? (
        <>
          <h1>{cars === null ? 'OCURRIO UN ERROR EN LA CONSULTA' : cars}</h1>
          <CarItemStyles.ButtonCTA onClick={retry}>Reintentar</CarItemStyles.ButtonCTA>
        </>
      ) : (
        <>
          <Heading>
            <h1> Hola Roberto,</h1>
            <span>Ahorra hasta un 30% agregando un auto en tu viaje a {destination}</span>
          </Heading>
          {Array.isArray(cars) && <CarList cars={cars} />}
          <BrandLogo>
            <span>Powered by</span>
            <img src="https://res.cloudinary.com/ultragroup/image/upload/c_limit,h_100,w_200/utr8aiyycdl7iv9ahpjl" />
          </BrandLogo>
        </>
      )}
    </Root>
  )
}

export default Home
