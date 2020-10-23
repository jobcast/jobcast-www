import React from 'react'
import Layout from '../../../components/layout'

const AtsIntegration = () => {
  return (
    <Layout heading="ATS Integration">
      <p>You should never have to post jobs more than once.</p>
      <p>
        Jobcast lets you manage all of your job postings from one
        place, seamlessly integrating your Facebook Career Page with
        your ATS or career site so you can automatically share your
        job posts.
      </p>
      <p>Integrate easily with these (and more) ATS platforms</p>
      <div className="text-center">
        <div className="margin-30">
          <img src="http://blog.bcjobs.ca/jobcast/wp-content/themes/jobcast.net_2012/images/features_image_ats.jpg" />
        </div>
        <div className="margin-30">
          <img src="http://blog.bcjobs.ca/jobcast/wp-content/themes/jobcast.net_2012/images/screenshot_sync_1.jpg" />
        </div>
        <div className="margin-30">
          <img src="http://blog.bcjobs.ca/jobcast/wp-content/themes/jobcast.net_2012/images/screenshot_sync_2.jpg" />
        </div>
      </div>
    </Layout>
  )
}

export default AtsIntegration
