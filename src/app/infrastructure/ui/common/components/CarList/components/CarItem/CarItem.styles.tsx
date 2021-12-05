import React from 'react'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Root = styled.article`
  background-color: white;
  border-radius: 2rem;
  padding: 1.25em 1em;
  box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const AditionalInformation = styled.div`
  display: flex;
  align-items: flex-start;
`

export const MainInformation = styled.div`
  padding: 0 1em;
  margin-bottom: 1.25em;
`

export const CarImage = styled.figure`
  flex-grow: 1;
  margin-top: -6.5em;
  filter: brightness(1.1);
  mix-blend-mode: multiply;
  img {
    height: 120%;
    width: 120%;
    object-fit: cover;
    transform: translateX(-10%);
  }
`

export const Discount = styled.span`
  background-color: var(--color-tertiary);
  border-radius: 1.4rem;
  font-weight: 900;
  padding: 0.4em 1.2em;
  margin-left: auto;
`

export const CompanyLogo = styled.figure`
  max-width: 7rem;
  padding: 0.5em 0;
  img {
    width: 100%;
  }
`

export const CarModel = styled.h4`
  font-size: 1em;
  color: var(--color-grey);
`

export const CarCategory = styled.h3`
  font-size: 1.5em;
  font-weight: 900;
`

export const CarPriceInformation = styled.div`
  text-align: right;
`

export const PriceDay = styled.span`
  font-style: italic;
  font-size: 0.75em;
`

export const TotalPrice = styled.span`
  display: block;
  color: var(--color-primary);
  font-size: 1.5em;
  font-weight: 900;
  span {
    color: var(--color-grey);
    font-size: 0.5em;
    font-style: italic;
    display: inline-block;
    margin-left: 0.75em;
  }
`

export const Indicators = styled.article`
  margin: 1em 0;
  display: flex;
  align-items: center;
  color: var(--color-primary);
`

export const IndicatorIcon = styled(FontAwesomeIcon)`
  color: var(--color-primary);
  display: inline-block;
  margin-right: 0.5em;
`

export const IndicatorNumber = styled.span`
  color: var(--color-grey);
`

export const Indicator = styled.div`
  :not(:last-child) {
    margin-right: 1em;
  }
`

export const CardButton = styled.button`
  color: white;
  background-color: var(--color-primary);
  font-weight: bold;
`

export const ButtonVehicule = styled(CardButton)`
  padding: 0.7em;
  border-radius: 0.5rem;
`

export const ButtonCTA = styled(CardButton)`
  width: 100%;
  border-radius: 2.2rem;
  padding: 1em 0;
  margin-top: auto;
  transition: transform 100ms;
  :hover {
    transform: translateY(-0.2rem);
  }
  :active {
    transform: translateY(0.1rem);
  }
`

const CarItemStyles = { ButtonCTA }

export const VehiculeIcon = styled(({ className }: any) => (
  <FontAwesomeIcon icon={faCar} className={className} />
))`
  color: white;
  width: 1.5em !important;
  height: 1.5em !important;
`

export default CarItemStyles
