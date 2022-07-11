import React from 'react'
import SocialBar from './SocialBar'

function HeroCard({theme}) {
  return (
    <div data-aos="fade-up" data-aos-easing="ease" data-aos-duration="800" id="outer" className='snap-center m-auto flex justify-center min-w-[60%] max-w-[85%] max-h-[75%] py-10 cardBG shadow-xl border-2 border-white border-opacity-10 rounded-2xl'>
        <div id="inner" className='max-w-xl'>
            <img src={theme === "light" ? "./src/memoji/light/memoji" + (Math.floor(Math.random()*4)+1) + ".png" : "./src/memoji/dark/memoji" + (Math.floor(Math.random()*4)+1) + ".png"} alt="" className='m-auto drop-shadow-xl w-1/3 md:w-1/2 transition ease-in-out duration-300 hover:scale-100 hover:-translate-y-3'/>
            <h1 className='transition ease-in-out duration-300 text-center py-5 md:py-10 text-[#1D062E] dark:text-white drop-shadow-md font-bold text-2xl md:text-4xl'>hi! i'm <span className='transition ease-in-out text-purple-400 dark:text-purple-900'>john.</span></h1>
            <a href="http://www.github.com/johnlorenzini" alt="/" target="_blank" className='text-center '> <p className='text-purple-400 dark:text-purple-900 text-sm md:text-xl font-semibold m-auto transition ease-in-out duration-300 hover:-translate-y-1 hover:drop-shadow-sm hover:underline hover:decoration-4 hover:underline-offset-4'>developer</p> </a>
            <p className='transition ease-in-out duration-300 text-[#1D062E] dark:text-white text-center text-xs md:text-lg font-semibold'>computer science student at <a href="http://www.uci.edu" target="_blank" className='transition ease-in-out text-purple-400 dark:text-purple-900 hover:text-yellow-500 dark:hover:text-yellow-500'>uc irvine</a></p>
            <hr className='my-10 rounded-xl border-2 dark:border-white border-[#1D062E]'/>
            <SocialBar></SocialBar>
        </div>
    </div>

  )
}

export default HeroCard