import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../../components/layout'

import styles from './styles.module.css'

import socialReferral from './images/social-referral.jpg'

const SocialReferralsPage = () => {
  return (
    <Layout heading="Social Referrals">
      <p>
        <img
          className="alignleft"
          src={socialReferral}
          alt="Social Referral"
        />
      </p>
      <h3 className={styles.heading}>
        <strong>Why Referrals?</strong>
      </h3>
      <p>
        Employee referrals are the{' '}
        <strong>#1 source of quality</strong> hires
      </p>
      <p>
        Employee referrals are the{' '}
        <strong>fastest way to hire</strong>
      </p>
      <h3 className={styles.heading}>Why Social?</h3>
      <p>The average employee has 150 social media connections</p>
      <p>
        100 employees ={' '}
        <strong>15,000 possible social referrals</strong>
      </p>
      <h3 className={styles.heading}>
        Why Jobcast Social Referrals?
      </h3>
      <p>
        Jobcast is the social media driven employee referral program.
      </p>
      <p>
        <strong>Because Jobcast removes friction</strong> by making
        the referral process simple, fast, and rewarding for your
        employees.
      </p>
      <p>
        Because Jobcast saves you time by organizing your social
        referral process so that it is easy to track, and manage.
      </p>
      <p>
        <strong>Because Jobcast is growing.</strong>
      </p>
      <p>
        Our users have seen a{' '}
        <strong>
          44% increase in application rates over the last year
        </strong>
        . But we’re not satisfied.
      </p>
      <p>
        At Jobcast, our goal is not just about getting you more
        candidates, we want to get you better candidates, and that is
        why{' '}
        <strong>
          we want you to try the new Jobcast Social Referrals
        </strong>
        .
      </p>
      <h3 className={styles.heading}>
        Learn how Jobcast Social Referrals Can Work For You!
      </h3>
      <p>
        <Link to="/contact-us/">Contact us</Link> for a free demo!
      </p>
    </Layout>
  )
}

export default SocialReferralsPage
