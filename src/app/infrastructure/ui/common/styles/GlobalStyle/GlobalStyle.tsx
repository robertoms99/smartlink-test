import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root {
  --color-black: #333333;
  --color-grey: #999999;
  --color-grey-lightest:#DBDBDB;
  --font-family-primary: 'Lato', sans-serif;
  --color-primary: #141284;
  --color-tertiary: #FDD008;
  --initial-font-size: 1.5rem;
  --color-section-background: #ECEEEF;
}
body {
  color: var(--color-black);
  font-family: var(--font-family-primary);
  font-size: var(--initial-font-size);
  background-color: var(--color-section-background);
}
html,
body {
  scroll-behavior: smooth;
}
`

export default GlobalStyle
