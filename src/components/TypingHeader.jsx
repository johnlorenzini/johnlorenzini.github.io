import NavDown from './NavDown'

function TypingHeader() {
  return (
    
    <div className='h-screen flex flex-col justify-center items-center pb-10'>
        <div id="type" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="800" className='type my-auto border-r-8 dark:border-white border-zinc-900'>
          <h1 className='text-4xl transition ease-in-out duration-300 underline underline-offset-2 decoration-8 text-zinc-900 dark:text-white font-semibold'>john lorenzini.</h1>
        </div>
        <div className='pb-12'>
          <NavDown target="#about" delay="1000" anchor={"#type"} refs="about"></NavDown>
        </div>
        
    </div>
  )
}

export default TypingHeader