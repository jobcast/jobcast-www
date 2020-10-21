import React, { useState } from 'react'
import { Link } from 'gatsby'
import Search from './search'
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
        <div className="relative">
          <Search />
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
                <a href="https://app.jobcast.net/dashboard/">
                  Log In
                </a>
              </li>
              <li>
                <Link to="/plans/" activeClassName="active">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/job-sync/" activeClassName="active">
                  Job Sync
                </Link>
              </li>
              <li>
                <Link to="/blog/" activeClassName="active">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/jobcast-tutorials/"
                  activeClassName="active"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  to="/category/resources/"
                  activeClassName="active"
                >
                  Resources
                </Link>
              </li>
              <li className="visible-xs">
                <Link to="/about/" activeClassName="active">
                  About
                </Link>
              </li>
              <li className="visible-xs">
                <Link to="/contact-us/" activeClassName="active">
                  Contact
                </Link>
              </li>
              <li className="visible-xs">
                <Link to="/jobcast-faq/" activeClassName="active">
                  FAQ
                </Link>
              </li>

              <li className="visible-xs">
                <Link to="/terms/" activeClassName="active">
                  Terms
                </Link>
              </li>
              <li className="visible-xs">
                <Link to="/privacy/" activeClassName="active">
                  Privacy
                </Link>
              </li>
              <li className="visible-xs">
                <a href="https://app.jobcast.net/developer">API</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
