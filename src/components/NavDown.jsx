import { FaChevronDown } from 'react-icons/fa'

function NavDown({ target, delay }) {


  return (
    <div className='absolute navPad self-end'>
      <div data-aos="fade-up" data-aos-easing="ease" data-aos-duration="800" data-aos-delay={delay} className=''>
        <a href={target}>
          <FaChevronDown className='transition ease-in-out duration-300 w-8 h-8 text-purple-400 dark:text-white drop-shadow-md animate-bounce' />
        </a>
      </div>
    </div>
    
  )
}

export default NavDown