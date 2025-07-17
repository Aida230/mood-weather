import Header from "./Layout/Header.jsx";
import App from './App.jsx'
import Footer from "./Layout/Footer.jsx"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <App />
    <Footer/>
  </StrictMode>,
)
