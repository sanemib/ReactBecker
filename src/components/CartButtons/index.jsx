import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import styles from "./cartbuttons.module.scss";


export const RemoveQuantity = ({id}) => {
    
    const { setCart, cart } = useContext(CartContext)

    const removeQuantity = () => {
        setCart(cart.map((cart) => cart.producto.id === id ? {...cart, producto: {...cart.producto, cantidad: cart.producto.cantidad-=1}} : null))
        setCart(cart.filter((cart) => cart.producto.cantidad !== 0))
    }
  return (
    <button className={styles.button} onClick={removeQuantity}>-</button>
  )
    }
        

export const AddQuantity = ({id}) => {
    
    const { setCart, cart } = useContext(CartContext)

    const addQuantity = () => {
        setCart(cart.map((cart) => cart.producto.id === id ? {...cart, producto: {...cart.producto, cantidad: cart.producto.cantidad+=1}} : null))
        setCart(cart.filter((cart) => cart.producto.cantidad !== 0))
    }
  return (
    <button className={styles.button} onClick={addQuantity}>+</button>
  )
    }