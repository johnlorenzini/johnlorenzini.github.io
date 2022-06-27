import React from 'react'

export default function HeroSection() {
  return (
    <div className='flex flex-col md:flex-row justify-evenly py-20 pt-40'>
      <div id="image" className='basis-1/2 items-center'>
        <a>
          <img src="../refs/dond.jpg"></img>
        </a>
      </div>
      <div id="text" className='basis-1/4 items-end'>
        <h1 className='text-right transition ease-in-out text-6xl md:text-8xl mb-1 md:mb-3 text-green-400 dark:text-emerald-400 font-bold hover:scale-110'>john</h1>
        <h1 className='text-right transition ease-in-out text-6xl md:text-8xl mb-1 md:mb-3 text-emerald-400 dark:text-green-400 font-bold hover:scale-110'>lorenzini</h1>
        <p className='text-right text-emerald-600 dark:text-green-300 text-sm md:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis modi vero distinctio commodi sint hic eligendi ut reprehenderit explicabo. Facilis accusamus blanditiis perspiciatis voluptas dignissimos molestias magnam numquam exercitationem. Commodi.</p>
      </div>
    </div>
  )
}
