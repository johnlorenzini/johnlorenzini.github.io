import React , {useState, useEffect} from 'react'
import TypingHeader from './components/TypingHeader'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import AOS from "aos"
import "aos/dist/aos.css"
import { TbSun, TbMoonStars } from "react-icons/tb";

function App() {
    const [theme, setTheme] = useState(null);
    
    function changeTheme(){
        if(theme === "light"){
            localStorage.theme = 'dark'
            setTheme("dark");
        }
        else{
            localStorage.theme = 'light'
            setTheme("light");
        } 
      }

    useEffect(() => {
        AOS.init();
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme('dark');
        } else{
            setTheme('light');
        }
    });

    useEffect(() => {
        if (theme === 'dark') {
            console.log('switched');
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

  return (
    <>
        <div className='overflow-auto bg-cover fixBackground font-pop backdrop-blur-3xl'>
            
            <img src={theme === 'light' ? './src/light.jpg' : './src/dark.jpg'} alt="" className='h-screen fixed usebg'/>

            <button 
            type='button' 
            onClick={changeTheme}
            className = "transition ease-in-out duration-300 bg-inherit text-purple-100 drop-shadow-md hover:shadow-md fixed md:items-end right-3 top-3 hover:cursor-pointer text-4xl p-4 rounded-full hover:scale-110">
            {theme==='light' ? <TbSun></TbSun> : <TbMoonStars></TbMoonStars>}
            </button>
            <TypingHeader id="top"></TypingHeader>
            <HeroSection theme={theme}></HeroSection>
        </div>
    </>
  )
}

export default App