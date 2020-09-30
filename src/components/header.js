import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../assets/images/logo.png'

const Header = ({ headerClass }) => {
  const [navActive, setNavActive] = useState(false)

  return (
    <header
      className={`header clear ${headerClass ? headerClass : ''}`}
      role="banner"
    >
      {/* use this instead for home page <header className="header clear margin-0" role="banner"> */}
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Jobcast Logo" className="logo-img" />
          </Link>
        </div>
        <div className="hidden-xs pull-right nav-login-wrapper">
          <a
            href="https://app.jobcast.net/dashboard/"
            title="Log in to Jobcast"
            className="nav-login btn btn-second btn-small"
          >
            Log in
          </a>
        </div>
        <div
          className={`nav-toggle ${navActive ? 'active' : ''}`}
          onClick={() => setNavActive(!navActive)}
          onKeyDown={() => setNavActive(!navActive)}
          role="button"
          tabIndex="0"
        >
          <div
            className={`nav-toggle-inner ${
              navActive ? 'active' : ''
            }`}
          ></div>
        </div>
        <nav
          className={`nav ${navActive ? 'active' : ''}`}
          role="navigation"
        >
          <ul>
            <li className="visible-xs">
              <a href="https://app.jobcast.net/dashboard/">Log In</a>
            </li>
            <li>
              <a href="http://www.jobcast.net/plans/">Pricing</a>
            </li>
            <li>
              <a href="http://www.jobcast.net/job-sync/">Job Sync</a>
            </li>
            <li>
              <a href="http://www.jobcast.net/blog/">Blog</a>
            </li>
            <li>
              <a href="http://www.jobcast.net/jobcast-tutorials/">
                Tutorials
              </a>
            </li>
            <li>
              <a href="http://www.jobcast.net/category/resources/">
                Resources
              </a>
            </li>
            <li className="visible-xs">
              <a href="http://www.jobcast.net/about/">About</a>
            </li>
            <li className="visible-xs">
              <a href="http://www.jobcast.net/contact-us/">Contact</a>
            </li>
            <li className="visible-xs">
              <a href="http://www.jobcast.net/jobcast-faq/">FAQ</a>
            </li>

            <li className="visible-xs">
              <a href="http://www.jobcast.net/terms/">Terms</a>
            </li>
            <li className="visible-xs">
              <a href="http://www.jobcast.net/privacy/">Privacy</a>
            </li>
            <li className="visible-xs">
              <a href="https://app.jobcast.net/developer">API</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
