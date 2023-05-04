import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

function AddCart(producto) {

  const {cart, setCart} = useContext(CartContext)

  const cartPush = () => {
    const newProduct = producto
    newProduct.producto["cantidad"] = 1
    setCart((cart)=> cart.concat(newProduct))
  }



    const notify = () => toast.success("Agregaste un articulo al carrito", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

  return (
    <Button variant='outlined' size="small" onClick={() => {
      const i = cart.findIndex(item => item.producto.id === producto.producto.id)
      i !== -1 ? cart[i].producto.cantidad += 1 : cartPush()
      notify()
  }}>Añadir al carrito</Button>
  )
}

export default AddCart