import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Welcome from '@/components/Welcome'
import WhyUs from '@/components/Why'
import Form from '@/components/form'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <WhyUs/>
      <Gallery />
      <Form />
    </div>
  )
}

export default page