import React from 'react'
import SocialBar from './SocialBar'

function HeroCard({theme}) {
  return (
    <>
      <div id="card" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="800" className='m-auto flex justify-center py-16 cardBG shadow-xl border-2 border-white border-opacity-10 rounded-2xl'>
          <div id="inner" className='max-w-xl'>
              <img src={theme === "light" ? "./img/memoji/light/memoji" + (Math.floor(Math.random()*4)+1) + ".png" : "./img/memoji/dark/memoji" + (Math.floor(Math.random()*4)+1) + ".png"} alt="" className='m-auto drop-shadow-xl w-1/3 md:w-1/2 transition ease-in-out duration-500 hover:scale-100 hover:-translate-y-3'/>
              <h1 className='transition ease-in-out duration-500 text-center py-5 md:py-10 text-zinc-900 dark:text-white drop-shadow-md font-bold text-2xl md:text-4xl'>hi! i'm <span className='transition ease-in-out text-purple-500 dark:text-purple-900'>john.</span></h1>
              <a href="http://www.github.com/johnlorenzini" alt="/" target="_blank" className='text-center '> <p className='text-purple-500 dark:text-purple-900 text-sm md:text-xl font-semibold m-auto transition ease-in-out duration-500 hover:-translate-y-1 hover:drop-shadow-sm hover:underline hover:decoration-4 md:hover:underline-offset-4'>developer</p> </a>
              <p className='transition ease-in-out duration-500 text-zinc-900 dark:text-white text-center text-xs md:text-lg font-semibold'>computer science student at <a href="http://www.uci.edu" target="_blank" className='transition ease-in-out text-purple-500 dark:text-purple-900 hover:text-yellow-500 dark:hover:text-yellow-500'>uc irvine</a></p>
              <hr className='transition ease-in-out duration-500 mx-20 my-6 md:mx-4 md:my-10 rounded-xl border-2 border-zinc-900 dark:border-white'/>
              <SocialBar></SocialBar>
          </div>
      </div>
    </>
  )
}

export default HeroCard