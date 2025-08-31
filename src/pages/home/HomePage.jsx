import React from 'react'
import Hero from './Hero'
import Cards from './Cards'
import About from './About'
import Solution from './Solution'
import Map from './Map'
import Bussiness from './Bussiness'
import Dollar from './Dollar'
import Drivers from "./Drivers"

import FadeInSection from "./FadeInSection" // import kiya

export default function HomePage() {
  return (
    <div>
      <FadeInSection><Hero/></FadeInSection>
      <FadeInSection><Cards/></FadeInSection>
      <FadeInSection><About/></FadeInSection>
      <FadeInSection><Solution/></FadeInSection>
      <FadeInSection><Map/></FadeInSection>
      <FadeInSection><Bussiness/></FadeInSection>
      <FadeInSection><Dollar/></FadeInSection>
      <FadeInSection><Drivers/></FadeInSection>
    </div>
  )
}
