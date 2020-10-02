import React from 'react'
import Layout from '../../components/layout'

const ContactSuccessPage = () => {
  return (
    <Layout title="Success!">
      <h2 style={{ textAlign: 'center', marginTop: '0' }}>
        Thanks for your feedback!
      </h2>
      <p style={{ textAlign: 'center' }}>
        We'll get back to you shortly.
      </p>
      <p style={{ textAlign: 'center' }}>
        Regards,
        <br />
        The Jobcast Team
      </p>
    </Layout>
  )
}

export default ContactSuccessPage
