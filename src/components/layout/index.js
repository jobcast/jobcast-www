import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import Icons from './icons'
import FullLayout from './full'
import FixedLayout from './fixed'
import './normalize.css'
import './styles.css'

const Layout = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Icons />
      <Helmet>
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/icons/ms-icon-144x144.png"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700"
          rel="stylesheet"
          type="text/css"
        />
        <meta
          name="description"
          content="Jobcast - Build your own Branded Career Site on your Facebook Page with our Social Recruiting App."
        />
        <meta
          name="keywords"
          content="Recruiting, Social recruiting, ATS, applicant tracking, hr tech, social media"
        />
        <title>
          {props.title || props.heading
            ? (props.title || props.heading) + ' |'
            : ''}{' '}
          {data.site.siteMetadata.title}
        </title>
      </Helmet>
      {props.full ? (
        <FullLayout {...props} />
      ) : (
        <FixedLayout {...props} />
      )}
    </>
  )
}

export default Layout
