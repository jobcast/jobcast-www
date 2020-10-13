import React from 'react'
import Header from './header'
import Footer from './footer'

const Fixed = ({ children, title }) => {
  return (
    <>
      <Header />
      <div className="wrapper main-wrapper">
        <main role="main" className="body-area">
          <section>
            {title && (
              <>
                <h1 className="page-title">{title}</h1>
                <hr className="margin-b30" />
              </>
            )}
            <div>{children}</div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Fixed
