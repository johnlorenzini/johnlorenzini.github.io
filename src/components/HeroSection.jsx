import React from 'react'
import HeroCard from './HeroCard'
import NavDown from './NavDown'

function HeroSection({theme}) {
  return (
    <div id="about" className='min-h-screen flex flex-col justify-center items-center'>
      <div className='my-auto w-2/3 md:w-3/5'>
        <HeroCard theme={theme}></HeroCard>
      </div>
      <NavDown target="#skills" delay="500" anchor={"#card"} refs="skills"></NavDown>
  
    </div>
  )
}

export default HeroSection