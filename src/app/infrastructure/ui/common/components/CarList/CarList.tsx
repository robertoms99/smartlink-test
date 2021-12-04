import React from 'react'
import ICarList from './CarList.interface'
import { Root } from './CarList.styles'
import { CarItem } from './components'

const CarList: React.FC<ICarList> = ({ cars }) => {
  return (
    <Root>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            <CarItem car={car} />
          </li>
        ))}
      </ul>
    </Root>
  )
}

export default CarList
