import NavDown from './NavDown'

function TypingHeader() {
  return (
    
    <div className='h-screen flex justify-center pb-10'>
        
        <div id="type" className = 'type flex-auto absolute self-center border-r-4 border-purple-400 dark:border-white'>
            <span className='transition ease-in-out duration-300 underline underline-offset-2 decoration-4 text-purple-400 dark:text-white font-semibold'>john lorenzini.</span>
        </div>
        <NavDown target="#about" delay="2500"></NavDown>
    </div>
  )
}

export default TypingHeader