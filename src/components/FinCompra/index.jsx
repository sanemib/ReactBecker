import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import swal from "sweetalert";
import Button from "@mui/material/Button";
import { AddDotContext } from "../../contexts/AddDotContext";

function FinCompra() {

    const { cart, setCart } = useContext(CartContext)
    const { addDot } = useContext(AddDotContext)

    const finCompra = () => {
        swal({
            title: "¿Está seguro que quiere finalizar la compra?",
            text: "El total de la comra es $"+addDot(cart.reduce((acc, element) => acc + element.producto.precio*element.producto.cantidad, 0)),
            icon: "warning",
            buttons: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                swal({
                    title: "Compra finalizada!",
                    text: "Gracias por comprar con nosotros",
                    icon: "success",
                    button: "Ok",
                  });
                setCart([])
            }
          })
        }

  return (
    <Button variant="contained" sx={{m: 4}} onClick={finCompra}>Finalizar compra</Button>
  )
}

export default FinCompra