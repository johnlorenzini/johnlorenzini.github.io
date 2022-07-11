import React from 'react'
import HeroCard from './HeroCard'
import NavDown from './NavDown'

function HeroSection({theme}) {
  return (
    <div id="about" className='min-h-screen flex items-center justify-center pb-10'>
        <HeroCard theme={theme}></HeroCard>
        <NavDown target="#skills" delay="100"></NavDown>
    </div>
  )
}

export default HeroSection