import { faDoorOpen, faSuitcaseRolling, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import formatPrice from '../../../../../../lib/util'
import {
  CompanyLogo,
  Root,
  CarCategory,
  AditionalInformation,
  CarImage,
  PriceDay,
  CarPriceInformation,
  Discount,
  MainInformation,
  CarModel,
  Indicators,
  IndicatorIcon,
  IndicatorNumber,
  Indicator,
  ButtonCTA,
  TotalPrice,
  ButtonVehicule,
  VehiculeIcon
} from './CarItem.styles'
import ICarItem from './CartItem.interface'
import fabric from 'fabric'

const CarItem: React.FC<ICarItem> = ({ car }) => {
  const test = () => {
    const canvas = new fabric.fabric.Canvas('canvas', {
      width: 200,
      height: 200
    })
    console.log(canvas)
  }

  return (
    <Root>
      <AditionalInformation>
        <CarImage onLoad={test}>
          <img src={car.imageUrl} alt="" />
        </CarImage>
        <Discount>-30%</Discount>
      </AditionalInformation>
      <MainInformation>
        <CompanyLogo>
          <img src={car.companyImageUrl} alt="company name" />
        </CompanyLogo>
        <CarCategory>{car.category}</CarCategory>
        <CarModel>{car.model}</CarModel>
        <Indicators>
          <Indicator>
            <IndicatorIcon icon={faUserAlt} />
            <IndicatorNumber>{car.passengers}</IndicatorNumber>
          </Indicator>
          <Indicator>
            <IndicatorIcon icon={faDoorOpen} />
            <IndicatorNumber>{car.doors}</IndicatorNumber>
          </Indicator>
          <Indicator>
            <IndicatorIcon icon={faSuitcaseRolling} />
            <IndicatorNumber>{(car.carBaggage ?? []).length}</IndicatorNumber>
          </Indicator>
        </Indicators>
        <ButtonVehicule>
          <VehiculeIcon />
        </ButtonVehicule>
        <CarPriceInformation>
          <TotalPrice>
            {car.dailyRateCurrency} {formatPrice(car.dailyRate, car.dailyRateCurrency)}
            <span>/ dia</span>
          </TotalPrice>
          <PriceDay>
            {car.totalRateCurrency} {formatPrice(car.totalRate, car.totalRateCurrency)} / 3 días
          </PriceDay>
        </CarPriceInformation>
      </MainInformation>
      <ButtonCTA>Reservar</ButtonCTA>
    </Root>
  )
}

export default CarItem
