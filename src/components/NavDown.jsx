import { FaChevronDown } from 'react-icons/fa'

function NavDown({ target, delay, anchor }) {


  return (
    <div className='navPad self-center'>
      <div data-aos="fade-up" data-aos-anchor={anchor} data-aos-easing="ease" data-aos-duration="800" data-aos-delay={delay} className=''>
        <a href={target}>
          <FaChevronDown className='transition ease-in-out duration-300 w-8 h-8 text-white dark:text-zinc-900 drop-shadow-md animate-bounce' />
        </a>
      </div>
    </div>
    
  )
}

export default NavDown