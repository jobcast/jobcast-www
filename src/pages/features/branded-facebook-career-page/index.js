import React from 'react'
import Layout from '../../../components/layout'

import lerf from './images/london-early-years-foundation.jpg'
import nurses4Detroit from './images/nurses-4-detroit.jpg'
import earlsWantsYou from './images/earls-wants-you.jpg'

const BrandedFacebookCareerPage = () => {
  return (
    <Layout heading="Branded Facebook Career Page">
      <p>
        {' '}
        Passive candidates are NOT on job boards, but{' '}
        <strong>EVERYONE is on Facebook.</strong>
      </p>
      <p>
        With Jobcast you&#8217;ll build a fully branded Career Page to
        attract passive candidates, grow your employer brand, and
        build an active talent pool on Facebook. Jobcast let&#8217;s
        you use Facebook to engage with passive candidates and convert
        them into applicants, all in less than 2 minutes.
      </p>

      <div className="text-center">
        <div className="margin-30">
          <img alt="" src={lerf} />
        </div>
        <div className="margin-30">
          <img alt="" src={nurses4Detroit} />
        </div>
        <div className="margin-30">
          <img alt="" src={earlsWantsYou} />
        </div>
      </div>
    </Layout>
  )
}

export default BrandedFacebookCareerPage
