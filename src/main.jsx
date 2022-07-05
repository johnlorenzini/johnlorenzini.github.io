import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App className="bg-zinc-50 dark:bg-zinc-700 " />
  </React.StrictMode>
)
