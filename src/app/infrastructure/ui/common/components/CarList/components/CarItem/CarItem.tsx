import { faDoorOpen, faSuitcaseRolling, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import React, { useMemo } from 'react'
import { formatPrice } from '../../../../../../lib/util'
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

const CarItem: React.FC<ICarItem> = ({ car }) => {
  const days = useMemo(() => {
    const days = Math.ceil(car.totalRate / car.dailyRate)
    return `${days} días`
  }, [car.dailyRate, car.totalRate])

  return (
    <Root>
      <AditionalInformation>
        <CarImage>
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
            {car.totalRateCurrency} {formatPrice(car.totalRate, car.totalRateCurrency)} / {days}
          </PriceDay>
        </CarPriceInformation>
      </MainInformation>
      <ButtonCTA>Reservar</ButtonCTA>
    </Root>
  )
}

export default CarItem
