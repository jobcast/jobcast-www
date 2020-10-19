import React from 'react'
import Header from '../header'
import Footer from '../footer'

const FixedLayout = ({ children, heading }) => {
  return (
    <>
      <Header />
      <div className="wrapper main-wrapper">
        <main role="main" className="body-area">
          <section>
            {heading && (
              <>
                <h1 className="page-title">{heading}</h1>
                <hr className="margin-b30" />
              </>
            )}
            <>{children}</>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default FixedLayout
