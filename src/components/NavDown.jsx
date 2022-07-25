import { FaChevronDown } from 'react-icons/fa'

function NavDown({ target, delay, anchor, refs }) {


  return (
    <div className='navPad self-center'>
      <div data-aos="fade-up" data-aos-anchor={anchor} data-aos-easing="ease" data-aos-duration="800" data-aos-delay={delay} className=''>
        <a href={target} className="text-center">
          <h1 className='text-center text-2xl py-2 font-medium drop-shadow-md text-zinc-900 dark:text-white'>{refs}</h1>
          <FaChevronDown className='mx-20 transition mb-20 md:mb-0 ease-in-out duration-300 w-8 h-8 text-zinc-900 dark:text-white drop-shadow-md animate-bounce' />
        </a>
      </div>
    </div>
    
  )
}

export default NavDown