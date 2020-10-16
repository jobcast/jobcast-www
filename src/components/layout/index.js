import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import Full from './full'
import Fixed from './fixed'
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
      <Helmet>
        <title>
          {props.title || props.heading
            ? (props.title || props.heading) + ' |'
            : ''}{' '}
          {data.site.siteMetadata.title}
        </title>
      </Helmet>
      {props.full ? <Full {...props} /> : <Fixed {...props} />}
    </>
  )
}

export default Layout
