import React from 'react'
import CardSection from './CardSection'

export default function Cards() {
  return (
    <div>
      {/* Heading + Paragraph */}
      <div className='mt-10 py-8 px-4 sm:px-8 md:px-16 lg:px-40 md:ml-10'>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl mt-6'>
          We’re With You Every Step of The Way
        </h1>
        <p className='max-w-2xl mt-4 text-sm sm:text-base'>
          Our unwavering commitment to you means we provide support and guidance from start to finish, 
          ensuring a successful outcome every step of the way.
        </p>
      </div>
      {/* Cards Section */}
      <div className='flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-10 mt-10 mb-10 px-4'>
        <CardSection />
        <CardSection />
        <CardSection />
      </div>
    </div>
  )
}
