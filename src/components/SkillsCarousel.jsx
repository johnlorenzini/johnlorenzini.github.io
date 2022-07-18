function SkillsCarousel() {
  return (
    <div id="card" className='m-auto flex flex-col md:grid md:grid-rows-2 md:grid-cols-3 justify-center'>
        <div id="dev" className='px-24 col-start-2 col-span-1 row-start-1 row-span-1 cardBG shadow-xl border-2 border-white border-opacity-10 rounded-2xl'>
            <h1 className='text-zinc-900 dark:text-white text-center text-2xl md:text-4xl'>development</h1>
        </div>
        <div id="tech" className='px-24 col-start-1 col-span-1 row-start-2 row-span-1 cardBG shadow-xl border-2 border-white border-opacity-10 rounded-2xl'>
            <h1 className='text-zinc-900 dark:text-white text-center text-2xl md:text-4xl'>technology</h1>
        </div>
        <div id="create" className='px-24 col-start-3 col-span-1 row-start-2 row-span-1 cardBG shadow-xl border-2 border-white border-opacity-10 rounded-2xl'>
            <h1 className='text-zinc-900 dark:text-white text-center text-2xl md:text-4xl'>creative</h1>
        </div>
    </div>
  )
}

export default SkillsCarousel