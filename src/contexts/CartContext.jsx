import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()




const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    const [cartLenght, setCartLenght] = useState(0);

    const getCarrito = async () => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
         setCart(items);
        }
    }

    useEffect(() => {
        getCarrito()
    }, [])

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(cart));
        setCartLenght(cart.length)
    }, [cart])


    return (
        <CartContext.Provider value={{ cart, setCart, cartLenght }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;