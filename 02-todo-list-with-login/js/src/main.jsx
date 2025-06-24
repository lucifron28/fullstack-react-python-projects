import { StrictMode } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
