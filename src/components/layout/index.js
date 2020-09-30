import React from 'react'
import Full from './full'
import Fixed from './fixed'
import './styles.css'

const Layout = props => {
  return props.full ? <Full {...props} /> : <Fixed {...props} />
}

export default Layout
