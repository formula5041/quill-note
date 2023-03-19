import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
)
