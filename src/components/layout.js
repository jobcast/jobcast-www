import React from 'react'
import Header from './header'
import Footer from './footer'
import '../assets/css/styles.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
