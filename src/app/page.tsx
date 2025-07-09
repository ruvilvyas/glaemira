import Hero from '@/components/hero'
import React from 'react'
import CollectionsGrid from './products/page'
import FeaturedProducts from '@/components/Products'
import ServiceIconsStrip from '@/components/ServiceIconsStrip'
import Showcase from '@/components/Showcase'
import Testimonials from '@/components/Testimonial'
import Header from '@/components/header'

export default function Home() {
  return (
    <div>
      <Header/>
    <Hero/>
<CollectionsGrid/>
<FeaturedProducts/>
<ServiceIconsStrip/>
<Showcase/>
<Testimonials/>
    </div>
  )
}
