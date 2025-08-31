import React from 'react'
import TrackingHero from './TrackingHero'
import TrackingingSmart from './TrackingSmart'
import TrackingingFraud from './TrackingFraud'
import TrackingSmoother from './TrackingSmoother'

export default function TrackingPage() {
  return (
    <div>
      <TrackingHero/>
      <TrackingingSmart/>
      <TrackingingFraud/>
      <TrackingSmoother/>
    </div>
  )
}
