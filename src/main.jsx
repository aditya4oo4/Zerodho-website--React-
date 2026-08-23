import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import Homepage from "./landing_page/home/Homepage.jsx";
import SupportPage from './landing_page/support/SupportPage.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage />
  </StrictMode>,
)
