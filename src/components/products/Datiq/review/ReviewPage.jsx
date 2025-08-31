import React from 'react'
import HeroReview from './HeroReview'
import ReviewCard1 from './ReviewCard1'
import ReviewCard2 from './ReviewCard2'
import ReviewCard3 from './ReviewCard3'
import Logos from '../../Datone/Logos'
import FAQSection from './ReviewQuestions'

export default function ReviewPage() {
  return (
    <div>
      <HeroReview  
        imageSrc="/media/images/analytics1.jpg"
        altText="Trucking Services"
        heading="RateView Analytics from DAT iQ"
        description1="Industry-leading freight rate analytics solutions for brokers, shippers, and carriers."
        description2="Confidently navigate market volatility, take control of your network, and effectively move your business."
        primaryBtnText="Start Factoring Today"
        secondaryBtnText="Learn More" />

      <ReviewCard1 heading="The only 360° view of the entire freight marketplace"
        description="Actionable rate insights for smarter strategic planning, risk mitigation, and procurement."
        image="/media/images/trackcing.png"
        items={[
          {
            title: "Compare spot and contract rates",
            desc: "Relevant insights for brokers, shippers and carriers on any lane.",
          },
          {
            title: "Get the most current market insights",
            desc: "Navigate market volatility with the timeliest data available.",
          },
          {
            title: "See seasonal trends",
            desc: "Analyze rate trends with 13-month pricing histories.",
          },
        ]}/>
        
      <ReviewCard2 bgImage="/media/images/datai.jpg"
        number={1}
        numberSuffix="trillion"
        textAfterNumber="in freight invoices analyzed annually."
        typewriterWords={["Turn data into actionable insights..."]}/>

      <ReviewCard3/>
      <ReviewCard1 heading="RateView Analytics for Shippers"
        description="Actionable rate insights for smarter strategic planning, risk mitigation, and procurement."
        image="/media/images/review.jpg"
        items={[
          {
            title: "Navigate volatile freight markets",
            desc: "Stay informed with the latest truckload rates to manage your transportation costs.",
          },
          {
            title: "Get insights on new lane",
            desc: "Strategically design your network with confidence using reliable 13-month pricing histories and forecasting.",
          },
          {
            title: "Strengthen carrier relationships with transparent negotiations",
            desc: "Comprehensive visibility into market trends helps shipper right-size rates and mitigate routing guide failure.",
          },
        ]}/>
           <ReviewCard1 heading="RateView Analytics for Carriers"
        description="Actionable rate insights for smarter strategic planning, risk mitigation, and procurement."
        image="/media/images/review2.jpg"
        reverse={true}  
        items={[
          {
            title: "Bid on RFPs with confidence",
            desc: "Win long-term contracts with accurate 52-week forecasts and specialized RFP response tools in the add-on Ratecast feature.",
          },
          {
            title: "Protect your bottom line",
            desc: "See current market rates and calculate surcharges and margins faster and easier.",
          },
          {
            title: "Anticipate market shifts",
            desc: "Research lane seasonality plus accurate forecasting to anticipate market changes before they happen.",
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
