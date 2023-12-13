import React from 'react'
import Hero from '../Components/Hero'
import Contact from '../Components/Contact'
import Services from '../Components/Services'

export default function HomePage() {
  return (
    <div className='container w-11/12  mx-auto'>
      <Hero/>
      <Services/>
     <Contact/>
    </div>
  )
}
