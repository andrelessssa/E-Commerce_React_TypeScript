import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './globalStyles/globalStyles'
import Header from "./components/Header"
import AppRouta from './routes'





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <GlobalStyles/>
    <Header/>
    <AppRouta />
   
  </React.StrictMode>,
)
