import React from 'react'
import HeroReview from '../review/HeroReview'
import ReviewCard from '../review/ReviewCard1'
import ReviewCard2 from '../review/ReviewCard2'
import Logos from '../../Datone/Logos'
import FAQSection from '../review/ReviewQuestions'

export default function NetworkAnalytics() {
  return (
    <div>
      <HeroReview imageSrc="/media/images/fuelcard.png"
        altText="Trucking Services"
        heading="Network Analytics from DAT iQ"
        description1="Confidently navigate the complex landscape of freight transportation with advanced capacity analytics solutions."
        description2="Gain unparalleled visibility into network optimization opportunities and quickly adapt to market volatility with real-time insight into capacity conditions. Leverage comprehensive past, present, and future trends for more informed planning and decision-making to ensure reliable service in a dynamic market."
        primaryBtnText="Start Factoring Today"
        secondaryBtnText="Learn More"/>

        <ReviewCard heading="Strategic network insights for brokers and shippers"
        description="Build resilience to navigate market cycles by embracing a new era of freight management"
        image="/media/images/load1.jpg"
        items={[
          {
            title: "Strategic planning and forecasting",
            desc: "Leverage past, present, and future capacity insights for smarter strategic planning and decision-making.",
          },
          {
            title: "Visibility into market conditions",
            desc: "Get a clear view of the dynamic freight market. Dive into precise regional details or quickly assess conditions at-a-glance.",
          },
          {
            title: "Navigate capacity fluctuations",
            desc: "Efficiently manage changes in regional capacity. Search for trucks and discover hidden capacity for problematic lanes.",
          },
        ]}/>

        <ReviewCard2 bgImage="/media/images/datai.jpg"
        number={1}
        numberSuffix="trillion"
        textAfterNumber="in freight invoices analyzed annually."
        typewriterWords={["DAT iQ Network Analytics provides insights into spot and contract capacity"]}/>

        <ReviewCard heading="Network Analytics for Brokers"
        description="Plan for present and future market trends"
        image="/media/images/load3.jpg"
        reverse={true}
        items={[
          {
            title: "See conditions for the past, present and future so you can plan for today and forecast for next week.",
            desc: "Leverage past, present, and future capacity insights for smarter strategic planning and decision-making.",
          },
          {
            title: "Get precise details for a market or region",
            desc: "Unlock a clear view of the freight market with tools that provide precise details or take a big-picture view of an entire region.",
          },
          {
            title: "Manage changes in regional capacity",
            desc: "Search for trucks and find hidden capacity for problematic lanes.",
          },
        ]}/>
        <ReviewCard heading="Network Analytics for Shippers"
        description="Plan for present and future market trends"
        image="/media/images/ben2.jpg"
        items={[
          {
            title: "See conditions for the past, present and future so you can plan for today and forecast for next week.",
            desc: "Leverage past, present, and future capacity insights for smarter strategic planning and decision-making.",
          },
          {
            title: "Get precise details for a market or region",
            desc: "Unlock a clear view of the freight market with tools that provide precise details or take a big-picture view of an entire region.",
          },
          {
            title: "Manage changes in regional capacity",
            desc: "Search for trucks and find hidden capacity for problematic lanes.",
          },
        ]}/>

        <ReviewCard heading="Trendlines Report"
        image="/media/images/driver.png"
        reverse={true}
        items={[
          {
            title: "National average spot rates",
          },
          {
            title: "Supply and demand metrics",
          },
          {
            title: "Van, reefer and flatbed insights",
          },
        ]}/>
        <Logos/>
        <FAQSection title="A few things you might be asking yourself"
  faqs={[
    {
      question: "How are market rates calculated in RateView Analytics?",
      answer:
        "We collect invoices from thousands of transportation companies totaling $1 trillion. The process is automated, with invoices sent directly to our database. The data is verified and updated daily. Every market rate reported requires a minimum number of submissions so prices can’t be manipulated.",
    },
    {
      question: "How accurate are the forecasts?",
      answer:
        "Over 95% accurate across more than 7 million daily predictions.",
    },
    {
      question: "How current is the data?",
      answer:
        "The closest to real-time available in the industry, updated daily, giving you the most accurate information to navigate market volatility.",
    },
    {
      question: "Can companies manipulate the data?",
      answer:
        "The accuracy of our data is our top priority, so we’ve established rigorous protocols to eliminate manipulation. The depth and breadth of our dataset prevents any single contributor from influencing rates.",
    },
  ]}/>
    </div>
  )
}
