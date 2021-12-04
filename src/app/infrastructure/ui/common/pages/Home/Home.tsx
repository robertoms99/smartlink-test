import React from 'react'
import { useParams } from 'react-router-dom'
import { useCars } from '../../../hooks'
import { CarList } from '../../components'
import { Heading, Root } from './Home.styles'

const Home = () => {
  const { originCityCode, destinationCityCode, pickUpDate, dropOffDate } = useParams()
  const { isLoading, cars, destination } = useCars({
    originCityCode,
    destinationCityCode,
    pickUpDate,
    dropOffDate
  })

  return (
    <Root>
      <Heading>
        <h1> Hola Pedro,</h1>
        <span>Ahorra hasta un 30% agregando un auto en tu viaje a {destination}</span>
      </Heading>
      {!isLoading && cars !== null && <CarList cars={cars} />}
    </Root>
  )
}

export default Home
