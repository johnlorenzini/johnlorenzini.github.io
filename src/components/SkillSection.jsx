import React, { useState } from 'react'

function SkillSection({theme}) {
    const [hoverDev, sethoverDev] = useState(false);
    const [hoverTech, sethoverTech] = useState(false);
    const [hoverCreative, sethoverCreative] = useState(false);
    const [id, setId] = useState("");

    function MouseEnter(event){
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

        <div id="skills" className='scale-90 sm:scale-100 md:grid md:grid-flow-col md:grid-cols-4 md:grid-rows-2'>
            <div id="dev" className='hover:-translate-y-2 sm:my-10 md:my-0 md:mb-20 sm:mx-56 transition ease-in-out duration-300 rounded-md mx-20 md:mx-0 row-start-1 md:col-start-2 md:col-span-2 bg-zinc-100 dark:bg-zinc-700 hover:shadow-2xl'>
                <h2 className='text-center text-emerald-400 dark:text-green-400 font-bold pt-5 pb-1 text-md sm:text-2xl'>development</h2>
                <hr className='rounded border-2 border-emerald-400 dark:border-green-400 mb-5 mx-6'></hr>
                <div id="dev" className='px-8 sm:px-0 md:px-8 grid grid-cols-3 grid-rows-3 gap-2 pb-8 pt-2 justify-items-center text-zinc-700 dark:text-zinc-100'>
                    <img id="python" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/python.png" : 'assets/img/dark/python.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="c++" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/cplusplus.png" : 'assets/img/dark/cplusplus.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="swiftUI" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/swift.png" : 'assets/img/dark/swift.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="java" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/java.png" : 'assets/img/dark/java.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="react" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/react.png" : 'assets/img/dark/react.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="tailwind" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/tailwindcss.png" : 'assets/img/dark/tailwindcss.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="html" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/html5.png" : 'assets/img/dark/html5.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="css" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/css3.png" : 'assets/img/dark/css3.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="javascript" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/javascript.png" : 'assets/img/dark/javascript.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" /> 
                </div>
                <div className="h-8">
                {hoverDev && (
                    <div className="row-start-4 col-span-3 text-emerald-400 dark:text-green-400 text-center">{id}</div>
                )}
                </div>
            </div>
            <div id="tech" className='hover:-translate-y-2 my-10 md:my-0 md:mb-20 sm:mx-56 transition ease-in-out duration-300 rounded-md mx-20 md:ml-20 md:mr-5 row-start-2 md:col-start-1 md:col-span-2 bg-zinc-100 dark:bg-zinc-700 hover:shadow-2xl'>
                <h2 className='text-center text-emerald-400 dark:text-green-400 font-bold pt-5 pb-1 text-md sm:text-2xl'>technologies</h2>
                <hr className='rounded border-2 border-emerald-400 dark:border-green-400 mb-5 mx-6'></hr>
                <div id="tech" className='px-8 sm:px-0 md:px-8 grid grid-cols-3 grid-rows-3 gap-2 pb-8 pt-2 justify-items-center text-zinc-700 dark:text-zinc-100'>
                    <img id="firebase" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/firebase.png" : 'assets/img/dark/firebase.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="jupyter notebook" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/jupyter.png" : 'assets/img/dark/jupyter.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="git" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/git.png" : 'assets/img/dark/git.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="visual studio code" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/vscode.png" : 'assets/img/dark/vscode.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="xcode" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/xcode.png" : 'assets/img/dark/xcode.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="numpy" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/numpy.png" : 'assets/img/dark/numpy.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="anaconda" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/anaconda.png" : 'assets/img/dark/anaconda.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="unix/macOS" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/apple.png" : 'assets/img/dark/apple.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="windows" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/windows8.png" : 'assets/img/dark/windows8.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                </div>
                <div className="h-8">
                {hoverTech && (
                    <div className="row-start-4 col-span-3 text-emerald-400 dark:text-green-400 text-center">{id}</div>
                )}
                </div>
            </div>
            
            <div id="creative" className='hover:-translate-y-2 my-10 md:my-0 md:mb-20 sm:mx-56 transition ease-in-out duration-300 rounded-md mx-20 md:mr-20 md:ml-5 row-start-2 md:col-start-3 md:col-span-2 bg-zinc-100 dark:bg-zinc-700 hover:shadow-2xl'>
                <h2 className='text-center text-emerald-400 dark:text-green-400 font-bold pt-5 pb-1 text-md sm:text-2xl'>creative</h2>
                <hr className='rounded border-2 border-emerald-400 dark:border-green-400 mb-5 mx-6'></hr>
                <div id="creative" className='px-8 sm:px-0 md:px-8 grid grid-cols-3 grid-rows-3 gap-2 pb-8 pt-2 justify-items-center text-zinc-700 dark:text-zinc-100'>
                    <img id="adobe photoshop" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/photoshop.png" : 'assets/img/dark/photoshop.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="adobe premiere pro" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/premierepro.png" : 'assets/img/dark/premierepro.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="adobe after effects" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/aftereffects.png" : 'assets/img/dark/aftereffects.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                    <img id="figma" onClick={MouseEnter} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={theme === "light" ? "assets/img/light/figma.png" : 'assets/img/dark/figma.png'} className="transition ease-in-out duration-300 w-8 sm:w-14 hover:border-2 border-emerald-400 dark:border-green-400 rounded-md" alt="/" />
                </div>
                <div className="h-8">
                    {hoverCreative && (
                        <div className="row-start-4 col-span-3 text-emerald-400 dark:text-green-400 justify-center text-center">{id}</div>
                    )}
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default SkillSection