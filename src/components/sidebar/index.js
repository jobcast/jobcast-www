import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import Download from '../download'
import twitter from './images/twitter.png'

import styles from './styles.module.css'

const Sidebar = ({ downloadType, download }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogCategory(sort: { fields: name, order: ASC }) {
        edges {
          node {
            id
            slug
            name
          }
        }
      }
    }
  `)

  return (
    <div>
      {downloadType && download && (
        <Download type={downloadType} download={download} />
      )}
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
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="jobcastnet"
            options={{ height: 600 }}
          />
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
                alt="Twitter"
                src={twitter}
              />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.categories}>
        <h3>Categories</h3>
        <ul>
          {data.allContentfulBlogCategory.edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={`/${node.slug}/`}>{node.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
