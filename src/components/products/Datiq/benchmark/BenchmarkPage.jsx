import React from 'react'
import HeroReview from '../review/HeroReview'
import ReviewCard from '../review/ReviewCard1'
import ReviewCard2 from '../review/ReviewCard2'
import Logos from '../../Datone/Logos'
import FAQSection from '../review/ReviewQuestions'

export default function BenchmarkPage() {
  return (
    <div>
      <HeroReview  
      imageSrc="/media/images/benchmark.png"
        altText="DAT iQ Benchmark"
        heading="DAT iQ Benchmark"
        description1="Do you have visibility into your transportation cost and network performance? How do you compare to the market? The insights you need to make confident business decisions are in DAT iQ Benchmark™."
        description2="Understanding performance relative to the market helps pinpoint what drives your business, what holds you back, and where you can improve. DAT iQ Benchmark makes sure you have reliable, unbiased insights to confidently get it done."
        primaryBtnText="Schedule a Demo"
        secondaryBtnText="Learn More"/>

        <ReviewCard  heading="A powerful freight intelligence toolkit"
        description="DAT iQ Benchmark provides freight intelligence to inform your budget and procurement strategies so you can navigate market volatility with greater confidence and agility."
        image="/media/images/ben2.jpg"
        items={[
          {
            title: "Efficient root cause analysis",
            desc: "Quickly identify business drivers and optimization opportunities, and dive deeper into with powerful custom data manipulation capabilities.",
          },
          {
            title: "AI-powered rate engine",
            desc: "An advanced machine learning model delivers optimal rate outputs based on dynamic market factors and daily updates.",
          },
          {
            title: "Streamline your workflow",
            desc: "Customize your analysis within a user-friendly interface with extensive setting options and interactive, pre-built data visualizations.",
          },
        ]}/>
        <ReviewCard2 bgImage="/media/images/datai.jpg"
        number={1}
        numberSuffix="trillion"
        textAfterNumber="in freight invoices analyzed annually."
        typewriterWords={["DAT iQ Benchmark is built on an advanced AI model trained on $80B of annual transportation"]}/>

        <ReviewCard heading="Dynamic analysis and actionable insights"
        description="DAT iQ Benchmark provides freight intelligence to inform your budget and procurement strategies so you can navigate market volatility with greater confidence and agility."
        image="/media/images/ben3.png"
        reverse={true}
        items={[
          {
            title: "High-level performance indicators",
            desc: "Performance at-a-glance designed to allow supply chain leaders to report up to executive stakeholders with ease.",
          },
          {
            title: "Granular analysis for deep-dives",
            desc: "Analysts can segment and filter data for unique use cases to uncover tactical opportunities to reduce costs, increase service levels, and drive efficiencies.",
          },
          {
            title: "Smarter & more sustainable procurement",
            desc: "Understand where to prioritize your efforts to drive the greatest impact within your network. Streamline RFP timelines and build stronger long-term partnerships.",
          },
        ]}/>
        <ReviewCard heading="DAT iQ LTL Benchmark"
        description="DAT iQ LTL Benchmark offers crucial insights into rate fluctuations in the volatile LTL market. Gain a comprehensive view of your LTL transportation network and rate performance, empowering confident, informed decisions to enhance supply chain operations."
        image="/media/images/ben4.jpg"
        reverse={true}
        items={[
          {
            title: "Executive-level reporting:",
            desc: "Contextualize and justify performance against benchmarks with leadership teams.",
          },
          {
            title: "Tactical reporting:",
            desc: "Support day-to-day operations and budget management.",
          },
          {
            title: "Deep-dive root-cause analysis:",
            desc: "Quickly identify business drivers and optimization opportunities.",
          },
        ]}/>
        <ReviewCard heading="Customer Benefits"
        description="DAT iQ Benchmark customers have access to exclusive benefits like the monthly Shipper Roundtable, bi-weekly market updates, and the DAT iQ Signal Report. A customer favorite, the DAT iQ Signal Report gives transportation professionals an overview of the state of freight to better plan ahead and assess how their operations compare to the overall marketplace. The report includes:"
        image="/media/images/analytics1.jpg"
        items={[
          {
            title: "Rate forecasts",
            
          },
          {
            title: "Spot and contract rate indices",
           
          },
          {
            title: "Inflation trends",
          },
          {
            title: "In-depth analysis from freight market experts",
          },
        ]}/>
        <Logos/>
        <FAQSection title="A few things you might be asking yourself"
  faqs={[
    {
      question: "How does DAT collect the data used in DAT iQ Benchmark?",
      answer:
        "Hundreds of North American shippers and brokers representing over $80B in annual transportation spend use DAT iQ Benchmark to compare their costs. In order to benchmark their performance, they contribute data directly to DAT, which is verified to ensure accuracy and reliability.Data contributors are always anonymous, so you can feel safe that your valuable information is never compromised.",
    },
    {
      question: "Are there other benefits for DAT iQ Benchmark customers?",
      answer:
        "Yes! All customers get access to resources, industry research and best practices, and a range of events that present plenty of opportunities to network with peers and learn best practices from other organizations.",
    },
    {
      question: "Who uses DAT iQ Benchmark?",
      answer:
        "Brokers and shippers of all sizes across all industries: Food and beverage, manufacturing, construction, automobile, consumer products, and everything in between.",
    },
    {
      question: "Can freight brokers use DAT iQ Benchmark?",
      answer:
        "Yes! There’s a package built specifically for brokerages and 3PLs looking to measure the performance of their agents against the broader market, so that they can uncover areas of profit potential.",
    },
  ]}/>
    </div>
  )
}
