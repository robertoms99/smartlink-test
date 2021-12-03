import React from 'react'
import { useParams } from 'react-router-dom'
import { CarList } from '../../components'
import { Heading, Root } from './Home.styles'

const Home = () => {
  const { originCityCode, destinationCityCode, pickUpDate, dropOffDate } = useParams()
  console.log({ originCityCode, destinationCityCode, pickUpDate, dropOffDate })

  return (
    <Root>
      <Heading>
        <h1> Hola Pedro,</h1>
        <span>Ahorra hasta un 30% agregando un auto en tu viaje a Miami</span>
      </Heading>
      <CarList cars={[1, 2, 3, 4]} />
    </Root>
  )
}

export default Home
