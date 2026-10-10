import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Copy from './Copy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Copy />
  </StrictMode>,
)
