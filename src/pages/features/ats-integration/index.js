import React from 'react'
import Layout from '../../../components/layout'
import ats from './images/ats.jpg'
import jobcastConsole from './images/jobcast-console.jpg'
import jobSyncCareerSite from './images/job-sync-career-site.jpg'

const AtsIntegration = () => {
  return (
    <Layout heading="ATS Integration">
      <p>You should never have to post jobs more than once.</p>
      <p>
        Jobcast lets you manage all of your job postings from one
        place, seamlessly integrating your Facebook Career Page with
        your ATS or career site so you can automatically share your
        job posts.
      </p>
      <p>Integrate easily with these (and more) ATS platforms</p>
      <div className="text-center">
        <div className="margin-30">
          <img src={ats} alt="Applicant Tracking System" />
        </div>
        <div className="margin-30">
          <img src={jobcastConsole} alt="Jobcast Console" />
        </div>
        <div className="margin-30">
          <img src={jobSyncCareerSite} alt="Job Sync Career Site" />
        </div>
      </div>
    </Layout>
  )
}

export default AtsIntegration
