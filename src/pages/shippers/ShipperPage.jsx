import React from 'react'
import HeroSection from '../careers/Hero5'
import DatiqLoadcard from "../../components/products/Datiq/DatiqLoadCard"
import ResourceCards from '../brokers/BrokerCards';
import FactoringSmart from '../../components/products/Datone/factoring/FactoringSmart';
import PartnerSection from './PartnerSection';


export default function ShipperPage() {
    const brokerCards = [
    {
      image: "/media/images/shipper.webp",
      title: "Bid With Confidence: How to win on your terms",
      description:
        "After the pandemic flipped the world upside down, the truckload marketplace cratered. Then, just as quickly, it rebounded...",
    },
    {
      image: "/media/images/shipper2.webp",
      title: "Start your own broker success story with DAT",
      description:
        "Peter Coratola Jr. founded EASE Logistics in a borrowed office after losing his job. Now they’ve got hundreds of employees...",
    },
    {
      image: "/media/images/bgimage.png",
      title: "How to Start a Freight Brokerage",
      description:
        "Although many shippers have contracts with trucking companies to transport their goods, a significant amount of truck transport...",
    },
  ];
  return (
    <div>
      <HeroSection bgImage="/media/images/shipper2.webp"
        headingText="DAT iQ Analytics for Shippers"
        paragraph1="Get a 360° view of the freight market with business intelligence that empowers data-driven decision-making and resilient supply chains."/>
        <DatiqLoadcard cardsData={[
                  {
                    bg: "/media/images/shipper.webp",
                    title: "RateView Analytics",
                    btnText: "Learn More",
                    path: "/rateview-analytics",
                  },
                  {
                    bg: "/media/images/load1.jpg",
                    title: "Network Analytics",
                    btnText: "Get Started",
                    path: "/network-analytics",
                  },
                  {
                    bg: "/media/images/analytics1.jpg",
                    title: "Analytics Services",
                    btnText: "Learn More",
                    path: "/analytics-services",
                  },
                ]}
                bottomTitle="Don't guess. Know."
                bottomText="Take the uncertainty out of freight with the – deepest, broadest, and most reliable rate and capacity analytics."/>
             <ResourceCards title="Shipper Resources" cards={brokerCards} />
             <PartnerSection/>
             <FactoringSmart/>
    </div>
  )
}
