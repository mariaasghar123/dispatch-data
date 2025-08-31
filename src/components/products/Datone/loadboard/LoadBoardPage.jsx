import React from 'react'
import HeroLoad from './HeroLoad'
import LoadCard from './LoadCard'
import BgImage from './BgImage'
import LoadCardSection from './LoadCardSection'
import Shipper from './Shipper'
import Logos from '../Logos'
import PricingTable from './PricingTable'

export default function LoadBoardPage() {
  return (
    <div>
      <HeroLoad/>
      <LoadCard/>
      <BgImage/>
      <LoadCardSection/>
      <Shipper/>
      <Logos/>
      <PricingTable/>
    </div>
  )
}
