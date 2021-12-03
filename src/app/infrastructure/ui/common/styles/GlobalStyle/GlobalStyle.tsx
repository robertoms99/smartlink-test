import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root {
  --color-black: #333333;
  --font-family-primary: 'Lato', sans-serif;
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
