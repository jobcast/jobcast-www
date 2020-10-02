import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from './images/logo.png'

import './styles.css'

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
              <Link to="/plans/">Pricing</Link>
            </li>
            <li>
              <Link to="/job-sync/">Job Sync</Link>
            </li>
            <li>
              <Link to="/blog/">Blog</Link>
            </li>
            <li>
              <Link to="/jobcast-tutorials/">Tutorials</Link>
            </li>
            <li>
              <a href="http://www.jobcast.net/category/resources/">
                Resources
              </a>
            </li>
            <li className="visible-xs">
              <Link to="/about/">About</Link>
            </li>
            <li className="visible-xs">
              <Link to="/contact-us/">Contact</Link>
            </li>
            <li className="visible-xs">
              <Link to="/jobcast-faq/">FAQ</Link>
            </li>

            <li className="visible-xs">
              <Link to="/terms/">Terms</Link>
            </li>
            <li className="visible-xs">
              <Link to="/privacy/">Privacy</Link>
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