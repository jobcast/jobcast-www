import React from 'react'
import Layout from '../../components/layout'

const TutorialsPage = () => {
  return (
    <Layout title="Video Tutorials">
      <h2 style={{ textAlign: 'center' }}>Jobcast Branding</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        <iframe
          title="Jobcast Branding"
          src="https://www.youtube.com/embed/hji74fUuiSc"
          width="420"
          height="315"
          frameBorder="0"
          allowFullScreen="allowfullscreen"
        ></iframe>
      </p>
      <p style={{ textAlign: 'center' }}>
        Prefer screenshots? Learn how to:{' '}
        <a href="http://www.jobcast.net/jobcast-faq/#faq-colours">
          Change Your Brand Colours
        </a>{' '}
        &nbsp;&nbsp;|&nbsp;&nbsp;{' '}
        <a href="http://www.jobcast.net/jobcast-faq/#faq-banners">
          Add Banners
        </a>{' '}
        &nbsp;&nbsp;|&nbsp;&nbsp;{' '}
        <a href="http://www.jobcast.net/jobcast-faq/#faq-youtube">
          Add a Youtube Video
        </a>{' '}
        &nbsp;&nbsp;|&nbsp;&nbsp;{' '}
        <a href="http://www.jobcast.net/jobcast-faq/#faq-welcome">
          Add a Welcome Message
        </a>
      </p>
      <hr style={{ margin: '15px 0' }} />
      <h2 style={{ textAlign: 'center' }}>Add a Team Member</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        <iframe
          title="Add a Team Member"
          src="https://www.youtube.com/embed/x55jhqu-VmQ"
          width="420"
          height="315"
          frameBorder="0"
          allowFullScreen="allowfullscreen"
        ></iframe>
      </p>
      <hr style={{ margin: '15px 0' }} />
      <h2 style={{ textAlign: 'center' }}>Posting a Job</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        <iframe
          title="Posting a Job"
          src="https://www.youtube.com/embed/f89LedUnS-c"
          width="420"
          height="315"
          frameBorder="0"
          allowFullScreen="allowfullscreen"
        ></iframe>
      </p>
      <p style={{ textAlign: 'center' }}>
        Prefer screenshots? Learn how to:{' '}
        <a href="http://www.jobcast.net/jobcast-faq/#faq-jobs">
          Post a Job
        </a>
      </p>
      <hr style={{ margin: '15px 0' }} />
      <h2 style={{ textAlign: 'center' }}>Automation</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        <iframe
          title="Automation"
          src="https://www.youtube.com/embed/--3FG3B7BtI"
          width="420"
          height="315"
          frameBorder="0"
          allowFullScreen="allowfullscreen"
        ></iframe>
      </p>
      <p style={{ textAlign: 'center' }}>
        Prefer screenshots? Learn how to:{' '}
        <a href="http://www.jobcast.net/jobcast-faq/#faq-share">
          Automate Your Jobs
        </a>
      </p>
    </Layout>
  )
}

export default TutorialsPage
