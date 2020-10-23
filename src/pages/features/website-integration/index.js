import React from 'react'
import Layout from '../../../components/layout'

const WebsiteIntegrationPage = () => {
  return (
    <Layout heading="Website Integration">
      <p>
        The Jobcast app is easily integrated with WordPress, Drupal,
        Joomla and many more popular content management systems.
      </p>
      <p>
        All it takes to implement this feature is the addition of one
        single line of code to your content management system of
        choice. It&#8217;s that simple!
      </p>
      <div className="text-center">
        <div className="margin-30">
          <img
            alt=""
            src="http://blog.bcjobs.ca/jobcast/wp-content/themes/jobcast.net_2012/images/screenshot_widget_2.jpg?v=1"
          />
        </div>
        <div className="margin-30">
          <img
            alt=""
            src="http://blog.bcjobs.ca/jobcast/wp-content/themes/jobcast.net_2012/images/screenshot_widget_1.jpg"
          />
        </div>
        <div className="margin-30">
          <img
            alt=""
            src="http://blog.bcjobs.ca/jobcast/wp-content/themes/jobcast.net_2012/images/screenshot_widget_3.jpg"
          />
        </div>
      </div>
    </Layout>
  )
}

export default WebsiteIntegrationPage
