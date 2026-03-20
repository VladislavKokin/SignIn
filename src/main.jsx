import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Autorization from './autorization/autorization.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Autorization />
  </StrictMode>,
)
