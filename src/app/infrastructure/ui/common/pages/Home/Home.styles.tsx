import styled, { css } from 'styled-components'

export const Root = styled.main<{ $loading?: boolean; $error?: boolean }>`
  min-height: 100vh;
  max-width: 112rem;
  margin: auto;
  padding: 13rem 1.3rem;
  ${({ $loading = false, $error = false }) =>
    ($loading || $error) &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    `}
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

export const BrandLogo = styled.figure`
  width: 14rem;
  float: right;
  span {
    font-weight: 900;
  }
  img {
    width: 100%;
  }
`
