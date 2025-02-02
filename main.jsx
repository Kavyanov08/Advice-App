import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AdviceApp } from './AdviceApp'
import './AdviceApp.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdviceApp/>
  </StrictMode>,
)
