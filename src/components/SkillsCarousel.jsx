import { 
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

function SkillsCarousel() {
  return (
    <div id="skills" className='w-2/3 flex flex-col md:grid md:gap-x-10 md:grid-rows-2 md:grid-cols-4 justify-center'>
        <div id="dev" data-aos="fade-down" data-aos-easing="ease" data-aos-duration="800" data-aos-anchor="#skills" className='transition ease-in-out my-auto duration-300 mb-6 mt-2 col-start-2 col-span-2 row-start-1 row-span-1 cardBG shadow-xl border-2 border-white border-opacity-10 rounded-2xl'>
            <h1 className='transition ease-in-out duration-500 text-center text-zinc-900 dark:text-white text-3xl md:text-4xl font-semibold pt-4'>code.</h1>
            <hr className='transition ease-in-out duration-500 rounded-xl border-2 my-4 border-zinc-900 dark:border-white'/>
            <div id="skillgrid" className="mx-auto transition ease-in-out duration-500 text-4xl md:text-5xl grid grid-cols-3 grid-rows-3 justify-items-center gap-2 md:gap-8 text-rose-500 dark:text-rose-400">
              <SiPython id="python" />
              <SiJava id="java" />
              <SiCplusplus id="c++" />
              <SiSwift id="swift" />
              <SiReact id="react" />
              <SiTailwindcss id="tailwind" />
              <SiHtml5 id="html" />
              <SiCss3 id="css" />
              <SiJavascript id="javascript"/>
            </div>
            <div id="title" className="mt-10 font-medium justify-center">
            </div>            
        </div>
        <div id="tech" data-aos="fade-up-right" data-aos-easing="ease" data-aos-duration="800" data-aos-anchor="#dev" className='transition my-auto ease-in-out duration-300 mb-6 col-start-1 col-span-2 row-start-2 row-span-1 cardBG shadow-xl border-2 border-white border-opacity-10 rounded-2xl'>
            <h1 className='transition ease-in-out duration-500 text-center text-zinc-900 dark:text-white text-3xl md:text-4xl font-semibold pt-4'>tech.</h1>
            <hr className='transition ease-in-out duration-500 rounded-xl border-2 my-4 border-zinc-900 dark:border-white'/>
            <div id="skillgrid" className="mx-auto transition ease-in-out duration-500 text-4xl md:text-5xl grid grid-cols-3 grid-rows-3 mb-4 justify-items-center gap-4 md:gap-8 text-rose-500 dark:text-rose-400">
              <SiGit id="git" />
              <SiJupyter id="jupyter" />
              <SiFirebase id="firebase" />
              <SiGithub id="github" />
              <SiXcode id="xcode" />
              <SiVisualstudiocode id="visual studio code" />
            </div>
            <div id="title" className="mt-10 font-medium justify-center">              
            </div>
        </div>
        <div id="creative" data-aos="fade-up-left" data-aos-easing="ease" data-aos-duration="800" data-aos-anchor="#dev" className='transition my-auto ease-in-out duration-300 mb-6 col-start-3 col-span-2 row-start-2 row-span-1 cardBG shadow-xl border-2 border-white border-opacity-10 rounded-2xl'>
            <h1 className='transition ease-in-out duration-500 text-center text-zinc-900 dark:text-white text-3xl md:text-4xl font-semibold pt-4'>creative.</h1>
            <hr className='transition ease-in-out duration-500 rounded-xl border-2 my-4 border-zinc-900 dark:border-white'/>
            <div id="skillgrid" className="mx-auto transition ease-in-out duration-500 text-4xl md:text-5xl grid grid-cols-3 grid-rows-3 mb-4 justify-items-center gap-4 md:gap-8 text-rose-500 dark:text-rose-400">
              <SiFigma />
              <SiAdobephotoshop />
              <SiAdobepremierepro />
            </div>
            <div id="title" className="mt-10 font-medium justify-center">              
            </div>
        </div>
    </div>
  )
}

export default SkillsCarousel