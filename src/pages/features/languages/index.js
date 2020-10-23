import React from 'react'
import Layout from '../../../components/layout'

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
          <img src="http://blog.bcjobs.ca/jobcast/wp-content/themes/jobcast.net_2012/images/screenshot_languages_2.jpg" />
        </div>
        <div className="margin-30">
          <img src="http://blog.bcjobs.ca/jobcast/wp-content/themes/jobcast.net_2012/images/screenshot_languages_3.jpg" />
        </div>
      </div>
    </Layout>
  )
}

export default LanguagesPage
