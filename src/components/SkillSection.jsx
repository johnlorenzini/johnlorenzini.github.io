import React from 'react'

function SkillSection() {
  return (
    <div className='h-screen bg-emerald-400 dark:bg-green-400 shadow-2xl shadow-emerald-400 dark:shadow-green-400'>
        <div className='pt-6 md:pt-0 flex flex-col md:grid md:grid-cols-3 items-center md:items-start'>
            <h1 className='md:col-start-2 hover:drop-shadow-2xl text-center transition ease-in-out duration-300 text-4xl sm:text-6xl lg:text-8xl mb-1 pt-5 md:pt-20 md:pb-20 text-zinc-50 dark:text-zinc-700 font-bold hover:scale-110'>
                skills
            </h1>
        </div>
            
        <div id="skills" className=' py-20 items-center md:items-end justify-center md:content-center'>

        </div>
    </div>
  )
}

export default SkillSection