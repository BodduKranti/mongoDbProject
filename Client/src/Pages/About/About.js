import React from 'react'
import InnerBanner from '../../Components/InnerBanner/InnerBanner'
import Testimonial from '../../Components/Testimonial/Testimonial'

const About = () => {
  return (
    <>
      <InnerBanner
        Pagetitle="About"
        Pagedesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <Testimonial
        Testimonial="We served over 5000+ Patients"
        TestimonialDesc="Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat."
      />
    </>
  )
}

export default About