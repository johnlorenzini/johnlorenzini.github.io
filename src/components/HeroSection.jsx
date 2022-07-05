import React from 'react'

export default function HeroSection({theme}) {
  return (
    <div className='flex flex-col h-screen md:grid md:grid-cols-6 py-20 items-center md:items-end justify-center md:content-center place-items-center'>
      <div id="image" className='md:col-start-1 lg:col-start-1 lg:col-span-3 md:col-span-3'>  
        <img src='/src/refs/pfp.png' alt='headshot' className='sm:translate-y-0 hover:shadow-md md:hover:shadow-lg hover:shadow-emerald-400 md:hover:shadow-emerald-400 dark:hover:shadow-green-400 w-64 m-auto sm:w-80 md:w-96 lg:w-96 transition ease-in-out duration-300 rounded-full border-4 md:border-8 border-emerald-400 dark:border-green-400 hover:scale-105' />
      </div>
      <div id="text" className='col-start-4 col-span-3 md:pr-20 -translate-y-10 sm:translate-y-4 md:translate-y-0'>
        <h1 className='text-center md:text-right   transition ease-out sm:hover:drop-shadow-xl duration-300 scale-50 sm:scale-75 truncate md:scale-75 lg:scale-100 text-8xl text-green-400 dark:text-emerald-400 font-extrabold lg:translate-x-0 sm:-translate-y-1 md:translate-x-16 xs:translate-y-8 md:translate-y-4 lg:translate-y-0 sm:hover:scale-90 lg:hover:scale-110'>john
        <br/><span className='text-emerald-400 dark:text-green-400 '>lorenzini</span>
        </h1>
        <div id="icons" className='pb-5 md:pb-10 flex flex-row justify-center md:justify-end'>
          <a href='https://www.linkedin.com/in/jlorenzi/' target='_blank' rel='noopener noreferrer' className=''>
            <img src={theme === "light" ? "/src/refs/dark/linkedin.png" : "/src/refs/dark/linkedin.png"} alt="connect on linkedin" className="hover:drop-shadow-xl transition duration-300 ease-in-out saturate-0 dark:brightness-200 hover:scale-110 dark:invert-0 dark:hover:brightness-100 hover:invert-0 hover:cursor-pointer hover:saturate-100 invert mx-2 w-8 md:pt-2 sm:w-10"></img>
          </a>
          <a href='https://github.com/johnlorenzini' target='_blank' rel='noopener noreferrer' className=''>
            <img src={theme === "light" ? "/src/refs/light/github.png" : "/src/refs/dark/github.png"} alt="my code on github" className="hover:drop-shadow-xl transition duration-300 ease-in-out saturate-0 dark:brightness-200 hover:scale-110 dark:invert-0 dark:hover:brightness-100 hover:invert-0 hover:cursor-pointer hover:saturate-100 invert mx-2 w-8 md:pt-2 sm:w-10"></img>
          </a>
          <a href='https://www.instagram.com/johnloren99/' target='_blank' rel='noopener noreferrer' className=''>
            <img src={theme === "light" ? "/src/refs/light/instagram.png" : "/src/refs/dark/instagram.png"} alt="follow my instagram" className="hover:drop-shadow-xl transition duration-300 ease-in-out saturate-0 dark:brightness-200 hover:scale-110 dark:invert-0 dark:hover:brightness-100 hover:invert-0 hover:cursor-pointer hover:saturate-100 invert mx-2 w-8 md:pt-2 sm:w-10"></img>
          </a>
        </div>
        <p className='transition ease-in-out duration-300 font-bold text-center md:text-right text-zinc-700 dark:text-zinc-50 text-sm px-10 md:px-0 sm:text-lg'>developer</p>
        <p className='transition ease-in-out duration-300 font-medium text-center md:text-right text-zinc-700 dark:text-zinc-50 text-sm px-10 md:px-0 sm:text-lg'>computer science student at <a href="https://www.uci.edu" target="_blank" className="font-bold underline decoration-2 underline-offset-2 md:underline-offset-4 md:decoration-4 decoration-emerald-400 dark:decoration-green-400 hover:decoration-yellow-500 dark:hover:decoration-yellow-500">uc irvine</a></p>
      </div>
    </div>
  )
}
