import React from 'react'
import { Heading, Root, Message, PathLink } from './Fallback.styles'

const Fallback = () => {
  return (
    <Root>
      <Heading>OOPS</Heading>
      <Message>
        Para realizar la consulta de recomendaciones debe acceder a la ruta
        /challenge/:originCityCode/:destinationCityCode/:pickUpDate/:dropOffDate. <br />
        Ingresa a un ejemplo <PathLink to="/challenge/mia/mia/010122/030122">aquí</PathLink>
      </Message>
    </Root>
  )
}

export default Fallback
