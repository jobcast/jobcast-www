import React from 'react'
import Layout from '../../../components/layout'

import mediscan from './images/mediscan.jpg'
import gfs from './images/gordon-food-services.jpg'
import globalPathfinder from './images/global-pathfinder.jpg'

const AutomatedJobSharingPage = () => {
  return (
    <Layout heading="Automated Job Sharing">
      <p>Do you want to attract more candidates in less time?</p>
      <p>
        With Jobcast you&#8217;re only a click away from sharing job
        posts with Facebook, Twitter, LinkedIn, and more. You&#8217;ll
        improve ROI, boost candidate flow, and increase referrals by
        harnessing candidate and recruiter networks.
      </p>
      <div className="text-center">
        <div className="margin-30">
          <img src={mediscan} alt="Mediscan" />
        </div>
        <div className="margin-30">
          <img src={gfs} alt="Gordon Food Services" />
        </div>
        <div className="margin-30">
          <img src={globalPathfinder} alt="Global Pathfinder" />
        </div>
      </div>
    </Layout>
  )
}

export default AutomatedJobSharingPage
