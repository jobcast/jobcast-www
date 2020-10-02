import React from 'react'
import Layout from '../../components/layout'

import './styles.css'

const ContactPage = () => {
  return (
    <Layout title="Contact">
      <form
        action="/contact-success/"
        method="post"
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        {/* The `form-name` hidden field is required to support form submissions in Netlify without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label>
            Don’t fill this out if you're human:{' '}
            <input name="bot-field" />
          </label>
        </p>
        <div className="cf7-form">
          <div className="clear margin-b15">
            <div className="col-xs-12 col-sm-6 padding-l0 xs-p0">
              <p>
                Name <span style={{ color: 'red' }}>*</span>
                <br />
                <input
                  type="text"
                  name="name"
                  required="required"
                  autoFocus="autofocus"
                  aria-required="true"
                  aria-invalid="false"
                />
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 padding-r0 xs-p0">
              <p>
                Email <span style={{ color: 'red' }}>*</span>
                <br />
                <input
                  type="email"
                  name="email"
                  required="required"
                  aria-required="true"
                  aria-invalid="false"
                />
              </p>
            </div>
          </div>
          <div className="clear margin-b15">
            <div className="col-xs-12 col-sm-6 padding-l0 xs-p0">
              <p>
                Company
                <br />
                <input
                  type="text"
                  name="company"
                  aria-invalid="false"
                />
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 padding-r0 xs-p0">
              <p>
                Subject
                <br />
                <input
                  type="text"
                  name="subject"
                  aria-invalid="false"
                />
              </p>
            </div>
          </div>
          <p>
            Message <span style={{ color: 'red' }}>*</span>
            <br />
            <textarea
              name="message"
              rows="20"
              required="required"
              aria-invalid="false"
            ></textarea>
          </p>
          <p className="text-center">
            <button type="submit" className="btn btn-default">
              Send
            </button>
          </p>
        </div>
      </form>
    </Layout>
  )
}

export default ContactPage
