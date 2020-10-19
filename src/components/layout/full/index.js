import React from 'react'
import Header from '../header'
import Footer from '../footer'

const FullLayout = ({ children }) => {
  return (
    <>
      <Header headerClass="margin-0" />
      {children}
      <Footer footerClass="margin-0" />
    </>
  )
}

export default FullLayout
