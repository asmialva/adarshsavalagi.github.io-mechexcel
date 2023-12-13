import React from 'react'
import Hero from '../Components/Hero'
import Contact from '../Components/Contact'
import About from '../Components/About'

export default function HomePage() {
  return (
    <div className='container md:w-11/12 mx-auto'>
      <Hero/>
     <Contact/>
    </div>
  )
}
