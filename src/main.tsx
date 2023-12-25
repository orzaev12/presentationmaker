import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import PresentationProvider from './context/presentation.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PresentationProvider>
      <App/>
    </PresentationProvider>
  </React.StrictMode>,
)
