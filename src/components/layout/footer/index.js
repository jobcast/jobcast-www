import React from 'react'
import { Link } from 'gatsby'
import socialLinkedIn from './images/socialLinkedIn.svg'
import socialTwitter from './images/socialTwitter.svg'
import socialFacebook from './images/socialFacebook.svg'
import socialYouTube from './images/socialYouTube.svg'

import './styles.css'

const Footer = ({ footerClass }) => {
  return (
    <footer
      className={`footer clear xs-ph15 ${
        footerClass ? footerClass : ''
      }`}
      role="contentinfo"
    >
      {/* use this instead of home page <footer className="footer clear margin-0 xs-p15" role="contentinfo"> */}
      <div className="wrapper">
        <div className="footer-social">
          <ul className="margin-0">
            <li>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/company/jobcast-net"
                target="_blank"
                title="Jobcast on LinkedIn"
              >
                <img
                  src={socialLinkedIn}
                  alt="LinkedIn"
                  height="21"
                  width="21"
                />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                href="https://twitter.com/jobcastnet"
                target="_blank"
                title="Jobcast on Twitter"
              >
                <img
                  src={socialTwitter}
                  alt="Twitter"
                  height="21"
                  width="21"
                />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                href="https://www.facebook.com/jobcastnet"
                target="_blank"
                title="Jobcast on Facebook"
              >
                <img
                  src={socialFacebook}
                  alt="Facebook"
                  height="21"
                  width="21"
                />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCHov9o2-HsiPV2Awp2ke-TA"
                target="_blank"
                title="Jobcast on Youtube"
              >
                <img
                  src={socialYouTube}
                  alt="YouTube"
                  height="21"
                  width="21"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-nav">
          <ul>
            <li>
              <Link to="/about/" activeClassName="active">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact-us/" activeClassName="active">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/terms/" activeClassName="active">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/privacy/" activeClassName="active">
                Privacy
              </Link>
            </li>
            <li>
              <a href="https://app.jobcast.net/developer">API</a>
            </li>
          </ul>
        </div>

        <div className="footer-top pull-right text-center">
          <a
            href="#topline"
            className="pointer"
            onClick={e =>
              e.preventDefault() ||
              window.scroll({ top: 0, left: 0, behavior: 'smooth' })
            }
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
