import React from 'react'
import {AiFillLinkedin, AiFillInstagram, AiOutlineGithub, AiFillFilePdf} from 'react-icons/ai'
import { MdEmail }  from 'react-icons/md'
import { useState } from 'react'

function SocialBar() {
  const [id, setId] = useState("");
  function setHover(event){
    setId(event.target.id);
  }
  function setExit(event){
    if(id === event.target.id){
      setId("");
    }
  }
  return (
    <>
    <div className='flex h-auto flex-row justify-evenly content-center text-2xl md:text-4xl px-32 md:px-14 text-rose-500 dark:text-rose-400'>
      <a onMouseEnter={setHover} onMouseLeave={setExit} id='resume' download href='./john_lorenzini_resume.pdf' className='transition ease-in-out duration-500 p-2 rounded-full hover:bg-rose-500 dark:hover:bg-rose-400 hover:text-white dark:hover:text-white hover:scale-110 hover:-translate-y-2'><AiFillFilePdf /></a>
      <a onMouseEnter={setHover} onMouseLeave={setExit} id='github' href="https://www.github.com/johnlorenzini" target="_blank" className='transition ease-in-out duration-500 p-2 rounded-full hover:bg-zinc-600 hover:text-white dark:hover:text-white hover:scale-110 hover:-translate-y-2'><AiOutlineGithub></AiOutlineGithub></a>
      <a onMouseEnter={setHover} onMouseLeave={setExit} id='linkedin' href="https://www.linkedin.com/in/jlorenzi" target="_blank" className='transition ease-in-out duration-500 p-2 rounded-full hover:bg-blue-600 hover:text-white dark:hover:text-white hover:scale-110 hover:-translate-y-2'><AiFillLinkedin></AiFillLinkedin></a>
      <a onMouseEnter={setHover} onMouseLeave={setExit} id='instagram' href="https://www.instagram.com/johnloren99" target="_blank" className='transition ease-in-out duration-500 p-2 rounded-full hover:bg-gradient-to-tr hover:from-orange-500 hover:via-pink-600 hover:to-purple-600 hover:text-white dark:hover:text-white hover:scale-110 hover:-translate-y-2'><AiFillInstagram></AiFillInstagram></a>        
      <a onMouseEnter={setHover} onMouseLeave={setExit} id='email' href="https://mail.google.com/mail/?view=cm&fs=1&to=lorenzinijd@gmail.com" target="_blank" className='transition ease-in-out duration-500 p-2 rounded-full hover:bg-emerald-600 hover:text-white dark:hover:text-white hover:scale-110 hover:-translate-y-2' ><MdEmail /></a>
    </div>
    <div className='h-10 flex items-center justify-center'>
      <h1 className='font-medium text-lg md:text-xl text-rose-500 dark:text-rose-400'>{id}</h1>
    </div>
    </>
  )
}

export default SocialBar