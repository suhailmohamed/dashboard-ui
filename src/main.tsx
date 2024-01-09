import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './tailwind.css'
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />

    <Toaster
      position="bottom-right"
      toastOptions={{
        className: 'bg-blue-600 text-white text-sm font-normal'
      }}
      reverseOrder={false}
    />
  </React.StrictMode>,
)
