import styles from './carrito.module.scss'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { AddQuantity, RemoveQuantity } from '../CartButtons'
import {AddDotContext} from '../../contexts/AddDotContext'
import { Button } from '@mui/material'
import "animate.css"
import swal from 'sweetalert'
import FinCompra from '../FinCompra'

function Carrito() {

    const {cart} = useContext(CartContext)
    const {addDot} = useContext(AddDotContext)




  return (
    <div className={styles.pestañaCarrito}>
        <h2 className={styles.title}>Carrito de compras</h2>
        {cart.length===0 ? <h3 className={styles.empty}>No hay productos en el carrito</h3> : null}
        {cart.map((element) => {
            return (
                <div key={element.producto.id} className={`${styles.producto} animate__fadeInUp`}>
                    <div className={styles.info}>
                        <div>
                            <img src={element.producto.imagen} className={styles.imagen} alt="" />
                            <p>{element.producto.nombre} {element.producto.marca}</p>
                        </div>
                        <div className={styles.btnandprice}>
                            <div className={styles.buttonsContainer}>
                                <AddQuantity id={element.producto.id}/>
                                <button className={styles.cantidad}>{element.producto.cantidad}</button>
                                <RemoveQuantity id={element.producto.id}/>
                            </div>
                            <h4 className={styles.price}>${addDot(element.producto.precio*element.producto.cantidad)}</h4>
                        </div>
                    </div>
                </div>
            )
        } )}
        <h3 className={styles.total}>Total: ${addDot(cart.reduce((acc, element) => acc + element.producto.precio*element.producto.cantidad, 0))}</h3>
        <FinCompra/>
    </div>
  )
}

export default Carrito