import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import brokenRobot from './images/broken-robot.png'

import styles from './styles.module.css'

const NotFoundPage = () => {
  useEffect(() => {
    if (window.dataLayer)
      window.dataLayer.push({
        event: 'custom',
        eventCategory: 'www',
        eventAction: 'PageNotFound',
        eventLabel: window.location.href,
      })
  }, [])

  return (
    <Layout title="Page Not Found">
      <div className={`clear ${styles.container}`}>
        <div className="col-xs-12 col-sm-6 text-center">
          <div className={styles.heading}>Oops...</div>
          <div className={styles.label}>Page not found!</div>
          <p className={styles.description}>
            <Link to="/">Head home</Link>
          </p>
        </div>
        <div className="col-xs-12 col-sm-6 text-center">
          <img src={brokenRobot} alt="Broken Robot" />
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
