import React from 'react'
import twitter from './images/twitter.png'

const Sidebar = () => {
  return (
    <div>
      <div>
        <div className="font-18 text-center">
          Jobcast is a powerful hiring app that engages candidates
          from your Facebook Page
          <div className="margin-v30">
            <a
              className="btn btn-default btn-small"
              href="https://app.jobcast.net/dashboard/authentication/sign-up"
            >
              <strong>Install</strong> for free
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center">
          <div className="margin-v30">
            <a
              className="btn btn-info btn-small"
              href="https://twitter.com/jobcastnet"
              target="_blank"
              rel="noreferrer"
            >
              Read More{' '}
              <img
                width="20"
                height="16"
                title=""
                style={{
                  marginLeft: '2px',
                  verticalAlign: '-2px',
                }}
                alt=""
                src={twitter}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="widget_categories">
        <h3>Categories</h3>
        <ul>
          <li>
            <a href="http://www.jobcast.net/category/resources/case-studies/">
              Case Studies
            </a>
          </li>
          <li>
            <a href="http://www.jobcast.net/category/resources/client-stories/">
              Client Stories
            </a>
          </li>
          <li>
            <a href="http://www.jobcast.net/category/employer-branding/">
              Employer Branding
            </a>
          </li>
          <li>
            <a href="http://www.jobcast.net/category/facebook-recruiting-1/">
              Facebook Recruiting
            </a>
          </li>
          <li>
            <a href="http://www.jobcast.net/category/linklove/">
              Link Love
            </a>
          </li>
          <li>
            <a href="http://www.jobcast.net/category/updates/">
              Product Updates
            </a>
          </li>
          <li>
            <a href="http://www.jobcast.net/category/resources/">
              Resources
            </a>
          </li>
          <li>
            <a href="http://www.jobcast.net/category/social-recruiting/">
              Social Recruiting
            </a>
          </li>
          <li>
            <a href="http://www.jobcast.net/category/uncategorized/">
              Uncategorized
            </a>
          </li>
          <li>
            <a
              href="http://www.jobcast.net/category/welcome-to-jobcast/"
              title="How to get the most from the Jobcast App"
            >
              Welcome to Jobcast
            </a>
          </li>
          <li>
            <a href="http://www.jobcast.net/category/resources/white-papers/">
              White Papers
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
