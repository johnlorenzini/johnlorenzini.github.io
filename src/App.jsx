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
		<body className="font-scp bg-zinc-100 dark:bg-zinc-700 transition-colors duration-300">
			<button 
			type='button' 
			onClick={changeTheme}
			className = "transition ease-in-out duration-300 material-icons fixed z-10 right-3 top-3  dark:text-zinc-600 text-zinc-50 bg-gradient-to-t from-emerald-400 to-green-400 text-2xl p-2 py-1 rounded-md shadow-xl hover:animate-pulse hover:scale-110"
			>{theme==='light' ? 'light_mode' : 'dark_mode'}</button>
				<HeroSection></HeroSection>
		</body>
	)
}

export default App