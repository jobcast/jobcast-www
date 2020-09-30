import React from 'react'
import FixedLayout from '../components/fixedLayout'
import founders from '../assets/images/about/founders.jpg'

const AboutPage = () => {
  return (
    <FixedLayout title="About">
      <p>
        Jobcast is a Facebook Recruiting App that makes it possible
        for employers and recruiters to build fully branded career
        sections on their company Facebook Page.
      </p>
      <p>
        With Jobcast you can tap into Facebook's over 1 billion active
        user-base to source qualified candidates, engage with
        potential hires, and grow your employer brand.
      </p>
      <p>
        Jobcast Media Inc was founded by Ryan St. Germaine and Johnny
        Oshika in early 2011.
      </p>
      <p>
        <img
          className=" wp-image-4697 aligncenter"
          style={{ margin: '0 auto', width: '576px' }}
          src={founders}
          alt="Founders"
          width="576"
          height="383"
        />
      </p>
      <p>
        Ryan and Johnny have been business partners, and friends, for
        over thirteen years and both have an extensive background in
        HR Tech. They began working together in 2001 when, recognizing
        the growing demand for online recruiting platforms, they
        founded what is now the largest job board in Western Canada
        BCjobs.ca.
      </p>
      <p>
        A testament to their teamwork, and knowledge of the recruiting
        market, Ryan and Johnny capitalized on the shift in recruiting
        from print media to online to build an entire network of
        extremely successful career sites. Jobcast sprung out of a
        similar observation.
      </p>
      <p>
        In 2010 Ryan and Johnny realized that the recruiting market
        was shifting again, this time the move was from job boards to
        social recruiting. The team now had almost a decade's worth of
        hands on experience in the field of social recruiting so they
        didn't hesitate to claim their stake in the emerging market.
        Within a year's time Jobcast was born.
      </p>
      <p>
        The Jobcast app aims to make social recruiting simple and
        effective, to tap into the extremely desirable passive
        candidate market, and to help their clients use Facebook to
        win the war for talent!
      </p>
    </FixedLayout>
  )
}

export default AboutPage
