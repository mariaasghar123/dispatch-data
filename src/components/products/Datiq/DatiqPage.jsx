import React from 'react'
import HeroDat from '../Datone/HeroDat'
import DatiqLoadCard from './DatiqLoadCard'
import DatBgImage from './DatBgimage'
import DatiqCard3 from './DatiqCard3'
import DatiqCard4 from './DatiqCard4'
import Logos from '../Datone/Logos'

export default function DatiqPage() {
  return (
    <div>
      <HeroDat title="DAT iQ"   subtitle="The industry standard in  transportation analytics"/>
      <DatiqLoadCard cardsData={[
          {
            bg: "/media/images/dat1.jpg",
            title: "RateView Analytics",
            btnText: "Learn More",
            path: "/rateview-analytics",
          },
          {
            bg: "/media/images/dat2.jpeg",
            title: "Network Analytics",
            btnText: "Get Started",
            path: "/network-analytics",
          },
          {
            bg: "/media/images/about2.png",
            title: "Analytics Services",
            btnText: "Learn More",
            path: "/analytics-services",
          },
        ]}
        bottomTitle="Don't guess. Know."
        bottomText="Take the uncertainty out of freight with the – deepest, broadest, and most reliable rate and capacity analytics."/>
      <DatBgImage/>
      <DatiqCard3/>
      <DatiqCard4/>
      <Logos/>
    </div>
  )
}
