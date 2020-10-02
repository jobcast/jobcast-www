import React from 'react'
import Layout from '../../components/layout'

import './styles.css'

import faqInstall3 from './images/FAQ-install3.jpg'
import faqJobs1 from './images/FAQ-jobs1.jpg'
import faqJobs2 from './images/FAQ-jobs2.jpg'
import faqJobs3 from './images/FAQ-jobs3.jpg'
import faqShare1 from './images/FAQ-share1.jpg'
import faqShare2 from './images/FAQ-share2.jpg'
import faqShare3 from './images/FAQ-share3.jpg'
import faqTeam1 from './images/FAQ-team1.jpg'
import faqTeam2 from './images/FAQ-team2.jpg'
import faqTeam3 from './images/FAQ-team3.jpg'
import faqWelcome1 from './images/FAQ-welcome1.jpg'
import faqWelcome2 from './images/FAQ-welcome2.jpg'
import faqYoutube from './images/FAQ-youtube.jpg'
import faqBanner1 from './images/FAQ-banner1.jpg'
import faqBanner2 from './images/FAQ-banner2.jpg'
import faqBanner3 from './images/FAQ-banner3.jpg'
import faqBranding from './images/FAQ-branding.jpg'
import faqCareer1 from './images/FAQ-career1.jpg'
import faqCareer2 from './images/FAQ-career2.jpg'
import faqCareer3 from './images/FAQ-career3.jpg'
import faqColours from './images/FAQ-colours.jpg'
import faqInstall1 from './images/FAQ-install1.jpg'
import faqInstall2 from './images/FAQ-install2.jpg'

const FaqPage = () => {
  const scrollTo = e => {
    e.preventDefault()
    document
      .querySelector(e.target.hash)
      .scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Layout title="Jobcast FAQ">
      <p id="faq-top">
        Learn all you need to know about getting started with the
        Jobcast App with these tutorials and videos!
      </p>
      <div>
        <ul>
          <li>
            <a onClick={scrollTo} href="#faq-jobs">
              How to Post a Job
            </a>
          </li>
          <li>
            <a onClick={scrollTo} href="#faq-colours">
              How to Change Your Career Page Colours
            </a>
          </li>
          <li>
            <a onClick={scrollTo} href="#faq-dimensions">
              Career Page Banner Dimensions
            </a>
          </li>
          <li>
            <a onClick={scrollTo} href="#faq-banners">
              How to Add Banners to Your Career Page
            </a>
          </li>
          <li>
            <a onClick={scrollTo} href="#faq-youtube">
              How to Add Youtube Video to Your Career Page
            </a>
          </li>
          <li>
            <a onClick={scrollTo} href="#faq-welcome">
              How to Add a Welcome Message to Your Career Page
            </a>
          </li>
          <li>
            <a onClick={scrollTo} href="#faq-share">
              How to Set Up Jobcast Auto-Share for One Step Social
              Recruiting
            </a>
          </li>
          <li>
            <a onClick={scrollTo} href="#faq-team">
              How to Add Team Members
            </a>
          </li>
          <li>
            <a onClick={scrollTo} href="#faq-install">
              How to Install the Jobcast App on Facebook
            </a>
          </li>
          <li>
            <a onClick={scrollTo} href="#faq-career">
              How to Manage Your Facebook Tabs to Make Your Career Tab
              Visible
            </a>
          </li>
        </ul>
      </div>

      <div className="faq-section" id="faq-jobs">
        <h4 className="faq-title">How to Post a Job</h4>
        1. Go to the <strong>Jobs</strong> tab and click on the{' '}
        <strong>Post a Job</strong> sub-tab. Fill out the job form
        with your job's details. Click "Publish". Your job is now
        published!
        <div className="faq-img">
          <img alt="FAQ" src={faqJobs1} className="margin-b15" />
        </div>
        2. (Optional) Attach imagery to your job posting.
        <div className="faq-img">
          <img alt="FAQ" src={faqJobs2} className="margin-b15" />
        </div>
        3. (Optional) Share your job posting across your networks.
        <div className="faq-img">
          <img alt="FAQ" src={faqJobs3} className="margin-b15" />
        </div>
        <div className="pull-right">
          <a onClick={scrollTo} href="#faq-top">
            Back to Top
          </a>
        </div>
      </div>

      <div className="faq-section" id="faq-colours">
        <h4 className="faq-title">
          How to Change Your Career Page Colours
        </h4>
        1. Go to the <strong>Branding</strong> tab
        <div className="faq-img">
          <img alt="FAQ" src={faqBranding} className="margin-b15" />
        </div>
        2. Under the <strong>"Colors"</strong> section, click on the
        colour blocks to change the selections for your{' '}
        <strong>buttons, headings</strong>, and{' '}
        <strong>accents</strong>. This will automatically save.
        <div className="faq-img">
          <img alt="FAQ" src={faqColours} className="margin-b15" />
        </div>
        <div className="pull-right">
          <a onClick={scrollTo} href="#faq-top">
            Back to Top
          </a>
        </div>
      </div>

      <div className="faq-section" id="faq-dimensions">
        <h4 className="faq-title">Career Page Banner Dimensions</h4>
        <div>
          <strong>Top Banner</strong> At least 1200px wide
        </div>
        <div>
          <strong>Sidebar Banner</strong> At least 320px wide
        </div>
        <div>
          <strong>Bottom Banner</strong> At least 1200px wide
        </div>
        <div className="pull-right">
          <a onClick={scrollTo} href="#faq-top">
            Back to Top
          </a>
        </div>
      </div>

      <div className="faq-section" id="faq-banners">
        <h4 className="faq-title">
          How to Add Banners to Your Career Page
        </h4>
        1. Go to the <strong>Branding</strong> tab
        <div className="faq-img">
          <img alt="FAQ" src={faqBranding} className="margin-b15" />
        </div>
        2. Drag and drop or select a file, at least{' '}
        <strong>1200px wide</strong>, into the{' '}
        <strong>"Top Banner"</strong> upload area. This will
        automatically save.
        <div className="faq-img">
          <img alt="FAQ" src={faqBanner1} className="margin-b15" />
        </div>
        3. Drag and drop or select a file, at least{' '}
        <strong>320 wide</strong>, into the{' '}
        <strong>"Sidebar Banner"</strong> upload area. This will
        automatically save.
        <div className="faq-img">
          <img alt="FAQ" src={faqBanner2} className="margin-b15" />
        </div>
        4. Drag and drop or select a file, at least{' '}
        <strong>1200 wide</strong>, into the{' '}
        <strong>"Bottom Banner"</strong> upload area. This will
        automatically save.
        <div className="faq-img">
          <img alt="FAQ" src={faqBanner3} className="margin-b15" />
        </div>
        <div className="pull-right">
          <a onClick={scrollTo} href="#faq-top">
            Back to Top
          </a>
        </div>
      </div>

      <div className="faq-section" id="faq-youtube">
        <h4 className="faq-title">
          How to Add Youtube Video to Your Career Page
        </h4>
        1. Go to the <strong>Branding</strong> tab
        <div className="faq-img">
          <img alt="FAQ" src={faqBranding} className="margin-b15" />
        </div>
        2. Scroll down to the <strong>Youtube Video URL</strong>{' '}
        section, and paste in a video URL. This will automatically
        save. You can remove the video by clicking "remove".
        <div className="faq-img">
          <img alt="FAQ" src={faqYoutube} className="margin-b15" />
        </div>
        <div className="pull-right">
          <a onClick={scrollTo} href="#faq-top">
            Back to Top
          </a>
        </div>
      </div>

      <div className="faq-section" id="faq-welcome">
        <h4 className="faq-title">
          How to Add a Welcome Message to Your Career Page
        </h4>
        1. Go to the <strong>Branding</strong> tab
        <div className="faq-img">
          <img alt="FAQ" src={faqBranding} className="margin-b15" />
        </div>
        2. Scroll down to the <strong>Welcome message</strong>{' '}
        section, and add your message.
        <div className="faq-img">
          <img alt="FAQ" src={faqWelcome1} className="margin-b15" />
        </div>
        3. Your message will automically save.
        <div className="faq-img">
          <img alt="FAQ" src={faqWelcome2} className="margin-b15" />
        </div>
        <div className="pull-right">
          <a onClick={scrollTo} href="#faq-top">
            Back to Top
          </a>
        </div>
      </div>

      <div className="faq-section" id="faq-share">
        <h4 className="faq-title">
          How to Set Up Jobcast Auto-Share for One Step Social
          Recruiting
        </h4>
        1. Go to the <strong>Jobs</strong> tab and select the{' '}
        <strong>Auto Sharing</strong> sub-tab.
        <div className="faq-img">
          <img alt="FAQ" src={faqShare1} className="margin-b15" />
        </div>
        2. Click <strong>Add Scheduled Post</strong> and Choose your
        Network
        <div className="faq-img">
          <img alt="FAQ" src={faqShare2} className="margin-b15" />
        </div>
        3. Fill out the share form and click "Save".
        <div className="faq-img">
          <img alt="FAQ" src={faqShare3} className="margin-b15" />
        </div>
        <div className="pull-right">
          <a onClick={scrollTo} href="#faq-top">
            Back to Top
          </a>
        </div>
      </div>

      <div className="faq-section" id="faq-team">
        <h4 className="faq-title">How to Add Team Members</h4>
        1. Click on the <strong>Dropdown Menu</strong> by your name
        and select <strong>Company Settings</strong>.
        <div className="faq-img">
          <img alt="FAQ" src={faqTeam1} className="margin-b15" />
        </div>
        2. Add a team member by typing their email into the field and
        clicking on <strong>Add User</strong>. An invite will be sent
        to their email.
        <div className="faq-img">
          <img alt="FAQ" src={faqTeam2} className="margin-b15" />
        </div>
        3. You can remove a team member by clicking the{' '}
        <strong>Revoke Access</strong> option on their tab.
        <div className="faq-img">
          <img alt="FAQ" src={faqTeam3} className="margin-b15" />
        </div>
        <div className="pull-right">
          <a onClick={scrollTo} href="#faq-top">
            Back to Top
          </a>
        </div>
      </div>

      <div className="faq-section" id="faq-install">
        <h4 className="faq-title">
          How to Install the Jobcast App on Facebook
        </h4>
        1. Navigate to the Jobcast App Facebook Page and click on{' '}
        <strong>"Install App"</strong>.
        <div className="faq-smimg">
          <img alt="FAQ" src={faqInstall1} className="margin-b15" />
        </div>
        2. Select <strong>"Install App"</strong> for your Company Page
        <div className="faq-smimg">
          <img alt="FAQ" src={faqInstall2} className="margin-b15" />
        </div>
        3. When you see the pink check mark then you know that you're
        good to go!
        <div className="faq-smimg">
          <img alt="FAQ" src={faqInstall3} className="margin-b15" />
        </div>
        <div className="pull-right">
          <a onClick={scrollTo} href="#faq-top">
            Back to Top
          </a>
        </div>
      </div>

      <div className="faq-section" id="faq-career">
        <h4 className="faq-title">
          How to Manage Your Facebook Tabs to Make Your Career Tab
          Visible
        </h4>
        1. Go to your <strong>Company Page</strong> and click on{' '}
        <strong>"More"</strong>.
        <div className="faq-smimg">
          <img alt="FAQ" src={faqCareer1} className="margin-b15" />
        </div>
        2. From the <strong>"More"</strong> drop down, select{' '}
        <strong>"Manage Tabs"</strong>
        <div className="faq-smimg">
          <img alt="FAQ" src={faqCareer2} className="margin-b15" />
        </div>
        3. Click and drag your <strong>Career Tab</strong> towards the
        top of your tab list.
        <div className="faq-smimg">
          <img alt="FAQ" src={faqCareer3} className="margin-b15" />
        </div>
        4. Save your changes!
        <div className="pull-right">
          <a onClick={scrollTo} href="#faq-top">
            Back to Top
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default FaqPage
