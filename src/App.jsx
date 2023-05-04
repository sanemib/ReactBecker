import './App.css'
import Navbar from './components/Navbar'
import { createTheme, styled, ThemeProvider, darken, alpha } from '@mui/material/styles';
import { useEffect, useState, createContext } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Carrito from './components/Carrito';



const customTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F2A61E',
    },
    secondary: {
      main: '#ffcc80',
    },
    warning: {
      main: '#ffea00',
    },
    error: {
      main: '#b71c1c',
    },
  },
});

const addDot = (number) =>{
  return number.toLocaleString("es-ES")
}

function App() {

  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <Navbar />
        {/* <Carrito /> */}
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/home" element={<Navigate to="/products" />} />
          <Route path="/cart" element={<Carrito/>} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/products" element={<Navigate to="/products/a" />} />
          <Route path="/products/a" element={<ItemListContainer/>} />
          <Route path="/products/a/:i" element={<ItemDetail/>}/>
          <Route path='/categories/:categories' element={<ItemListContainer/>}/>
          <Route path="/categories/:categories/:i" element={<ItemDetail/>}/>
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover theme="dark"/>
        </ThemeProvider>
    </div>
  )
}

export default App