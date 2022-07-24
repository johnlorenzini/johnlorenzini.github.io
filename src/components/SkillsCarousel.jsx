import { 
  SiApple, 
  SiAdobephotoshop, 
  SiAdobepremierepro, 
  SiPython, 
  SiJava, 
  SiCplusplus, 
  SiSwift, 
  SiReact, 
  SiTailwindcss, 
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiGithub,
  SiJupyter,
  SiFirebase,
  SiXcode,
  SiVisualstudiocode,
  SiFigma
} from "react-icons/si"
import {useState} from 'react'

function SkillsCarousel() {
  const [hoverDev, setHoverDev] = useState(false);
  const [hoverTech, sethoverTech] = useState(false);
  const [hoverCreative, sethoverCreative] = useState(false);

  return (
    <div id="skills" className='w-2/3 flex flex-col md:grid md:gap-x-10 md:grid-rows-2 md:grid-cols-4 justify-center'>
        <div id="dev" className='transition ease-in-out my-auto duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl mb-6 mt-2 col-start-2 col-span-2 row-start-1 row-span-1 cardBG shadow-xl border-2 border-white border-opacity-10 rounded-2xl'>
            <h1 className='transition ease-in-out duration-500 text-center text-zinc-900 dark:text-white text-3xl md:text-4xl font-semibold pt-4'>coding</h1>
            <hr className='transition ease-in-out duration-500 rounded-xl border-2 my-4 border-zinc-900 dark:border-white'/>
            <div id="skillgrid" className="mx-auto transition ease-in-out duration-500 text-4xl md:text-5xl grid grid-cols-3 grid-rows-3 justify-items-center gap-2 md:gap-8 text-rose-500 dark:text-purple-900">
              <SiPython />
              <SiJava />
              <SiCplusplus />
              <SiSwift />
              <SiReact />
              <SiTailwindcss />
              <SiHtml5 />
              <SiCss3 />
              <SiJavascript />
            </div>
            <div id="title" className="mt-10 font-medium justify-center">
              <h1 className="text-center"></h1>
            </div>            
        </div>
        <div id="tech" className='transition my-auto ease-in-out duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl mb-6 col-start-1 col-span-2 row-start-2 row-span-1 cardBG shadow-xl border-2 border-white border-opacity-10 rounded-2xl'>
            <h1 className='transition ease-in-out duration-500 text-center text-zinc-900 dark:text-white text-3xl md:text-4xl font-semibold pt-4'>technology</h1>
            <hr className='transition ease-in-out duration-500 rounded-xl border-2 my-4 border-zinc-900 dark:border-white'/>
            <div id="skillgrid" className="mx-auto transition ease-in-out duration-500 text-4xl md:text-5xl grid grid-cols-3 grid-rows-3 mb-4 justify-items-center gap-4 md:gap-8 text-rose-500 dark:text-purple-900">
              <SiGit />
              <SiJupyter />
              <SiFirebase />
              <SiGithub />
              <SiXcode />
              <SiVisualstudiocode />
            </div>
        </div>
        <div id="create" className='transition my-auto ease-in-out duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl mb-6 col-start-3 col-span-2 row-start-2 row-span-1 cardBG shadow-xl border-2 border-white border-opacity-10 rounded-2xl'>
            <h1 className='transition ease-in-out duration-500 text-center text-zinc-900 dark:text-white text-3xl md:text-4xl font-semibold pt-4'>creative</h1>
            <hr className='transition ease-in-out duration-500 rounded-xl border-2 my-4 border-zinc-900 dark:border-white'/>
            <div id="skillgrid" className="mx-auto transition ease-in-out duration-500 text-4xl md:text-5xl grid grid-cols-3 grid-rows-3 mb-4 justify-items-center gap-4 md:gap-8 text-rose-500 dark:text-purple-900">
              <SiFigma />
              <SiAdobephotoshop />
              <SiAdobepremierepro />
            </div>
        </div>
    </div>
  )
}

export default SkillsCarousel