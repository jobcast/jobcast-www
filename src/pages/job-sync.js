import React from 'react'
import { Link } from 'gatsby'
import FixedLayout from '../components/fixedLayout'
import jobSync from '../assets/images/job-sync/job-sync.jpg'

const JobSyncPage = () => {
  return (
    <FixedLayout title="Job Sync">
      <p>
        Job Sync creates a seamless job application process both for
        you and job seekers by connecting your ATS with Jobcast.
      </p>
      <p>
        <h2>What is Job Sync?</h2>
        <img
          className="hidden-xs alignright wp-image-7452 size-full"
          src={jobSync}
          alt=""
          width="427"
          height="663"
        />
        Integrate your ATS with Jobcast! Job Sync will read your
        existing website, ATS, XML feed, or list of jobs. It pulls all
        of the job information, including the name, location, closing
        date, any category information, simple text formatting and
        application location, and publishes it on your Jobcast Page.
        From there, the jobs published on your own ATS will be
        automatically shared across all social networks you have set
        up, without any extra effort.
      </p>
      <h2>Cost:</h2>
      <p>
        Our monthly cost is $129, on top of whatever basic plan you
        have. There are no additional set-up costs or hidden fees. You
        can manage your Job Sync subscription under Billing in your
        dashboard, right below your basic plan.
      </p>
      <p>
        It typically takes 5 business days to set up. If your ATS or
        list of jobs changes in format, there may be up to a 5
        business day downtime. Please let us know in advance if you
        plan to change your ATS while under Job Sync.
      </p>
      <h2>Requirements:</h2>
      <p>
        You must have a base plan, provide a source URL, and if the
        capacity of your base plan is smaller than the number of jobs
        you have available, we will need to know which jobs you would
        like synchronized.
      </p>
      <p>In order for Job Sync to be possible, your jobs must:</p>
      <ul>
        <li>
          have separate URLs for each individual job posting without
          requiring any credentials or a login
        </li>
      </ul>
      OR:
      <ul>
        <li>be stored in a dedicated XML feed and</li>
      </ul>
      <p>
        It is sometimes possible to use Job Sync when the above
        conditions are not met. Please{' '}
        <Link to="/contact-us">contact us</Link> for consultation.
      </p>
      <h2>Support:</h2>
      <p>
        Questions? <Link to="/contact-us">Contact us</Link> through
        our in-app Live Chat or email us at{' '}
        <a href="mailto:info@jobcast.net">info@jobcast.net</a>.
      </p>
    </FixedLayout>
  )
}

export default JobSyncPage
