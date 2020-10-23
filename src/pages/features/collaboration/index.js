import React from 'react'
import Layout from '../../../components/layout'

const CollaborationPage = () => {
  return (
    <Layout heading="Real Time Collaboration">
      <p>
        Don&#8217;t waste time playing telephone tag with your
        colleagues.
      </p>
      <p>
        With Jobcast you can keep your whole team in the loop by
        sharing notes on candidates in real time, tracking hires, and
        rating applicants.
      </p>
      <div className="text-center">
        <div className="margin-30">
          <img src="http://blog.bcjobs.ca/jobcast/wp-content/themes/jobcast.net_2012/images/screenshot_measure_2.jpg" />
        </div>
        <div className="margin-30">
          <img src="http://blog.bcjobs.ca/jobcast/wp-content/themes/jobcast.net_2012/images/screenshot_measure_3.jpg" />
        </div>
      </div>
    </Layout>
  )
}

export default CollaborationPage
