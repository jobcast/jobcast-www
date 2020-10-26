import React from 'react'
import Layout from '../../../components/layout'

import spanish from './images/spanish.jpg'
import russian from './images/russian.jpg'

const LanguagesPage = () => {
  return (
    <Layout heading="Post in 11 Languages">
      <p>Recruit globally in 11 different languages.</p>
      <p>
        Spanish, Japanese, French&#8230; With Jobcast you can adjust
        the language of your job posts to fit your local market and
        broaden your candidate pool.
      </p>
      <p>
        Don&#8217;t let language be a barrier to finding the best
        hires!
      </p>
      <p>Currently supporting:</p>
      <ul>
        <li>Dutch</li>
        <li>English</li>
        <li>French</li>
        <li>German</li>
        <li>Italian</li>
        <li>Japanese</li>
        <li>Portuguese (Brazil)</li>
        <li>Portuguese (Europe)</li>
        <li>Russian</li>
        <li>Spanish (Europe)</li>
        <li>Spanish (Latin America)</li>
      </ul>
      <div className="text-center">
        <div className="margin-30">
          <img src={spanish} />
        </div>
        <div className="margin-30">
          <img src={russian} />
        </div>
      </div>
    </Layout>
  )
}

export default LanguagesPage
