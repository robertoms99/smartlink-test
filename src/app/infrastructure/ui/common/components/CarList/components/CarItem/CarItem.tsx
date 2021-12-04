import { faDoorOpen, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
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

const CarItem = () => {
  return (
    <Root>
      <AditionalInformation>
        <CarImage>
          <img
            src="https://post-development.multimedia.testing.amadeus.com/mdc/retrieveCarItem?ctg=VEHICLE&prov=ZE&cnt=US&vehcat=CCAR&item=0&stamp=VEHICLE_0_0_1601040607037&file=5.JPEG"
            alt=""
          />
        </CarImage>
        <Discount>-30%</Discount>
      </AditionalInformation>
      <MainInformation>
        <CompanyLogo>
          <img
            src="https://smartlinksdev.s3.us-east-2.amazonaws.com/rentals/ZE.jpg"
            alt="company name"
          />
        </CompanyLogo>
        <CarCategory>Standard</CarCategory>
        <CarModel>Nissan Rougue o Similar</CarModel>
        <Indicators>
          <Indicator>
            <IndicatorIcon icon={faUserAlt} />
            <IndicatorNumber>3</IndicatorNumber>
          </Indicator>
          <Indicator>
            <IndicatorIcon icon={faDoorOpen} />
            <IndicatorNumber>3</IndicatorNumber>
          </Indicator>
          <Indicator>
            <IndicatorIcon icon={faUserAlt} />
            <IndicatorNumber>3</IndicatorNumber>
          </Indicator>
        </Indicators>
        <ButtonVehicule>
          <VehiculeIcon />
        </ButtonVehicule>
        <CarPriceInformation>
          <TotalPrice>
            USD 400.00
            <span>/ dia</span>
          </TotalPrice>
          <PriceDay>USD 1,200.00 / 3 días</PriceDay>
        </CarPriceInformation>
      </MainInformation>
      <ButtonCTA>Reservar</ButtonCTA>
    </Root>
  )
}

export default CarItem
