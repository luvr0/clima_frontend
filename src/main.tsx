import Home from './components/section/home/Home'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
