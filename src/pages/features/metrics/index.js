import React from 'react'
import Layout from '../../../components/layout'

import consoleMetrics from './images/console-metrics.jpg'

const MetricsPage = () => {
  return (
    <Layout heading="Detailed Metrics">
      <p>
        Combine Facebook Insights with our recruiting specific reports
        to track and analyze the effectiveness of your recruiting
        campaigns.
      </p>
      <p>
        With the metrics provided by Jobcast and Facebook you&#8217;ll
        continue to increase your ROI and improve your social
        strategy. No more posting and praying, no more guessing, just
        solid facts to guide your future projects.
      </p>

      <div className="text-center">
        <div className="margin-30">
          <img src={consoleMetrics} alt="Jobcast Console Metrics" />
        </div>
      </div>
    </Layout>
  )
}

export default MetricsPage
