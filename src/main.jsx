import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AllContent from './components/AllContent.jsx'

createRoot(document.getElementById('root')).render(
  <AllContent>
    <StrictMode>
        <App />
    </StrictMode>
  </AllContent>,
)
