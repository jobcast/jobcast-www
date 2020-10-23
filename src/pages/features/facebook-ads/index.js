import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../../components/layout'

const FacebookAdsPage = () => {
  return (
    <Layout heading="Targeted Facebook Ads">
      <p>
        Facebook Ads are the best way to target specific candidates,
        expand your reach, and convert fans into applicants.
      </p>
      <p>With Facebook Ads you can target users based on:</p>
      <ul>
        <li>Demographics</li>
        <li>Work History</li>
        <li>Occupation</li>
        <li>Education</li>
        <li>Location</li>
        <li>Interests</li>
      </ul>
      <p>
        This means you&#8217;ll reach more qualified candidates and
        improve the caliber of applications you receive.
      </p>
      <p>
        Interested in learning more about Facebook Recruiting Ads?{' '}
        <Link to="/contact-us/">Contact us</Link> for a free
        consultation with one of our ads specialists.
      </p>
    </Layout>
  )
}

export default FacebookAdsPage
