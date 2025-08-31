import React from 'react'
import HeroSection from '../careers/Hero5'
import DatiqLoadcard from "../../components/products/Datiq/DatiqLoadCard"
import ReviewCard from '../../components/products/Datiq/review/ReviewCard1'
import ReviewCard2 from '../../components/products/Datiq/review/ReviewCard2'
import ResourceCards from './BrokerCards'
import Logos from '../../components/products/Datone/Logos'
import PricingTable from '../../components/products/Datone/loadboard/PricingTable'
import PricingPlans from '../../components/products/Datone/PricingPlan'

export default function BrokerPage() {
    const brokerCards = [
    {
      image: "/media/images/broker3.jpg",
      title: "Bid With Confidence: How to win on your terms",
      description:
        "After the pandemic flipped the world upside down, the truckload marketplace cratered. Then, just as quickly, it rebounded...",
    },
    {
      image: "/media/images/broker4.jpg",
      title: "Start your own broker success story with DAT",
      description:
        "Peter Coratola Jr. founded EASE Logistics in a borrowed office after losing his job. Now they’ve got hundreds of employees...",
    },
    {
      image: "/media/images/broker.jpeg",
      title: "How to Start a Freight Brokerage",
      description:
        "Although many shippers have contracts with trucking companies to transport their goods, a significant amount of truck transport...",
    },
  ];
  return (
    <div>
      <HeroSection bgImage="/media/images/broker.jpeg"
        headingText="Solutions for Freight Brokers"
        paragraph1="Whether you are just starting your brokerage or an industry expert, DAT solutions take your company to the next level with tools to price freight more efficiently and win new business with the largest carrier network in North America."
        />
        <DatiqLoadcard cardsData={[
          {
            bg: "/media/images/factoring.jpg",
            title: "Get Your Authority",
            btnText: "Learn More",
            path: "/operating-authority",
          },
          {
            bg: "/media/images/load1.jpg",
            title: "Start Moving Freight",
            btnText: "Get Started",
            path: "/Factoring",
          },
          {
            bg: "/media/images/review2.jpg",
            title: "Optimize Your Business",
            btnText: "Learn More",
            path: "/analytics-services",
          },
        ]}
        bottomTitle="Don't guess. Know."
        bottomText="Take the uncertainty out of freight with the – deepest, broadest, and most reliable rate and capacity analytics."/>
        <ReviewCard  heading="Build your brokerage business"
        description="Run under your own MC number"
        image="/media/images/broker2.jpeg"
        reverse={true}
        items={[
          {
            title: "Get the right permitting",
            desc: "Get help throughout the whole process, even after you’re up and running",
          },
          {
            title: "Get the most current market insights",
            desc: "Navigate market volatility with the timeliest data available.",
          },
          {
            title: "Avoid delays",
            desc: "Let the experts take care of the legal stuff so you don’t have to deal with delays",
          },
        ]}/>
        <ResourceCards title="Broker Resources" cards={brokerCards} />
        <Logos/>
        <PricingPlans/>
    </div>
  )
}
