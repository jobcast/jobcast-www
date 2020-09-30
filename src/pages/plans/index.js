import React from 'react'
import FixedLayout from '../../components/fixedLayout'

const PlansPage = () => {
  return (
    <FixedLayout title="Pricing">
      <h2>Honest prices, no surprises.</h2>
      <p>
        Please enjoy our new and improved pricing to better match with
        your hiring needs! Plans are available for all levels of
        hiring needs. There are no fixed contracts. Month to month,
        cancel anytime. Pick the best plan for your job volume.
      </p>
      <p>
        <strong>First time?</strong>{' '}
        <a href="https://app.jobcast.net/dashboard/authentication/sign-up">
          Get your 30 day free trial here.
        </a>{' '}
        No credit card information or commitment required!
      </p>
      <p>
        Need more than 500 jobs?{' '}
        <a href="http://blog.bcjobs.ca/jobcast/contact-us/">
          Please contact us!
        </a>
      </p>
      <p>All of our plans come with the following features:</p>
      <ul style={{ marginBottom: '30px' }}>
        <li>Social Career Page</li>
        <li>Mobile Career Page</li>
        <li>Job Distribution</li>
        <li>Applicant Routing</li>
        <li>Collaboration and Analytics</li>
      </ul>
      <div className="clear margin-b60 text-center">
        <div className="clear">
          <div className="col-xs-6 col-sm-3">
            <div className="plan-wrapper">
              <div className="plan-title">Bronze</div>
              <div className="plan-body">
                <div className="plan-price">
                  $39 <span className="font-22">/month</span>
                </div>
                <p>1-20 JOBS</p>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-sm-3">
            <div className="plan-wrapper">
              <div className="plan-title">Silver</div>
              <div className="plan-body">
                <div className="plan-price">
                  $69 <span className="font-22">/month</span>
                </div>
                <p>21-50 JOBS</p>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-sm-3">
            <div className="plan-wrapper">
              <div className="plan-title">Gold</div>
              <div className="plan-body">
                <div className="plan-price">
                  $99 <span className="font-22">/month</span>
                </div>
                <p>51-100 JOBS</p>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-sm-3">
            <div className="plan-wrapper">
              <div className="plan-title">Platinum</div>
              <div className="plan-body">
                <div className="plan-price">
                  $199 <span className="font-22">/month</span>
                </div>
                <p>101-500 JOBS</p>
              </div>
            </div>
          </div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '15px' }}>
          <strong>
            Already have an ATS? No problem! Add Job Synch for $129!
            All your jobs, no extra effort.
          </strong>
        </p>
        <div className="margin-t30">
          <a
            href="https://app.jobcast.net/dashboard/authentication/sign-up"
            className="btn btn-default text-uppercase margin-r15 xs-m0 xs-mb15"
          >
            Get Started
          </a>
        </div>
      </div>
    </FixedLayout>
  )
}

export default PlansPage
