import React from 'react'
import { render } from 'react-dom'
import App from './app/infrastructure/ui/App'

const rootContainer = document.getElementById('root') ?? document.createElement('div')

if (!document.body.contains(rootContainer)) {
  rootContainer.id = 'root'
  document.body.appendChild(rootContainer)
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootContainer
)
