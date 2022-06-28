import React, { useState, useEffect } from 'react'
import HeroSection from './components/HeroSection'

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
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	return (
		<>
			<div className='bg-inherit'>
				<a href="www.typhic.com" className='transition ease-in-out duration-300 absolute md:fixed md:items-start z-10 left-3 top-1 md:left-10 hover:drop-shadow-xl hover:scale-110'>
					<img src="/src/refs/icon.png" alt="logo" className="w-12 h-12 md:w-16 md:h-16"></img>
				</a>
				<button 
					type='button' 
					onClick={changeTheme}
					className = "transition ease-in-out duration-300 material-icons absolute md:fixed md:items-end z-10 right-3 top-3  hover:text-zinc-600 dark:hover:text-zinc-50 dark:text-zinc-600 text-zinc-50 bg-zinc-600 dark:bg-zinc-50 dark:hover:bg-emerald-400 hover:bg-green-400 hover:from-emerald-400 hover:cursor-pointer hover:to-green-400 text-xl md:text-3xl p-2 py-1 rounded-full hover:drop-shadow-xl hover:scale-110"
				>{theme==='light' ? 'light_mode' : 'dark_mode'}</button>
			</div>
			<HeroSection></HeroSection>
		</>
	)
}

export default App