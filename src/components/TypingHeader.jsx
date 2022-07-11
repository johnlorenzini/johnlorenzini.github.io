import NavDown from './NavDown'

function TypingHeader() {
  return (
    
    <div className='h-screen flex flex-col justify-center items-center pb-10'>
        <div id="type" className = 'type my-auto border-r-4 border-purple-400 dark:border-white'>
          <span className='transition ease-in-out duration-300 underline underline-offset-2 decoration-4 text-white dark:text-zinc-900 font-semibold'>john lorenzini.</span>
        </div>
        <div className=''>
          <NavDown target="#about" delay="2200" anchor={"#type"}></NavDown>
        </div>
        
    </div>
  )
}

export default TypingHeader