import React from 'react'
import ReactDOM from 'react-dom/client'
import { CalcApp } from './components/CalcApp'
import { CalcProvider } from './context/CalcProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalcProvider>
      <CalcApp />
    </CalcProvider>
  </React.StrictMode>
)
