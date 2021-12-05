import React, { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useCars } from '../../../hooks'
import { CarList, Loader } from '../../components'
import CarItemStyles from '../../components/CarList/components/CarItem/CarItem.styles'
import { Heading, Root } from './Home.styles'

const Home = () => {
  const { originCityCode, destinationCityCode, pickUpDate, dropOffDate } = useParams()
  const { isLoading, cars, destination } = useCars({
    originCityCode,
    destinationCityCode,
    pickUpDate,
    dropOffDate
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
            <h1> Hola Pedro,</h1>
            <span>Ahorra hasta un 30% agregando un auto en tu viaje a {destination}</span>
          </Heading>
          {cars !== null && <CarList cars={cars} />}
        </>
      )}
    </Root>
  )
}

export default Home
