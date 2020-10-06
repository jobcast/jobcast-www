import React from 'react'
import Layout from '../../components/layout'
import mobile from './images/mobile.png'
import quoteAlbert from './images/quoteAlbert.png'
import homeLogo1 from './images/homeLogo1.png'
import homeLogo2 from './images/homeLogo2.png'
import homeLogo3 from './images/homeLogo3.png'
import homeLogo4 from './images/homeLogo4.png'
import homeLogo5 from './images/homeLogo5.png'
import homeLogo6 from './images/homeLogo6.png'
import homeLogo7 from './images/homeLogo7.png'
import calloutAuto from './images/calloutAuto.jpg'
import calloutSocial from './images/calloutSocial.jpg'
import calloutVisual from './images/calloutVisual.jpg'
import calloutIntegration from './images/calloutIntegration.jpg'
import calloutLanguages from './images/calloutLanguages.jpg'
import calloutReports from './images/calloutReports.jpg'

import './styles.css'

const IndexPage = () => {
  return (
    <Layout full={true}>
      <div className="home-1 text-center">
        <div className="wrapper">
          <h1 className="home-title">
            Automate Your Social Recruiting
          </h1>

          <div className="home-desc width-60 xs-w100">
            Create a mobile-friendly social Career Site, add images
            and video to your job ads, and then share them to all of
            your social networks at once.
          </div>

          <h2 className="home-subtitle">
            Try Jobcast Premium free for 30 days, no credit card entry
            required.
          </h2>

          <a
            href="https://app.jobcast.net/dashboard/authentication/sign-up"
            className="btn btn-default xs-mb15"
          >
            Sign up Free
          </a>
        </div>
      </div>

      <div className="padding-0 padding-v30 text-center color-white wrapper relative xs-p15">
        <div className="margin-auto width-50 xs-w100">
          <div className="wp-video">
            <iframe
              title="Intro to Jobcast"
              width="320"
              height="240"
              src="https://www.youtube.com/embed/9qFIOUpXst8"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <span className="text-18">
            See how Jobcast can save you hours on social recruiting
            and learn more about all of our different features in this
            video.
          </span>
        </div>

        <div className="home-mobile">
          <img src={mobile} alt="Jobcast is Mobile" />
        </div>
      </div>

      <div className="home-second padding-0 padding-v60 text-center">
        <div className="wrapper clear margin-b30">
          <div className="hidden-xs col-sm-4">&nbsp;</div>

          <div className="col-xs-12 col-sm-4 color-white">
            <img
              className="margin-b15"
              src={quoteAlbert}
              alt="Albert Visser"
            />

            <div className="margin-b15">
              “Jobcast is our first and only love. It is social,
              flexible, saves money and above all it saves a lot of
              time!”
            </div>

            <div>
              <strong>
                - Albert Visser,
                <br /> Marketing Manager,
                <br /> FreshCotton
              </strong>
            </div>
          </div>

          <div className="hidden-xs col-sm-4">&nbsp;</div>
        </div>

        <div className="bkg-white padding-v15">
          <div className="wrapper clear logos">
            <div className="user-logo">
              <img src={homeLogo1} alt="Samsung" />
            </div>
            <div className="user-logo">
              <img src={homeLogo2} alt="Bombardier" />
            </div>
            <div className="user-logo">
              <img src={homeLogo3} alt="Canada Post" />
            </div>
            <div className="user-logo">
              <img src={homeLogo4} alt="Pizza Hut" />
            </div>
            <div className="user-logo">
              <img src={homeLogo5} alt="Fraser Health" />
            </div>
            <div className="user-logo">
              <img src={homeLogo6} alt="Harley Davidson" />
            </div>
            <div className="user-logo">
              <img src={homeLogo7} alt="SickKids" />
            </div>
          </div>
        </div>
      </div>
      <div className="padding-15 padding-v60 text-center color-white wrapper xs-p0 xs-pv30">
        <h2
          className="page-title margin-b30 color-white"
          id="features"
        >
          Some Of Jobcast’s Features
        </h2>

        <div className="clear">
          <div className="col-xs-12 col-sm-6 padding-l0 xs-p0">
            <div className="callout relative text-center clear">
              <img
                src={calloutAuto}
                alt="Share your job posts at the best times for passive and active job seekers to see them on Twitter, LinkedIn, and Facebook"
              />
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 padding-r0 xs-p0">
            <div className="callout relative text-center clear">
              <img
                src={calloutSocial}
                alt="Jobcast gives you customizable, mobile-friendly facebook and social career sites."
              />
            </div>
          </div>
        </div>

        <div className="clear">
          <div className="col-xs-12 col-sm-6 padding-l0 xs-p0">
            <div className="callout relative text-center clear">
              <img
                src={calloutVisual}
                alt="Job cards are a simple way to boost engagement by automatically adding compelling images to the jobs that you share to your social networks."
              />
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 padding-r0 xs-p0">
            <div className="callout relative text-center clear">
              <img
                src={calloutIntegration}
                alt="Jobcast can integrate with any ATS or Career Site so that you never have to post a job more than once."
              />
            </div>
          </div>
        </div>

        <div className="clear">
          <div className="col-xs-12 col-sm-6 padding-l0 xs-p0">
            <div className="callout relative text-center clear">
              <img
                src={calloutLanguages}
                alt="With Jobcast you can adjust the language of your job posts to fit your local market and broaden your candidate pool."
              />
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 padding-r0 xs-p0">
            <div className="callout relative text-center clear">
              <img
                src={calloutReports}
                alt="Jobcast provides actionable data about your applicants so that you can track ROI and improve your social recruiting."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bkg-white padding-15 padding-v60 text-center">
        <div className="wrapper">
          <h2 className="page-title margin-b30">
            Plans &amp; Pricing
          </h2>

          <div className="clear margin-b60">
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

          <a
            href="https://app.jobcast.net/dashboard/authentication/sign-up"
            className="btn btn-default text-uppercase margin-r15 xs-m0 xs-mb15"
          >
            Get Started
          </a>

          <a
            href="/plans"
            className="btn btn-info text-uppercase margin-l15 xs-m0"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="home-3 text-center">
        <div className="font-22 font-bold margin-b30">
          Join the 20, 000+ companies that trust Jobcast for social
          recruiting.
        </div>

        <div className="font-18 margin-b30">
          Try Jobcast Premium free for 30 days!
        </div>

        <a
          href="https://app.jobcast.net/dashboard/authentication/sign-up"
          className="btn btn-default text-uppercase"
        >
          Get Started
        </a>
      </div>
    </Layout>
  )
}

export default IndexPage
