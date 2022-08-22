import React from 'react'
import HeroCard from './HeroCard'
import NavDown from './NavDown'

function HeroSection() {
  return (
    <div id="about" className='min-h-screen flex flex-col justify-center items-center'>
      <div className='my-auto w-2/3 md:w-3/5'>
        <HeroCard></HeroCard>
      </div>
      <div className='hidden md:flex pb-10'>
        <NavDown target="#skills" delay="500" anchor={"#card"} refs="skills"></NavDown>
      </div>
      
  
    </div>
  )
}

export default HeroSection