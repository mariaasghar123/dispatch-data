import React from 'react'
import HeroDat from './HeroDat'
import DatCard from './DatCard'
import Solution from './CardSection'
import ThreeCards from './ThreeCards'
import PricingPlans from './PricingPlan'
import Subscriptions from './Subscription'
import Logos from './Logos'

export default function DatPage() {
  return (
    <div>
      <HeroDat/>
      <DatCard/>
      <Solution/>
      <ThreeCards/>
      <PricingPlans/>
      <Subscriptions/>
      <Logos/>
    </div>
  )
}
