import React from 'react'
import Hero5 from './Hero5'
import Career from './Career'
import Logos from '../../components/products/Datone/Logos'

export default function CareerPage() {
  return (
    <div>
      <Hero5 bgImage="/media/images/career6.jpg"
        headingText="Careers"
        subHeading="We’d love to hear from you"
        paragraph1="The freedom to create products people love"
        paragraph2="Join a team where innovation, passion, and dedication are celebrated. 🚀"/>
      <Career/>
      <Logos/>
    </div>
  )
}