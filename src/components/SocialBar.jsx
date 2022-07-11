import React from 'react'
import {AiFillLinkedin, AiFillInstagram, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'

function SocialBar() {
  return (
    <div className='flex h-auto flex-row justify-evenly content-center text-2xl md:text-4xl px-32 md:px-14 text-purple-500 dark:text-purple-900'>
      <a href="https://www.github.com/johnlorenzini" target="_blank" className='transition ease-in-out duration-500 p-2 rounded-full hover:bg-zinc-600 hover:text-white dark:hover:text-white hover:scale-110 hover:-translate-y-2'><AiOutlineGithub></AiOutlineGithub></a>
      <a href="https://www.linkedin.com/in/jlorenzi" target="_blank" className='transition ease-in-out duration-500 p-2 rounded-full hover:bg-blue-600 hover:text-white dark:hover:text-white hover:scale-110 hover:-translate-y-2'><AiFillLinkedin></AiFillLinkedin></a>
      <a href="https://www.instagram.com/johnloren99" target="_blank" className='transition ease-in-out duration-500 p-2 rounded-full hover:bg-gradient-to-tr hover:from-orange-500 hover:via-pink-600 hover:to-purple-600 hover:text-white dark:hover:text-white hover:scale-110 hover:-translate-y-2'><AiFillInstagram></AiFillInstagram></a>        
    </div>
  )
}

export default SocialBar