import React, { useState } from 'react'

import styles from './styles.module.css'

const encode = data => {
  return Object.keys(data)
    .map(
      key =>
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    )
    .join('&')
}

const Download = ({ type, download }) => {
  const [submitting, setSubmitting] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitting(true)

    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({
        'form-name': 'download',
        firstName,
        lastName,
        company,
        email,
      }),
    })
      .then(() => {
        window.location.href = download.file.url
      })
      .catch(error => {
        setSubmitting(false)
        alert(error)
      })
  }

  return (
    <div>
      <h3 className="text-center">Read the {type} Now:</h3>
      <form
        name="download"
        className={styles.form}
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <div className={styles.indicatesRequired}>
          <span className={styles.asterix}>*</span> indicates required
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={company}
            onChange={e => setCompany(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="email">
            Email <span className={styles.asterix}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.buttonGroup}>
          <button
            type="submit"
            className="btn btn-default btn-small"
            disabled={submitting}
          >
            Download {type}
          </button>
        </div>
      </form>
      <hr style={{ marginBottom: '30px' }}></hr>
    </div>
  )
}

export default Download
