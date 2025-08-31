import React from 'react'
import HeroReview from '../../Datiq/review/HeroReview'
import ReviewCard from '../../Datiq/review/ReviewCard1'
import Logos from '../../Datone/Logos' 
import FAQSection from '../../Datiq/review/ReviewQuestions'

export default function AuthorityPage() {
  return (
    <div>
     <HeroReview 
                     imageSrc="/media/images/analytics1.jpg"
                     altText="Trucking Services"
                     heading="DAT Copilot™ Authority Program"
                     description1="Few journeys are as rewarding as starting your own business. Getting your operating authority can be a complicated process – it helps to have a copilot."
                     description2="DAT has been supporting freight businesses for over 45 years. We’ll guide you through it all with expert advice, and then support you after your venture begins."
                     primaryBtnText="SCEDULE A CONSULTATION"
                     secondaryBtnText="Learn More" />

             <ReviewCard heading="The copilot you didn’t know you needed"
                     description="There’s no reason to start your journey alone. We’ll guide you through the hard stuff – handling the proper paperwork and permits – and then stay with you once you hit the road."
                     image="/media/images/trackcing.png"
                     items={[
                       {
                         title: "Book the best loads on North America’s largest load board",
                         desc: "Find profitable loads anywhere on DAT One and save 50% for your first 6 months.",
                       },
                       {
                         title: "Get non-recourse factoring",
                         desc: "Boost your business with factoring. Get paid in as little as 15 minutes and get rates as low as 1%.",
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
