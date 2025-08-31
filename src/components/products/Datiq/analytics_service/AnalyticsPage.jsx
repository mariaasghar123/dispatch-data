import React from 'react'
import ReviewCard from '../review/ReviewCard1'
import HeroReview from '../review/HeroReview'
import Logos from '../../Datone/Logos'
import FAQSection from '../review/ReviewQuestions'

export default function AnalyticsPage() {
  return (
    <div>
        <HeroReview 
                imageSrc="/media/images/analytics1.jpg"
                altText="Trucking Services"
                heading="Analytics Services from DAT iQ"
                description1="Ensure your data works for you with a range of services available to help solve the most complex challenges."
                description2="Our team of experts leverage advanced data science, machine learning, and industry expertise to equip teams with reliable insights for confident data-driven decision-making."
                primaryBtnText="SCEDULE A CONSULTATION"
                secondaryBtnText="Learn More" />
        <ReviewCard heading="Unlock the full potential of your business"
                description="At DAT Freight & Analytics, we believe in going above and beyond static one-size-fits-all frameworks to find the right solution for our customers."
                image="/media/images/trackcing.png"
                items={[
                  {
                    title: "Bolster your operations with data expertise",
                    desc: "Supplement data analytics proficiency needed to manage transportation and logistics planning, execution, and evaluation.",
                  },
                  {
                    title: "Uncover insights with tailored solutions and services",
                    desc: "Put your data to work with custom services like cleansing, aggregation, visualizations, and analysis.",
                  },
                  {
                    title: "Integrate DAT offerings directly into your workflow",
                    desc: "Connect DAT data to an existing tech stack to centralize internal workflows for enhanced efficiency.",
                  },
                   {
                    title: "One-time or recurring consultative support",
                    desc: "Tap into an in-house team of subject matter experts to solve a unique challenge or take your data management and analytics to the next level.",
                  },
                ]}/>
                <ReviewCard heading="Trendlines Report"
                description="Get the free weekly report on truckload rates and national supply demand trends."
                image="/media/images/trackcing.png"
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
                   {
                    title: "Fuel prices",
                  },
                ]}/>
                <Logos/>
                <FAQSection title="A few things you might be asking yourself"
  faqs={[
    {
      question: "Where does the data in Custom Analytics come from?",
      answer:
        "DAT iQ analyzes activity on DAT One, the largest on-demand freight marketplace in North America. That includes load posts and searches along with truck posts and searches from hundreds of thousands of users. DAT iQ also analyzes shipment invoices from thousands of network contributors who rely on us to benchmark their freight rates with the overall market. That rates database includes $1 trillion in transportation invoices.",
    },
    {
      question: "How much does Custom Analytics cost?",
      answer:
        "Pricing is tailored specifically to your business based on your needs. Let us know what problems you’re looking to solve, and we can provide a range of options.",
    },
    {
      question: "How current is the data?",
      answer:
        "The closest to real-time available in the industry, at a size and breadth that allows you to look at granular insights not available anywhere else so that you’re better equipped to manage market volatility.",
    },
    {
      question: "Can companies manipulate the data?",
      answer:
        "The data collected on our network undergoes a rigorous verification process, and the size of the database is such that no individual company can influence these reports.",
    },
  ]}/>
    </div>
  )
}