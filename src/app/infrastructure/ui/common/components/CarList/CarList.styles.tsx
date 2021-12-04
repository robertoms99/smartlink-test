import styled from 'styled-components'

export const Root = styled.section`
  margin-top: 3em;
  ul {
    --cols: 1;
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    grid-column-gap: 1.5em;
    @media (min-width: 578px) {
      --cols: 2;
    }
    @media (min-width: 900px) {
      --cols: 3;
    }
  }
  li {
    margin-bottom: 3.5rem;
  }
`
