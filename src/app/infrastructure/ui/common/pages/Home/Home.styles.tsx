import styled from 'styled-components'

export const Root = styled.main`
  min-height: 100vh;
  max-width: 112rem;
  margin: auto;
  padding: 13rem 1.3rem;
`

export const Heading = styled.header`
  width: 80%;
  margin: auto;
  @media (min-width: 578px) {
    width: 100%;
  }
  h1 {
    font-weight: 900;
    font-size: 3.6rem;
  }
  span {
    margin-top: 1.7em;
    font-weight: normal;
    display: block;
    font-size: var(--initial-font-size);
  }
`
