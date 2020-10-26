import React from 'react'
import Layout from '../../../components/layout'

import logitech from './images/logitech.jpg'
import earls from './images/earls.jpg'

const MobileCareerSitePage = () => {
  return (
    <Layout heading="Mobile Career Site">
      <p>
        <strong>23%</strong> of job seekers are using mobile. <br />{' '}
        <span style={{ color: '#888' }}>
          (Social Talent Survey, April 2013)
        </span>
      </p>
      <p>
        If your career site isn&#8217;t optimized for mobile,
        you&#8217;re missing out on almost a quarter of your potential
        candidates. Jobcast makes it easy for candidates to apply to
        your jobs posts using their mobile device.
      </p>
      <div className="text-center">
        <div className="margin-30">
          <img src={logitech} />
        </div>
        <div className="margin-30">
          <img src={earls} />
        </div>
      </div>
    </Layout>
  )
}

export default MobileCareerSitePage
