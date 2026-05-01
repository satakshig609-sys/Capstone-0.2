// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// 1. Import your Theme Provider
import { ThemeProvider } from './Context/ThemeContext.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. Wrap App with ThemeProvider so every page can access the theme */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
