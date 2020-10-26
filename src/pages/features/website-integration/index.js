import React from 'react'
import Layout from '../../../components/layout'

import leyf from './images/london-early-years-foundation.jpg'
import maryMargaret from './images/mary-margaret-network.jpg'
import chronos from './images/chronos-oil-and-gas.jpg'

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
          <img alt="London Early Years Foundation" src={leyf} />
        </div>
        <div className="margin-30">
          <img alt="Mary Margaret" src={maryMargaret} />
        </div>
        <div className="margin-30">
          <img alt="Chronos Oil and Gas" src={chronos} />
        </div>
      </div>
    </Layout>
  )
}

export default WebsiteIntegrationPage
