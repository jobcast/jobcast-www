import React from 'react'
import Layout from '../../../components/layout'

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
          <img
            alt=""
            src="http://blog.bcjobs.ca/jobcast/wp-content/themes/jobcast.net_2012/images/screenshot_customize_1.jpg?v=1"
          />
        </div>
        <div className="margin-30">
          <img
            alt=""
            src="http://blog.bcjobs.ca/jobcast/wp-content/themes/jobcast.net_2012/images/screenshot_customize_2.jpg?v=1"
          />
        </div>
        <div className="margin-30">
          <img
            alt=""
            src="http://blog.bcjobs.ca/jobcast/wp-content/themes/jobcast.net_2012/images/screenshot_customize_3.jpg?v=1"
          />
        </div>
      </div>
    </Layout>
  )
}

export default BrandedFacebookCareerPage
