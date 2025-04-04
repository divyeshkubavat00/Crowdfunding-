import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Component/Header.jsx'
import Index from './Pages/Index.jsx'
import Banner from './Component/Banner.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <Index />
  </StrictMode>,
)
