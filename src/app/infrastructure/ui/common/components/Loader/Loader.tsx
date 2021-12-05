import React from 'react'
import { Root } from './Loader.styles'

const Loader: React.FC = ({ children }) => {
  return (
    <Root>
      <span>{children}</span>
    </Root>
  )
}

export default Loader
