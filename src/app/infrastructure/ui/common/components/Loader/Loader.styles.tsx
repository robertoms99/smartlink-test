import styled, { keyframes } from 'styled-components'

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`

export const Root = styled.div`
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 20em;
  ::before {
    content: '';
    --dimension: 8em;
    height: var(--dimension);
    width: var(--dimension);
    border: 1em solid;
    border-radius: 50%;
    border-right-color: transparent;
    animation: ${loadingAnimation} 600ms infinite ease-in-out;
    margin-bottom: 1em;
  }
  span {
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
  }
`
