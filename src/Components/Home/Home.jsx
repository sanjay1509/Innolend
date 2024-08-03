import React from 'react'
import Hero from '../Herosection/Hero'
import Features from '../Features/Features'
import Services from '../Services/Services'
import Reviews from '../Reviews/borrow-reviews'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <Services/>
        <Reviews/>
    </div>
  )
}

export default Home