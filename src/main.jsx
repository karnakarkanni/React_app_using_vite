import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import App1 from './app1.jsx'
import App2 from './app2.jsx'
import App3 from './app3.jsx'
import App4 from './app4.jsx'
import App5 from './app5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App1/>
    <App2/>
    <App3/>
    <App4/>
    <App5/>


  </StrictMode>,
)
