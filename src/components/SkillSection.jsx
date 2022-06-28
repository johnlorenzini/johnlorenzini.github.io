import React from 'react'

function SkillSection() {
  return (
    <div className='snap-always snap-start h-screen bg-emerald-400 dark:bg-green-400 shadow-2xl shadow-emerald-400 dark:shadow-green-400'>
        <div className='pt-6 md:pt-0 flex flex-col md:grid md:grid-cols-3 items-center md:items-start'>
            <h1 className='md:col-start-2 text-center transition ease-in-out duration-300 text-4xl sm:text-6xl lg:text-8xl mb-1 pt-5 md:pt-20 md:pb-20 text-zinc-50 dark:text-zinc-700 font-bold '>
                skills
            </h1>
        </div>
            
        <div id="skills" className='flex flex-col md:grid md:grid-cols-3 md:grid-rows-2'>
            <div id="dev" className='my-5 md:my-0 transition ease-in-out duration-300 rounded-md mx-20 row-start-1 col-start-2 col-span-1 bg-zinc-100 dark:bg-zinc-700 hover:shadow-2xl hover:scale-110'>
                <h1 className='text-center text-emerald-400 dark:text-green-400 font-bold pt-5 pb-1 text-md md:text-2xl'>development</h1>
                <hr className='rounded border-2 border-emerald-400 dark:border-green-400 mb-5 mx-6'></hr>
                <div id="grid" className='mx-20 grid grid-cols-3 grid-rows-3 gap-0 justify-items-center text-zinc-700 dark:text-zinc-100'>
                    <i class="devicon-python-plain font-2xl"></i>
                    <i class="devicon-cplusplus-plain"></i>
                    <i class="devicon-java-plain"></i>
                </div>
            </div>
            <div id="tech" className='my-5 md:my-0 transition ease-in-out duration-300 rounded-md mx-20 row-start-2 col-start-1 col-span-1 bg-zinc-100 dark:bg-zinc-700 hover:shadow-2xl hover:scale-110'>
                <h1 className='text-center text-emerald-400 dark:text-green-400 font-bold pt-5 pb-1 text-md md:text-2xl'>technologies</h1>
                <hr className='rounded border-2 border-emerald-400 dark:border-green-400 mb-5 mx-6'></hr>
                <div id="grid" className='px-5 py-5 grid grid-cols-3 grid-rows-3 gap-3 justify-items-stretch'>

                </div>
            </div>
            
            <div id="creative" className='my-5 md:my-0 transition ease-in-out duration-300 rounded-md mx-20 row-start-2 col-start-3 col-span-1 bg-zinc-100 dark:bg-zinc-700 hover:shadow-2xl hover:scale-110'>
                <h1 className='text-center text-emerald-400 dark:text-green-400 font-bold pt-5 pb-1 text-md md:text-2xl'>creative</h1>
                <hr className='rounded border-2 border-emerald-400 dark:border-green-400 mb-5 mx-6'></hr>
                <div id="grid" className='px-5 py-5 grid grid-cols-3 grid-rows-3 gap-3 justify-items-stretch'>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillSection