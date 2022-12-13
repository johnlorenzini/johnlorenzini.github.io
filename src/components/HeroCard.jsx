import React from 'react'
import SocialBar from './SocialBar'
import Tilty from 'react-tilty';
import { isSafari } from 'react-device-detect';


function HeroCard() {
  return (
    <>
    {!isSafari ?
      <Tilty max="20" speed="900">
        <div id="card" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="800" className='m-auto flex justify-center pt-16 pb-6 cardBG shadow-xl border-2 border-white border-opacity-10 rounded-2xl'>
            <div id="inner" className='max-w-xl'>
                <a href="https://www.linkedin.com/in/jlorenzi" alt="/" target="_blank"><img src={"./img/memoji/light/memoji" + (Math.floor(Math.random()*4)+1) + ".png"} alt="" className='m-auto drop-shadow-md hover:drop-shadow-xl w-1/3 md:w-1/2 transition ease-in-out duration-500'/></a>
                <h1 className='transition ease-in-out duration-500 text-center py-5 md:py-10 text-zinc-900 dark:text-white drop-shadow-md font-bold text-2xl md:text-4xl'>hi! i'm <span className='transition-colors ease-in-out duration-300 bg-clip-text text-transparent bg-gradient-to-t from-rose-500 to-red-400 dark:from-rose-400 dark:to-red-300'>john.</span></h1>
                <a href="http://www.github.com/johnlorenzini" alt="/" target="_blank" className='text-center '> <p className='text-rose-500 dark:text-rose-400 text-sm md:text-xl font-semibold m-auto transition ease-in-out duration-500 hover:-translate-y-1 hover:drop-shadow-sm hover:underline hover:decoration-4 md:hover:underline-offset-4'>developer</p> </a>
                <p className='transition ease-in-out duration-500 text-zinc-900 dark:text-white text-center text-xs md:text-lg font-semibold'>computer science student at <a href="http://www.uci.edu" target="_blank" className='transition ease-in-out text-rose-500 dark:text-rose-400 hover:text-yellow-500 dark:hover:text-yellow-500'>uc irvine</a></p>
                <hr className="my-6 mx-28 md:mx-4 rounded-xl border-2 border-zinc-900 dark:border-white"/>
                <SocialBar />
            </div>
        </div>
      </Tilty>
      :
      <div id="card" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="800" className='m-auto flex justify-center pt-16 pb-6 cardBG shadow-xl border-2 border-white border-opacity-10 rounded-2xl'>
            <div id="inner" className='max-w-xl'>
                <a href="https://www.linkedin.com/in/jlorenzi" alt="/" target="_blank"><img src={"./img/memoji/light/memoji" + (Math.floor(Math.random()*4)+1) + ".png"} alt="" className='m-auto drop-shadow-md hover:drop-shadow-xl w-1/3 md:w-1/2 transition ease-in-out duration-500'/></a>
                <h1 className='transition ease-in-out duration-500 text-center py-5 md:py-10 text-zinc-900 dark:text-white drop-shadow-md font-bold text-2xl md:text-4xl'>hi! i'm <span className='transition-colors ease-in-out duration-300 bg-clip-text text-transparent bg-gradient-to-t from-rose-500 to-red-400 dark:from-rose-400 dark:to-red-300'>john.</span></h1>
                <a href="http://www.github.com/johnlorenzini" alt="/" target="_blank" className='text-center '> <p className='text-rose-500 dark:text-rose-400 text-sm md:text-xl font-semibold m-auto transition ease-in-out duration-500 hover:-translate-y-1 hover:drop-shadow-sm hover:underline hover:decoration-4 md:hover:underline-offset-4'>developer</p> </a>
                <p className='transition ease-in-out duration-500 text-zinc-900 dark:text-white text-center text-xs md:text-lg font-semibold'>computer science student at <a href="http://www.uci.edu" target="_blank" className='transition ease-in-out text-rose-500 dark:text-rose-400 hover:text-yellow-500 dark:hover:text-yellow-500'>uc irvine</a></p>
                <hr className="my-6 mx-28 md:mx-4 rounded-xl border-2 border-zinc-900 dark:border-white"/>
                <SocialBar/>
            </div>
      </div>
    }
    </>
  )
}

export default HeroCard