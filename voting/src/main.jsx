import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import VoteContextProvider from './store/VoteContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VoteContextProvider>
      <App />
    </VoteContextProvider>
  </React.StrictMode>,
)
