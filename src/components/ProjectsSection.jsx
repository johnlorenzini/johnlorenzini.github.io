import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard';
import getRepositories from "../api";
import { FaChevronUp } from 'react-icons/fa'


function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [fetching, setFetching] = useState(true);
  
  useEffect(() => {
    if(fetching){
      getRepositories("johnlorenzini")
      .then((result) => {
        setProjects(result);
        setFetching(false);
      })
      .catch((error) => {
        console.log('ERROR:', error);
      });
    }
  }, [projects]);
  return (
    <div id="projects" className='min-h-screen flex flex-col justify-center items-center'>
      <div id="grid" className='grid grid-cols-1 md:grid-cols-2'>
      {projects.map((item, index) => (
        <ProjectCard key={index} title={item.name} description={item.description} tags={item.topics} link={item.repo_url} />
      ))}
      </div>

      <div className='pt-8 invisible md:visible'>
        <div className='navPad self-center'>
          <div data-aos="fade-up" data-aos-easing="ease" data-aos-duration="800" className=''>
            <a href="#top" className="text-center">
              <h1 className='text-center text-2xl py-2 font-medium drop-shadow-md text-zinc-900 dark:text-white'>home</h1>
              <FaChevronUp className='mx-20 transition mb-20 md:mb-0 ease-in-out duration-300 w-8 h-8 text-zinc-900 dark:text-white drop-shadow-md animate-bounce' />
            </a>
          </div>
        </div>
      </div>
      <div className='pb-24'>
      </div>
    </div>
    
  )
}

export default ProjectsSection