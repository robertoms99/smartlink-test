import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Root = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const Heading = styled.h1`
  font-size: 7em;
  font-weight: 900;
`

export const Message = styled.span`
  font-size: 2em;
  font-weight: 500;
`

export const PathLink = styled(Link)`
  font-weight: 900;
  color: var(--color-primary);
`
