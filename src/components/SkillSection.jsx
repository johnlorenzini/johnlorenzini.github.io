import React, { useState } from 'react'

function SkillSection({theme}) {
    const [hoverDev, sethoverDev] = useState(false);
    const [hoverTech, sethoverTech] = useState(false);
    const [hoverCreative, sethoverCreative] = useState(false);
    const [id, setId] = useState("null");

    function MouseEnter(event){
        console.log(event.target.parentElement.id);
        if(event.target.parentElement.id === "dev"){
            console.log("found")
            sethoverDev(true);
        }
        else if(event.target.parentElement.id === "tech"){
            sethoverTech(true); 
        }
        else{
            sethoverCreative(true);
        }
        
        setId(event.target.id);
        
    }
    function MouseLeave(event){
        if(event.target.parentElement.id === "dev"){
            sethoverDev(false);
        }
        else if(event.target.parentElement.id === "tech"){
            sethoverTech(false); 
        }
        else{
            sethoverCreative(false);
        }
    }


  return (
    <div className='transition ease-in-out duration-300 flex flex-col justify-center snap-always snap-start h-fit bg-emerald-400 dark:bg-green-400 shadow-2xl shadow-emerald-400 dark:shadow-green-400'>
        <h1 className='md:col-start-2 text-center transition ease-in-out duration-300 text-8xl sm:scale-100 scale-50 sm:pt-20 md:py-20 text-zinc-50 dark:text-zinc-700 font-bold '>
            skills
        </h1>

        <div id="skills" className='scale-90 sm:scale-100 md:grid md:grid-flow-col md:auto-cols-auto md:grid-rows-2'>
            <div id="dev" className='sm:my-10 md:my-0 md:mb-20 sm:mx-56 transition ease-in-out duration-300 rounded-md mx-20 md:mx-0 row-start-1 col-start-2 col-span-1 bg-zinc-100 dark:bg-zinc-700 hover:shadow-2xl'>
                <h2 className='text-center text-emerald-400 dark:text-green-400 font-bold pt-5 pb-1 text-md sm:text-2xl'>development</h2>
                <hr className='rounded border-2 border-emerald-400 dark:border-green-400 mb-5 mx-6'></hr>
                <div id="dev" className='px-8 grid grid-cols-3 grid-rows-4 gap-2 pb-8 pt-2 justify-items-center text-zinc-700 dark:text-zinc-100'>
                    <img id="python" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/python.png" : '/src/refs/dark/python.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="c++" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/cplusplus.png" : '/src/refs/dark/cplusplus.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="swiftUI" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/swift.png" : '/src/refs/dark/swift.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="java" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/java.png" : '/src/refs/dark/java.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="react" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/react.png" : '/src/refs/dark/react.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="tailwind" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/tailwindcss.png" : '/src/refs/dark/tailwindcss.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="html" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/html5.png" : '/src/refs/dark/html5.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="css" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/css3.png" : '/src/refs/dark/css3.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="javascript" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/javascript.png" : '/src/refs/dark/javascript.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    {hoverDev && (
                    <div className="row-start-4 col-span-3 text-emerald-400 dark:text-green-400 text-center">{id}</div>
                    )}
                </div>
                
            </div>
            <div id="tech" className='my-10 md:my-0 md:mb-20 sm:mx-56 transition ease-in-out duration-300 rounded-md mx-20 md:ml-20 md:mr-5 row-start-2 col-start-1 col-span-1 bg-zinc-100 dark:bg-zinc-700 hover:shadow-2xl'>
                <h2 className='text-center text-emerald-400 dark:text-green-400 font-bold pt-5 pb-1 text-md sm:text-2xl'>technologies</h2>
                <hr className='rounded border-2 border-emerald-400 dark:border-green-400 mb-5 mx-6'></hr>
                <div id="tech" className='px-8 sm:px-0 lg:px-8 grid grid-cols-3 grid-rows-4 gap-2 pb-8 pt-2 justify-items-center text-zinc-700 dark:text-zinc-100'>
                    <img id="firebase" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/firebase.png" : '/src/refs/dark/firebase.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="jupyter notebook" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/jupyter.png" : '/src/refs/dark/jupyter.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="git" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/git.png" : '/src/refs/dark/git.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="visual studio code" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/vscode.png" : '/src/refs/dark/vscode.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="xcode" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/xcode.png" : '/src/refs/dark/xcode.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="numpy" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/numpy.png" : '/src/refs/dark/numpy.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="anaconda" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/anaconda.png" : '/src/refs/dark/anaconda.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="unix/macOS" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/apple.png" : '/src/refs/dark/apple.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="windows" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/windows8.png" : '/src/refs/dark/windows8.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    {hoverTech && (
                    <div className="row-start-4 col-span-3 text-emerald-400 dark:text-green-400 text-center">{id}</div>
                    )}
                    
                </div>
            </div>
            
            <div id="creative" className='my-10 md:my-0 md:mb-20 sm:mx-56 transition ease-in-out duration-300 rounded-md mx-20 md:mr-20 md:ml-5 row-start-2 col-start-3 col-span-1 bg-zinc-100 dark:bg-zinc-700 hover:shadow-2xl'>
                <h2 className='text-center text-emerald-400 dark:text-green-400 font-bold pt-5 pb-1 text-md sm:text-2xl'>creative</h2>
                <hr className='rounded border-2 border-emerald-400 dark:border-green-400 mb-5 mx-6'></hr>
                <div id="creative" className='px-8 sm:px-0 lg:px-8 grid grid-cols-3 grid-rows-4 gap-2 pb-8 pt-2 justify-items-center text-zinc-700 dark:text-zinc-100'>
                    <img id="adobe photoshop" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/photoshop.png" : '/src/refs/dark/photoshop.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="adobe premiere pro" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/premierepro.png" : '/src/refs/dark/premierepro.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="adobe after effects" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/aftereffects.png" : '/src/refs/dark/aftereffects.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="figma" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "/src/refs/light/figma.png" : '/src/refs/dark/figma.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    {hoverCreative && (
                    <div className="row-start-4 col-span-3 text-emerald-400 dark:text-green-400 text-center">{id}</div>
                    )}
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default SkillSection