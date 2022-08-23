import React from 'react'
import { TbExternalLink } from 'react-icons/tb'

const ProjectCard = ({title, description, tags, link}) => {
    function checkTag(tag, index){
        if(tag !== "portfolio-project"){
            return( <span key={index} className="text-rose-500 dark:text-rose-400 text-sm px-4 py-1 border-2 border-rose-500 dark:border-rose-400 rounded-full">{tag}</span> );
        }
        else{
            return
        }
        
    }
  return (
    <div data-aos="fade-up" data-aos-easing="ease" data-aos-duration="800" className="transition ease-in-out duration-500 pCard w-2/3 md:w-3/4 shadow-xl  m-4 mx-auto p-6 rounded-xl cardBG">
        <a href={link} target="_blank">
            <h1 className='text-xl text-center font-semibold text-zinc-900 dark:text-white'>{title}<TbExternalLink className='ml-1 inline align-top text-rose-500 dark:text-rose-400'/></h1>
        </a>
        <hr className="my-4 border-2 border-zinc-900 dark:border-white"/>
        <p className='text-zinc-900 dark:text-white'>{description}</p>
        <div className="description mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
            {tags.map((tag, index) => (
                checkTag(tag, index)
            ))}
        </div>

    </div>
  )
}

export default ProjectCard;