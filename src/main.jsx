import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import CartProvider from './contexts/CartContext'
import AddDot from './contexts/AddDotContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <AddDot>
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    </AddDot>
  </CartProvider>
)
